import { Component} from "react";

import './search-bar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <input
                type="text"
                className='form-control search-input'
                placeholder='Find employee' />
        )
    }
}

