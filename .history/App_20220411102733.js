import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Orientation, {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

export default function App() {
  useEffect(() => {
    Orientation.lockToLandscapeRight();
  }, []);

  return (
    <View>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
