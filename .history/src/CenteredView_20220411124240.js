import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import CustomSwitch from './CustomeSwitch';

export default class CenteredView extends Component {
  onSelectSwitch = index => {
    alert('Selected index: ' + index);
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
            <Text style={{fontSize: 10}}>POS</Text>
            <Text style={{fontSize: 10}}>GPS</Text>
          </View>

          <Text>N 36°54’51.4’’ | W 006°51’50.0’’</Text>
        </View>

        <Image
          source={require('../assets/Layer.png')}
          style={{height: 210, width: 210}}
        />

        <View style={{alignItems: 'center', margin: 20}}>
          <CustomSwitch
            selectionMode={2}
            roundCorner={20}
            // roundCorner={false}
            option1={'Option1'}
            option2={'Option2'}
            onSelectSwitch={this.onSelectSwitch}
            selectionColor={'red'}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
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

            <Text style={{textAlign: 'center', marginLeft: 30, fontSize: 16}}>
              28.3
            </Text>
          </View>

          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
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
