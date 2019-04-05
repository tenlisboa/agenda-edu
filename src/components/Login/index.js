import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login } from '../../actions/auth'

import ButtonBlock from '../Shared/ButtonBlock'
import InputText from '../Shared/InputText'

import { Screen, Container, Input, Title, Label } from './styles'

class Login extends Component {
  state = { inEmailFocus: false, inPasswordFocus: false, showPassword: false }
  componentDidMount() {
    const { login } = this.props

    login('gabriel@mail.com', '123456')
  }

  handleEmailFocus = () => {
    this.setState({ inEmailFocus: true, inPasswordFocus: false })
  }

  handlePasswordFocus = () => {
    this.setState({ inPasswordFocus: true, inEmailFocus: false })
  }

  handleShowHidePassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  render() {
    const { token, error } = this.props
    const { inEmailFocus, inPasswordFocus, showPassword } = this.state
    return (
      <Screen>
        <Container>
          <Title>Faça seu login 🔑</Title>
          <View>
            <Label>E-mail ou usuário</Label>
            <InputText
              iconName="envelope"
              iconColor="#AAAAAA"
              inFocus={inEmailFocus}
              onFocus={this.handleEmailFocus}
            />
          </View>
          <View>
            <Label>Senha</Label>
            <InputText
              iconName={showPassword ? 'eye' : 'eye-slash'}
              iconColor="#AAAAAA"
              iconTouchable={true}
              iconOnPress={this.handleShowHidePassword}
              secureTextEntry={!showPassword}
              inFocus={inPasswordFocus}
              onFocus={this.handlePasswordFocus}
            />
          </View>
        </Container>

        <ButtonBlock title="Entrar" onPress={() => false} />
      </Screen>
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
