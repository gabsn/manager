import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'

class LoginForm extends Component {
    onEmailChange(text) {
        return this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        return this.props.passwordChanged(text)
    }

    onButtonPress() {
        const { email, password } = this.props

        return this.props.loginUser({ email, password})
    }

    renderButton() {
        if (this.props.loading)
            return <Spinner />
        else
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeHolder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeHolder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorText}>
                    {this.props.error}
                </Text>
                
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorText: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center',
    }
}

const mapStateToProps = state => ({ email, password, error, loading } = state.auth)

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)
