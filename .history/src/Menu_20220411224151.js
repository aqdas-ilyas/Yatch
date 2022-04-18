import { Text, StyleSheet, View, FlatList } from 'react-native'
import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <FlatList
      data={data}
      keyExtractor={item=> item.id}
      renderItem={({item,index})=>{
          return(
              <View>
                  <Text>Hello</Text>
              </View>
          )
      }}
      />
    )
  }
}

const styles = StyleSheet.create({})