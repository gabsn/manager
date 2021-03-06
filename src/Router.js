import React from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
    return (
        <Router> 
            <Scene key="auth" >
                <Scene 
                    key="login"
                    component={LoginForm}
                    title="Please Login"
                    style={sceneStyle}
                />
            </Scene>

            <Scene key="main" >
                <Scene
                    key="employeeList"
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    component={EmployeeList}
                    title="Employees"
                    style={sceneStyle}
                />

                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee"
                    style={sceneStyle}
                />

                <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit Employee"
                    style={sceneStyle}
                />
            </Scene>
        </Router>
    )
}

const sceneStyle = {
    paddingTop: 50 
}

export default RouterComponent
