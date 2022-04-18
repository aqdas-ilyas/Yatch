import {
  Dimensions,
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

LogBox.ignoreAllLogs();
export default function App() {
  useEffect(() => {
    Orientation.lockToLandscapeRight();
  }, []);

  const onSelectSwitch = index => {
    console.log('Selected index: ' + index);
  };

  return (
    <LinearGradient
      colors={['#0F0F0F', '#3E4345', '#202427']}
      style={styles.linearGradient}>
      <StatusBar translucent backgroundColor={'transparent'} />
      {/* <LeftSideMenu />
      <View style={{marginRight: 20, marginLeft: 50}}>
        <CenteredView />
      </View>
      <RightSideMenu /> */}

      <CustomSwitch
        selectionMode={2}
        roundCorner={true}
        option1={'ON'}
        option2={'OFF'}
        onSelectSwitch={onSelectSwitch}
        selectionColor={'#000000CB'}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    padding: 50,
    borderRadius: 5,
  },
});
