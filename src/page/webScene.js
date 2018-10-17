import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class WebScene extends Component {

  static navigationOptions = (navigation, navigationOptions) => {
    return ({
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#f5f5f5'
      }
    })
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}