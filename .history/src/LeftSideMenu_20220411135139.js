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
import CustomSwitch from './CustomeSwitch';

LogBox.ignoreAllLogs();
export default function LeftSideMenu() {
  const [activeSwitch, setIsActiveSwitch] = useState(1);

  useEffect(() => {
    Orientation.lockToLandscapeRight();
  }, []);

  const onSelectSwitch = index => {
    console.log('Selected index: ' + index);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View
          style={{
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center'}}>
            {/* <SwitchButton
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
            /> */}

            <CustomSwitch
              selectionMode={2}
              roundCorner={true}
              option1={'ON'}
              option2={'OFF'}
              onSelectSwitch={onSelectSwitch}
              selectionColor={'#000000CB'}
            />

            <Text style={{...styles.text, fontSize: 32, marginVertical: 10}}>
              hydro gen bb
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#1F1F1F',
                padding: 25,
                borderRadius: 50,
              }}>
              <View style={{borderWidth: 5, width: 20, borderColor: 'green'}} />
            </TouchableOpacity>
            <Text style={{...styles.text, fontSize: 32, marginVertical: 10}}>
              hydro gen bb
            </Text>

            <View
              style={{
                backgroundColor: 'grey',
                elevation: 10,
                padding: 5,
                borderRadius: 50,
              }}>
              <View
                style={{
                  backgroundColor: '#1F1F1F',
                  elevation: 20,
                  padding: 15,
                  borderRadius: 50,
                }}>
                <Text style={{...styles.text, fontSize: 32}}>1.2 kW</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 40,
          }}>
          <View
            style={{
              alignItems: 'center',
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 10,
              marginVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '90%',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>Speed</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                9.5
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>kn</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '90%',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>AWA</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                -151
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>{'°'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>AWS</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                18.6
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>kn</Text>
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
                left: -15,
                top: 20,
                fontSize: 8,
                borderRadius: 10,
                backgroundColor: '#000000CB',
                paddingHorizontal: 8,
                paddingVertical: 2,
              }}>
              reset
            </Text>

            <Text
              style={{
                position: 'absolute',
                left: -15,
                top: 65,
                fontSize: 8,
                borderRadius: 10,
                backgroundColor: '#000000CB',
                paddingHorizontal: 8,
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
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>LOG 1</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                11.5
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>npm</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                width: '90%',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>LOG 1</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                12.2
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>{'°'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>time</Text>
              <Text style={{...styles.text, fontSize: 50, marginHorizontal: 5}}>
                12:07:03
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>local</Text>
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
  },
  text: {
    color: '#BABABA',
  },
});
