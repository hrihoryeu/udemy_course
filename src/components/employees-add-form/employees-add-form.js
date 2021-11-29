import { Component } from "react";

import './employees-add-form.css'

export default class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        const {name, salary} = this.state;
        e.preventDefault();
        if (name.length < 3 || !salary) return;
        this.props.onAdd(name, salary);
        this.setState({
            name: '',
            salary: '',
        })
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="What's the name"
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Salary amount ($)"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button
                        type='submit'
                        className="btn btn-outline-light" >
                        Add
                    </button>
                </form>
            </div>
        )
    }
}
