import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class AuthLoading extends Component {

  componentDidMount() {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View>
        <Text> AuthLoading </Text>
      </View>
    )
  }
}
