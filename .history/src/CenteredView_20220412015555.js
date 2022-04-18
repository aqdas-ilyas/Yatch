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
            borderRadius: 20,
            padding: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, color: '#AAAAAA'}}>POS</Text>
            <Text style={{fontSize: 24, color: '#AAAAAA'}}>GPS</Text>
          </View>

          <Text style={{fontSize: 40, color: '#AAAAAA', textAlign: 'center'}}>
            N 36°54’51.4’’ | W 006°51’50.0’’
          </Text>
        </View>

        <Image
          source={require('../assets/Layer.png')}
          style={{
            height: Dimensions.get('window').height / 1.65,
            width: Dimensions.get('window').height / 1.65,
            margin: 10,
          }}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 20,
              padding: 30,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 18, color: 'white'}}>WATER TEMP</Text>
              <Text style={{fontSize: 18, color: 'white', marginLeft: 30}}>
                °C
              </Text>
            </View>

            <Text
              style={{
                textAlign: 'center',
                marginLeft: 50,
                fontSize: 48,
                color: 'white',
              }}>
              28.3
            </Text>
          </View>

          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 20,
              padding: 30,
              marginHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 18, color: 'white'}}>DEPTH</Text>
              <Text style={{fontSize: 18, color: 'white', marginLeft: 30}}>
                m
              </Text>
            </View>

            <Text style={{textAlign: 'center', fontSize: 48, color: 'white'}}>
              36.5
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});