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

LogBox.ignoreAllLogs();
export default function App() {
  const [speedValue, setSpeedValue] = React.useState('0');
  const [AWA, setAWAValue] = React.useState('0');
  const [speedValue, setSpeedValue] = React.useState('0');
  const [speedValue, setSpeedValue] = React.useState('0');

  useEffect(() => {
    Orientation.lockToLandscape();

    LeftSideFunc();
  }, []);

  const LeftSideFunc = () => {
    // Speed Value
    const min = 1;
    const max = 10;
    setInterval(
      () =>
        setSpeedValue(parseFloat(min + Math.random() * (max - min)).toFixed(1)),
      5000,
    );

    // AWA Value
    const min1 = 100;
    const max1 = 200;
    setInterval(
      () =>
        setAWAValue(parseFloat(min1 + Math.random() * (max1 - min1)).toFixed(0)),
      5000,
    );
  };

  return (
    <LinearGradient
      colors={['#0F0F0F', '#3E4345', '#202427']}
      style={styles.linearGradient}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <LeftSideMenu speedvalue={speedValue} />
        <View style={{marginHorizontal: 20}}>
          <CenteredView />
        </View>
        <RightSideMenu speedvalue={speedValue} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 50,
    borderRadius: 5,
    paddingTop: 30,
  },
});
