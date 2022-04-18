import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomSwitch from './CustomSwitch';

export default function Dashboard({navigation}) {
  const onSelectSwitch = index => {
    alert('Selected index: ' + index);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 25, margin: 20, textAlign:'center'}}>
        React native switch selection button
      </Text>
      <View style={{alignItems: 'center', margin: 20}}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'First'}
          option2={'Second'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'blue'}
        />
      </View>
      <View style={{alignItems: 'center', margin: 20}}>
        <CustomSwitch
          selectionMode={2}
          roundCorner={false}
          option1={'Option1'}
          option2={'Option2'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'red'}
        />
      </View>
    </View>
  );
}