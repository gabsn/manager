import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { CardSection, Input } from './common'

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={
                            value => this.props.employeeUpdate({ prop: 'name', value })
                        }
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="06 99 99 99 99"
                        value={this.props.phone}
                        onChangeText={
                            value => this.props.employeeUpdate({ prop: 'phone', value })
                        }
                    />
                </CardSection>

                <CardSection>
                    <Text style={pickerTextStyle}>
                        Shift
                    </Text>

                    <Picker 
                        style={{ flex: 1, marginLeft: 60 }}
                        selectedValue={this.props.shift}
                        onValueChange={
                            value => this.props.employeeUpdate({ prop: 'shift', value})
                        }
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const pickerTextStyle = {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 20,
}

const mapStateToProps = state => {
    return { name, phone, shift } = state.employeeForm
}
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm)
