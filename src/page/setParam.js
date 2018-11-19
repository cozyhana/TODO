import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export class SetParamSecen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let navigation = this.props.navigation;
    console.log(styles.container)
    return (
      <View style={styles.container}>
        <Text style={styles.text}> navigation.getParam('name', 'Peter',default): {navigation.getParam('name', 'Peter')}  </Text>
        <Text style={styles.text}> navigation.state.params.name: {navigation.state.params.name}  </Text>
        <Button
          title="setParams"
          onPress={() => navigation.setParams({
            'name': Math.ceil(Math.random() * 20)
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    margin: 10,
  }
})