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
import CustomSwitch from './CustomeSwitch';
import {Shadow, Neomorph} from 'react-native-neomorph-shadows';

LogBox.ignoreAllLogs();
export default function LeftSideMenu() {
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

            <Text style={{...styles.text, fontSize: 24, marginVertical: 20}}>
              hydro gen bb
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Neomorph
              style={{
                borderRadius: 60,
                backgroundColor: '#222222',
                width: 85,
                height: 85,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 20,
              }}>
              <Neomorph
                inner
                style={{
                  shadowRadius: 3,
                  borderRadius: 50,
                  backgroundColor: '#2E2E2E',
                  width: 70,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderWidth: 5,
                    width: 25,
                    borderColor: 'green',
                  }}
                />
              </Neomorph>
            </Neomorph>

            <Text style={{...styles.text, fontSize: 24, marginVertical: 20}}>
              hydro gen bb
            </Text>

            <Neomorph
              style={{
                borderRadius: 60,
                backgroundColor: '#222222',
                width: 135,
                height: 85,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 20,
              }}>
              <Neomorph
                inner
                style={{
                  shadowRadius: 3,
                  borderRadius: 50,
                  backgroundColor: '#2E2E2E',
                  width: 120,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{...styles.text, fontSize: 32}}>
                  1.2 <Text style={{fontSize: 26}}>kW</Text>
                </Text>
              </Neomorph>
            </Neomorph>
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
              borderRadius: 30,
              marginVertical: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '90%',
                padding: 20,
              }}>
              <Text style={{...styles.text, fontSize: 22}}>Speed</Text>
              <Text style={{...styles.text, fontSize: 52, marginHorizontal: 5}}>
                9.5
              </Text>
              <Text style={{...styles.text, fontSize: 18}}>kn</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '90%',
                padding: 20,
              }}>
              <Text style={{...styles.text, fontSize: 22}}>AWA</Text>
              <Text style={{...styles.text, fontSize: 52, marginHorizontal: 5}}>
                -151
              </Text>
              <Text style={{...styles.text, fontSize: 18}}>{'°'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 22}}>AWS</Text>
              <Text style={{...styles.text, fontSize: 52, marginHorizontal: 5}}>
                18.6
              </Text>
              <Text style={{...styles.text, fontSize: 18}}>kn</Text>
            </View>
          </View>

          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 30,
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                position: 'absolute',
                left: -50,
                top: 80,
                fontSize: 24,
                borderRadius: 50,
                backgroundColor: '#000000B1',
                paddingHorizontal: 30,
                paddingVertical: 10,
                color: 'white',
              }}>
              reset
            </Text>

            <Text
              style={{
                position: 'absolute',
                left: -50,
                top: 220,
                fontSize: 24,
                borderRadius: 50,
                backgroundColor: '#000000B1',
                paddingHorizontal: 30,
                paddingVertical: 10,
                color: 'white',
              }}>
              reset
            </Text>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '90%',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>LOG 1</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                11.5
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>nm</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '90%',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>LOG 1</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                12.2
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>{'nm'}</Text>
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