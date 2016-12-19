import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import { Card, CardSection, Button, Confirm } from './common'
import { employeeDelete, employeeUpdate, employeeSave } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {
    state = { showModal: false }

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
                    <Button onPress={
                        () => this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid } = this.props)
                    }>
                        Save changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={
                        () => Communications.text(this.props.phone, `Your upcomming shift is on ${this.props.shift}.`)
                    }>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: true })}>
                        Fire
                    </Button>
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onAccept={() => this.props.employeeDelete({ uid: this.props.employee.uid })}
                    onDecline={() => this.setState({ showModal: false })}
                >
                    Are you sure you want to fire her/him?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return { name, phone, shift } = state.employeeForm
}

export default connect(mapStateToProps, {
    employeeDelete,
    employeeUpdate, 
    employeeSave,
})(EmployeeEdit)
