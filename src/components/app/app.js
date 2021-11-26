import React from "react";
import './app.css';
import AppInfo from "../app-info/app-info";
import SearchBar from "../seach-bar/search-bar";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <AppInfo />
                <div className='search-bar'>
                    <SearchBar />
                    <AppFilter />
                </div>
                <EmployeesList />
                <EmployeesAddForm />
            </div>
    );
    }
}