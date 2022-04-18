import {Text, StyleSheet, View, FlatList} from 'react-native';
import React, {Component} from 'react';

let data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
export default class Menu extends Component {
  render() {
    return (
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>Hello</Text>
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({});
