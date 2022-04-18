import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class CenteredView extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            borderColor: 'silver',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>POS</Text>
            <Text>GPS</Text>
          </View>

          <Text>N 36°54’51.4’’ | W 006°51’50.0’’</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                justifyContent:'center'
              }}>
              <Text style={{fontSize:10, marginRight:10}}>WATER TEMP</Text>
              <Text style={{fontSize:10}}>°C</Text>
            </View>

            <Text style={{textAlign:"center", fontSize:16}}>28.3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
