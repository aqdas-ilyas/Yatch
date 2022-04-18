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

LogBox.ignoreAllLogs();
export default function RightSideMenu() {
  const [activeSwitch, setIsActiveSwitch] = useState(1);

  useEffect(() => {
    Orientation.lockToLandscapeRight();
  }, []);

  const onSelectSwitch = index => {
    console.log('Selected index: ' + index);
  };

  const onSelectSwitchBelow = index => {
    console.log('Selected index: ' + index);
  };

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
              <Text style={{...styles.text, fontSize: 24}}>SOG</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                9.5
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>kn</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                width: '90%',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>AWA</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                -142
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>{'°'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>TWS</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                15.5
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>kn</Text>
            </View>
          </View>

          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 10,
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '90%',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>DTW</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                37.3
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
              <Text style={{...styles.text, fontSize: 24}}>TTW</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                04:00
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>{'hrs'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 24}}>ETA</Text>
              <Text style={{...styles.text, fontSize: 62, marginHorizontal: 5}}>
                16:07
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>24h</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            marginLeft: 50,
          }}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'red',
                elevation: 10,
                paddingVertical: 2,
                paddingHorizontal: 2,
                borderRadius: 15,
                width: '90%',
                alignSelf: 'flex-end',
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#1F1F1F',
                  elevation: 20,
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  width: '99%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...styles.text, fontSize: 16}}>MOB</Text>
              </View>
            </View>

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

            <Text style={{...styles.text, fontSize: 12, marginVertical: 5}}>
              winches
            </Text>

            <View>
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
                onSelectSwitch={onSelectSwitchBelow}
                selectionColor={'#000000CB'}
              />

              <Text style={{...styles.text, fontSize: 12, marginVertical: 5}}>
                winches
              </Text>
            </View>
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
              hydro gen std
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
                <Text style={{...styles.text, fontSize: 32}}>0.9 kW</Text>
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
  },
  text: {
    color: '#AAAAAA',
  },
});
