import React, { Component } from 'react'

import { View, Text } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login } from '../../actions/auth'

// import { Container } from './styles';

class Login extends Component {
  componentDidMount() {
    const { login } = this.props

    login('gabriel@mail.com', '123456')
  }

  render() {
    const { token, error } = this.props
    return (
      <View>
        <Text>Login</Text>
        <Text>Token: {token}</Text>
        <Text>Error: {error}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error
})

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
