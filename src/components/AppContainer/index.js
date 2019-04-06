import React, { Component } from 'react'

import { TouchableOpacity, Text } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { FontAwesome as Icon } from '@expo/vector-icons'

import { Container, Header, Title } from './styles'

class AppContainer extends Component {
  render() {
    return (
      <Container>
        {this.props.showHeader && (
          <Header>
            <TouchableOpacity onPress={this.props.iconOnPress}>
              <Icon name={this.props.icon} size={35} color={'#333333'} />
            </TouchableOpacity>
            <Title>{this.props.title}</Title>
          </Header>
        )}
        {this.props.children}
      </Container>
    )
  }
}

const mapStateToProps = state => ({})

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(AppContainer)
