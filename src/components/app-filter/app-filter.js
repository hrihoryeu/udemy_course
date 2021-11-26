import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type='button'>
                    All employees
            </button>
            <button
                className="btn btn-outline-light"
                type='button'>
                    To increase
            </button>
            <button
                className="btn btn-outline-light"
                type='button'>
                    Salary more then $1000
            </button>
        </div>
    )
}

export default AppFilter
