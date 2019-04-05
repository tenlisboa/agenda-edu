import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login } from '../../actions/auth'

import ButtonBlock from '../Shared/ButtonBlock'
import { Screen, Container, Input, Title, Label } from './styles'

class Login extends Component {
  state = { inEmailFocus: false, inPasswordFocus: false }
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

  render() {
    const { token, error } = this.props
    const { inEmailFocus, inPasswordFocus } = this.state
    return (
      <Screen>
        <Container>
          <Title>Faça seu login 🔑</Title>
          <View>
            <Label>E-mail ou usuário</Label>
            <Input inFocus={inEmailFocus} onFocus={this.handleEmailFocus} />
          </View>
          <View>
            <Label>Senha</Label>
            <Input
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
