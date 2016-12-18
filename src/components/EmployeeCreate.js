import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        planeholder="06 99 99 99 99"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return { name, phone, shift } = state.employeeForm
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)
