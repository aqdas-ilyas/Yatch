import {
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

LogBox.ignoreAllLogs();
export default function App() {
  const [activeSwitch, setIsActiveSwitch] = useState(1);

  useEffect(() => {
    Orientation.lockToLandscapeRight();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: '#AAAAAA',
  },
});