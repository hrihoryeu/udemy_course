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
            ]
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

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, increase: !oldItem.increase};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`)
    }

    render() {
        const {data} = this.state;
        return (
            <div className='app'>
                <AppInfo />
                <div className='search-bar'>
                    <SearchBar />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise} />
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}
