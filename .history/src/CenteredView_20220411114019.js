import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class CenteredView extends Component {
  render() {
    return (
      <View>
        <View style={{borderColor: 'silver', borderWidth: 1}}>
          <View>
            <Text>POS</Text>
            <Text>N 36°54’51.4’’ | W 006°51’50.0’’</Text>
            <Text>GPS</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
