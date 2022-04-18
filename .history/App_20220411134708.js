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
  const [activeSwitch, setIsActiveSwitch] = useState(1);

  useEffect(() => {
    Orientation.lockToLandscapeRight();
  }, []);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <LeftSideMenu />
      <CenteredView />
      <RightSideMenu />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection:"row",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
