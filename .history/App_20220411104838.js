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
      <View style={{alignItems: 'center'}}>
        <SwitchButton
          onValueChange={val => setIsActiveSwitch(val)} // this is necessary for this component
          text1="OFF" // optional: first text in switch button --- default ON
          text2="ON" // optional: second text in switch button --- default OFF
          switchWidth={120} // optional: switch width --- default 44
          switchHeight={40} // optional: switch height --- default 100
          switchdirection="rtl" // optional: switch button direction ( ltr and rtl ) --- default ltr
          switchBorderRadius={100} // optional: switch border radius --- default oval
          switchSpeedChange={500} // optional: button change speed --- default 100
          switchBorderColor="#1F1F1F" // optional: switch border color --- default #d4d4d4
          switchBackgroundColor="#1F1F1F" // optional: switch background color --- default #fff
          btnBorderColor="#000" // optional: button border color --- default #00a4b9
          btnBackgroundColor="#1F1F1F" // optional: button background color --- default #00bcd4
          fontColor="#b1b1b1" // optional: text font color --- default #b1b1b1
          activeFontColor="#fff" // optional: active font color --- default #fff
        />

        <Text style={{...styles.text}}>nav equipment</Text>

        <View>
          <TouchableOpacity
            style={{backgroundColor: '#1F1F1F', padding: 15, borderRadius: 20}}>
            <View style={{borderWidth: 2, width: 10, borderColor: 'green'}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#AAAAAA',
  },
});
