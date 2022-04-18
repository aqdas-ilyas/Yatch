import {Text, StyleSheet, View, FlatList} from 'react-native';
import React, {Component} from 'react';

let data = [
  {id: 1, title: 'WELCOME'},
  {id: 2, title: 'STATUS'},
  {id: 3, title: 'ELECTRIC'},
  {id: 4, title: 'SYSTEMS'},
  {id: 5, title: 'UNDER ENGINE'},
  {id: 6, title: 'SAILING'},
  {id: 7, title: 'WEATHER DATA'},
  {id: 8, title: 'MANUALS'},
  {id: 9, title: 'ADMINS'},
];
export default class Menu extends Component {
  render() {
    return (
      <FlatList
        horizontal
        data={data}
        contentContainerStyle={{marginVertical: 10}}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View style={{marginLeft: index == 0 ? 0 : 100}}>
              <Text
                style={{
                  color: index == 5 ? 'silver' : '#4B4B4B',
                  fontSize: index == 5 ? 32 : 24,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                }}>
                {item.title}
              </Text>
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({});