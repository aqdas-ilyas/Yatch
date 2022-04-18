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
import LeftSideMenu from './src/Screens/LeftSideMenu';
import RightSideMenu from './src/Screens/RightSideMenu';
import CenteredView from './src/Screens/CenteredView';
import LinearGradient from 'react-native-linear-gradient';
import Menu from './src/Components/Menu';

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
        <View style={{marginHorizontal: 20}}>
          <CenteredView />
        </View>
        <RightSideMenu />
      </View>

      {/* <View
        style={{borderTopColor: 'silver', borderTopWidth: 0.5, marginTop: 10}}>
        <Menu />
      </View> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 50,
    borderRadius: 5,
    paddingTop: 30,
  },
});
