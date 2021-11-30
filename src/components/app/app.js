import React from "react";

import './app.css';

import AppInfo from "../app-info/app-info";
import SearchBar from "../seach-bar/search-bar";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Yegor G.', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Galina T.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Pavel S.', salary: 5000, increase: false, rise: false, id: 3},
            ],
            term: '',
            mode: 'increase'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmployee = (items, mode) => {
        switch (mode) {
            case 'increase':
                return items.filter(item => item.increase);
            case 'mt1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onSelectMode = (mode) => {
        this.setState({mode});
    }

    render() {
        const {data, term, mode} = this.state;
        const employeesAmount = data.length;
        const employeesIncreaseAmount = data.filter(item => item.increase).length;
        const visibleData = this.filterEmployee(this.searchEmployee(data, term), mode);

        return (
            <div className='app'>
                <AppInfo
                    employeesAmount={employeesAmount}
                    employeesIncreaseAmount={employeesIncreaseAmount} />
                <div className='search-bar'>
                    <SearchBar
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        mode={mode}
                        onSelectMode={this.onSelectMode}/>
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}
