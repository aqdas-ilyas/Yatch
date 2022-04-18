import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import React, {Component} from 'react';

export default class CenteredView extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            borderColor: '#707070',
            borderWidth: 1,
            paddingVertical: 5,
            borderRadius: 20,
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'grey'}}>
              POS
            </Text>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'grey'}}>
              GPS
            </Text>
          </View>

          <Text
            style={{
              fontSize: 40,
              color: '#AAAAAA',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            N 36°54’51.4’’ | W 006°51’50.0’’
          </Text>
        </View>

        <Image
          source={require('../../assets/Layer.png')}
          style={{
            height: Dimensions.get('window').height / 1.7,
            width: Dimensions.get('window').height / 1.7,
            margin: 20,
            marginVertical: 50,
          }}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              borderColor: '#707070',
              borderWidth: 1,
              borderRadius: 20,
              padding: 20,
              marginHorizontal: 10,
              width: Dimensions.get('window').width / 7.5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#AAAAAA'}}>
                WATER TEMP
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#AAAAAA',
                  marginLeft: 30,
                }}>
                °C
              </Text>
            </View>

            <Text
              style={{
                textAlign: 'center',
                marginLeft: 50,
                fontSize: 65,
                color: '#AAAAAA',
                fontWeight: 'bold',
              }}>
              28.3
            </Text>
          </View>

          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 20,
              padding: 20,
              marginHorizontal: 10,
              width: Dimensions.get('window').width / 7.5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#AAAAAA'}}>
                DEPTH
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#AAAAAA',
                  marginLeft: 40,
                }}>
                m
              </Text>
            </View>

            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 65,
                color: '#AAAAAA',
              }}>
              36.5
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
