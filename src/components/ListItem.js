import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { CardSection } from './common'

class ListItem extends Component {
    render() {
        const { name } = this.props.employee

        return (
            <CardSection style={{ justifyContent: 'center' }}>
                <Text style={styles.title}>
                    {name}
                </Text>
            </CardSection>
        )
    }
}

const styles = {
    title: {
        fontSize: 18,
    }
}

export default ListItem
