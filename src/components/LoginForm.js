import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class LoginForm extends Component {
    onEmailChange(text) {
        return this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        return this.props.passwordChanged(text)
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
                
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
    }
}

export default connect(null, { emailChanged, passwordChanged })(LoginForm)
