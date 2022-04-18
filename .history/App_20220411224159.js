import {
  Dimensions,
  FlatList,
  LogBox,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import SwitchButton from 'switch-button-react-native';
import LeftSideMenu from './src/LeftSideMenu';
import RightSideMenu from './src/RightSideMenu';
import CenteredView from './src/CenteredView';
import LinearGradient from 'react-native-linear-gradient';
import CustomSwitch from './src/CustomeSwitch';
import Menu from './src/Menu';

LogBox.ignoreAllLogs();
export default function App() {
  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  return (
    <LinearGradient
      colors={['#0F0F0F', '#3E4345', '#202427']}
      style={styles.linearGradient}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <LeftSideMenu />
        <View style={{marginRight: 20, marginLeft: 50}}>
          <CenteredView />
        </View>
        <RightSideMenu />
      </View>

      <View style={{borderColor: 'silver', borderWidth: 0.5, marginTop: 10}} />

      <Menu />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 50,
    borderRadius: 5,
    paddingTop: 20,
  },
});
