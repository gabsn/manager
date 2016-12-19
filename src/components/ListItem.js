import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from './common'

class ListItem extends Component {
    render() {
        const { name } = this.props.employee

        return (
            <TouchableWithoutFeedback onPress={() => {
                Actions.employeeEdit({ employee: this.props.employee })
            }}>
                <View>
                    <CardSection style={{ justifyContent: 'center' }}>
                        <Text style={styles.title}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    title: {
        fontSize: 18,
    }
}

export default ListItem
