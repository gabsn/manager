import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Button } from './common'
import { employeeUpdate, employeeSave } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={() => {
                        const { name, phone, shift } = this.props

                        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid})}}
                    >
                        Save changes
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return { name, phone, shift } = state.employeeForm
}

export default connect(mapStateToProps, {
    employeeUpdate, 
    employeeSave,
})(EmployeeEdit)
