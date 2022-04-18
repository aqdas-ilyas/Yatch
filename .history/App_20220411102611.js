import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Orientation, {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

export default function App() {
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
  }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
