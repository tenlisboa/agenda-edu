import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import { Container, Divider, Title, MenuText, MenuOption } from './styles'

import { FontAwesome as Icon } from '@expo/vector-icons'

class Menu extends Component {
  render() {
    return (
      <Container>
        <Title>Menu</Title>
        <Divider />

        <MenuOption onPress={this.props.logout}>
          <Icon name="sign-out" size={30} color="#333333" />
          <MenuText>Sair</MenuText>
        </MenuOption>
      </Container>
    )
  }
}

export default Menu
