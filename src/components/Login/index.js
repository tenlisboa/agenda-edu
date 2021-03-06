import React, { Component } from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login } from '../../actions/auth'

import AppContainer from '../AppContainer'
import InputText from '../Shared/InputText'

import { Screen, Container, Button, Title, Label } from './styles'

class Login extends Component {
  state = {
    email: '',
    password: '',
    inEmailFocus: false,
    inPasswordFocus: false,
    showPassword: false
  }

  handleEmail = email => {
    this.setState({ email })
  }

  handlePassword = password => {
    this.setState({ password })
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

  submit = async () => {
    const { login } = this.props
    const { email, password } = this.state

    const token = await login(email, password)

    if (token) {
      this.setState({ email: '', password: '' })
      this.props.navigation.navigate('Events')
    }
  }

  render() {
    const { error, busy } = this.props
    const {
      inEmailFocus,
      inPasswordFocus,
      showPassword,
      password,
      email
    } = this.state
    return (
      <AppContainer>
        <Screen>
          <Container>
            <Title>Faça seu login 🔑</Title>
            <View style={{ marginTop: 47 }}>
              <Label>E-mail ou usuário</Label>
              <InputText
                iconName="envelope"
                iconColor="#AAAAAA"
                inFocus={inEmailFocus}
                onFocus={this.handleEmailFocus}
                value={email}
                onChangeText={email => this.handleEmail(email)}
                hasError={!!error}
                error={error}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Label>Senha</Label>
              <InputText
                iconName={showPassword ? 'eye' : 'eye-slash'}
                iconColor="#AAAAAA"
                iconTouchable={true}
                iconOnPress={this.handleShowHidePassword}
                secureTextEntry={!showPassword}
                inFocus={inPasswordFocus}
                onFocus={this.handlePasswordFocus}
                value={password}
                onChangeText={password => this.handlePassword(password)}
              />
            </View>
          </Container>

          <Button
            activeOpacity={0.5}
            disabled={busy}
            title="Entrar"
            onPress={this.submit}
          />
        </Screen>
      </AppContainer>
    )
  }
}

const mapStateToProps = state => ({
  busy: state.auth.busy,
  error: state.auth.error
})

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
