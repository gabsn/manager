import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props } />
                <CardSection>
                    <Button 
                        onPress={() => {
                            this.props.employeeCreate({ name, phone, shift } = this.props)}
                        }
                    >
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const defaultShift = shift => shift || 'Monday'

const mapStateToProps = state => {
    return { name, phone, shift } = state.employeeForm
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)
