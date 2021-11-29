import "./app-info.css";

const AppInfo = ({employeesAmount, employeesIncreaseAmount}) => {
    return (
        <div className='app-info'>
            <h1>Accounting for employees in the company "Yegor Inc."</h1>
            <h2>Amount of employees: {employeesAmount}</h2>
            <h2>Amount of employees who got the bonus: {employeesIncreaseAmount}</h2>
        </div>
    )
}

export default AppInfo
