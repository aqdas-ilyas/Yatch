import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import React, {Component} from 'react';

export default class CenteredView extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            borderColor: 'silver',
            borderWidth: 1,
            borderRadius: 10,
            padding: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, color: 'white'}}>POS</Text>
            <Text style={{fontSize: 24, color: 'white'}}>GPS</Text>
          </View>

          <Text style={{fontSize: 40, color: 'white', textAlign: 'center'}}>
            N 36°54’51.4’’ | W 006°51’50.0’’
          </Text>
        </View>

        <Image
          source={require('../assets/Layer.png')}
          style={{
            height: Dimensions.get('window').height / 1.5,
            width: Dimensions.get('window').height / 1.5,
            margin: 10,
          }}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 10,
              padding: 30,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 8}}>WATER TEMP</Text>
              <Text style={{fontSize: 10, marginLeft: 10}}>°C</Text>
            </View>

            <Text style={{textAlign: 'center', fontSize: 16}}>
              28.3
            </Text>
          </View>

          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 10,
              padding: 30,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 8}}>DEPTH</Text>
              <Text style={{fontSize: 10, marginLeft: 10}}>m</Text>
            </View>

            <Text style={{textAlign: 'center', fontSize: 16}}>36.5</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
