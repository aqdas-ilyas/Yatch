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
      <View style={{flexDirection: 'row', flex: 1}}>
        <View
          style={{
            justifyContent: 'space-between',
          }}>
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
              btnBorderColor="#00a4b9" // optional: button border color --- default #00a4b9
              btnBackgroundColor="#1F1F1F" // optional: button background color --- default #00bcd4
              fontColor="#b1b1b1" // optional: text font color --- default #b1b1b1
              activeFontColor="#fff" // optional: active font color --- default #fff
            />

            <Text style={{...styles.text, marginVertical: 10}}>
              hydro gen bb
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#1F1F1F',
                padding: 15,
                borderRadius: 20,
              }}>
              <View style={{borderWidth: 2, width: 10, borderColor: 'green'}} />
            </TouchableOpacity>
            <Text style={{...styles.text, marginVertical: 10}}>
              hydro gen bb
            </Text>

            <View
              style={{
                backgroundColor: 'grey',
                elevation: 10,
                padding: 2,
                borderRadius: 30,
              }}>
              <View
                style={{
                  backgroundColor: '#1F1F1F',
                  elevation: 20,
                  padding: 10,
                  borderRadius: 20,
                }}>
                <Text style={{...styles.text, fontSize: 16}}>1.2 kW</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#707070',
              borderWidth: 1,
              borderRadius: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                width: '90%',
              }}>
              <Text style={{...styles.text, fontSize: 8}}>Speed</Text>
              <Text style={{...styles.text, fontSize: 24, marginHorizontal: 5}}>
                9.5
              </Text>
              <Text style={{...styles.text, fontSize: 8}}>kn</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                width: '90%',
              }}>
              <Text style={{...styles.text, fontSize: 8}}>AWA</Text>
              <Text style={{...styles.text, fontSize: 24, marginHorizontal: 5}}>
                -151
              </Text>
              <Text style={{...styles.text, fontSize: 8}}>{'°'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{...styles.text, fontSize: 8}}>AWS</Text>
              <Text style={{...styles.text, fontSize: 24, marginHorizontal: 5}}>
                18.6
              </Text>
              <Text style={{...styles.text, fontSize: 8}}>kn</Text>
            </View>
          </View>

          <View
            style={{
              borderColor: '#707070',
              borderWidth: 1,
              borderRadius: 10,
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                position: 'absolute',
                left: -10,
                top: 10,
                fontSize: 8,
                borderRadius:10,
                backgroundColor: '#000',
                paddingHorizontal: 5,
                paddingVertical: 2,
              }}>
              reset
            </Text>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                width: '90%',
              }}>
              <Text style={{...styles.text, fontSize: 8}}>LOG 1</Text>
              <Text style={{...styles.text, fontSize: 24, marginHorizontal: 5}}>
                11.5
              </Text>
              <Text style={{...styles.text, fontSize: 8}}>npm</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                width: '90%',
              }}>
              <Text style={{...styles.text, fontSize: 8}}>LOG 1</Text>
              <Text style={{...styles.text, fontSize: 24, marginHorizontal: 5}}>
                12.2
              </Text>
              <Text style={{...styles.text, fontSize: 8}}>{'°'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{...styles.text, fontSize: 8}}>time</Text>
              <Text style={{...styles.text, fontSize: 20, marginHorizontal: 5}}>
                12:07:03
              </Text>
              <Text style={{...styles.text, fontSize: 8}}>local</Text>
            </View>
          </View>
        </View>
      </View>
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
