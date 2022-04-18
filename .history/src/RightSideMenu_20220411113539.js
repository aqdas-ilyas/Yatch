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
export default function RightSideMenu() {
  const [activeSwitch, setIsActiveSwitch] = useState(1);

  useEffect(() => {
    Orientation.lockToLandscapeRight();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flex: 1}}>
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
              <Text style={{...styles.text, fontSize: 8}}>SOG</Text>
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
                -142
              </Text>
              <Text style={{...styles.text, fontSize: 8}}>{'°'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{...styles.text, fontSize: 8}}>TWS</Text>
              <Text style={{...styles.text, fontSize: 24, marginHorizontal: 5}}>
                15.5
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
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                width: '90%',
              }}>
              <Text style={{...styles.text, fontSize: 8}}>DTW</Text>
              <Text style={{...styles.text, fontSize: 24, marginHorizontal: 5}}>
                37.3
              </Text>
              <Text style={{...styles.text, fontSize: 8}}>nm</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                width: '90%',
              }}>
              <Text style={{...styles.text, fontSize: 8}}>TTW</Text>
              <Text style={{...styles.text, fontSize: 24, marginHorizontal: 5}}>
                04:00
              </Text>
              <Text style={{...styles.text, fontSize: 8}}>{'hrs'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{...styles.text, fontSize: 8}}>ETA</Text>
              <Text style={{...styles.text, fontSize: 20, marginHorizontal: 5}}>
                16:07
              </Text>
              <Text style={{...styles.text, fontSize: 8}}>24h</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'red',
                elevation: 10,
                paddingVertical: 2,
                paddingHorizontal: 2,
                borderRadius: 15,
                width:"60%",
              }}>
              <View
                style={{
                  backgroundColor: '#1F1F1F',
                  elevation: 20,
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  width:"99%",
                }}>
                <Text style={{...styles.text, fontSize: 16}}>MOB</Text>
              </View>
            </View>

            <SwitchButton
              onValueChange={val => setIsActiveSwitch(val)} // this is necessary for this component
              text1="OFF" // optional: first text in switch button --- default ON
              text2="ON" // optional: second text in switch button --- default OFF
              switchWidth={120} // optional: switch width --- default 44
              switchHeight={30} // optional: switch height --- default 100
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

            <Text style={{...styles.text, fontSize: 12, marginVertical: 5}}>
              winches
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <SwitchButton
              onValueChange={val => setIsActiveSwitch(val)} // this is necessary for this component
              text1="OFF" // optional: first text in switch button --- default ON
              text2="ON" // optional: second text in switch button --- default OFF
              switchWidth={120} // optional: switch width --- default 44
              switchHeight={30} // optional: switch height --- default 100
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

            <Text style={{...styles.text, fontSize: 12, marginVertical: 5}}>
              winches
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
              hydro gen std
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
                <Text style={{...styles.text, fontSize: 16}}>0.9 kW</Text>
              </View>
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
