import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
    return (
        <Router style={styles.router}>
            <Scene 
                key="login"
                component={LoginForm}
                title="Please Login"
                initial
            />
            <Scene
                key="employeeList"
                component={EmployeeList}
                title="Employees"
            />
        </Router>
    )
}

const styles = {
    router: {
        paddingTop: 50
    }
}

export default RouterComponent
