import React from "react";
import './app.css';
import AppInfo from "../app-info/app-info";
import SearchBar from "../seach-bar/search-bar";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

const App = () => {
    const data = [
        {name: 'Yegor G.', salary: 800, increase: false, rise: false, id: 1},
        {name: 'Galina T.', salary: 3000, increase: true, rise: false, id: 2},
        {name: 'Pavel S.', salary: 5000, increase: false, rise: false, id: 3},
    ];

    return (
        <div className='app'>
            <AppInfo />
            <div className='search-bar'>
                <SearchBar />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;
