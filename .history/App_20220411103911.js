import {LogBox, StatusBar, StyleSheet, Switch, View} from 'react-native';
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
      <SwitchButton
        onValueChange={val => setIsActiveSwitch(val)} // this is necessary for this component
        text1="OFF" // optional: first text in switch button --- default ON
        text2="ON" // optional: second text in switch button --- default OFF
        switchWidth={100} // optional: switch width --- default 44
        switchHeight={44} // optional: switch height --- default 100
        switchdirection="rtl" // optional: switch button direction ( ltr and rtl ) --- default ltr
        switchBorderRadius={100} // optional: switch border radius --- default oval
        switchSpeedChange={500} // optional: button change speed --- default 100
        switchBorderColor="#d4d4d4" // optional: switch border color --- default #d4d4d4
        switchBackgroundColor="#fff" // optional: switch background color --- default #fff
        btnBorderColor="#00a4b9" // optional: button border color --- default #00a4b9
        btnBackgroundColor="#00bcd4" // optional: button background color --- default #00bcd4
        fontColor="#b1b1b1" // optional: text font color --- default #b1b1b1
        activeFontColor="#fff" // optional: active font color --- default #fff
      />

      {activeSwitch === 1 ? console.log('view1') : console.log('view2')}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
