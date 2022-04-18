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
import NeumorphismButton from './NeumorphismsButton';

LogBox.ignoreAllLogs();
export default function RightSideMenu() {
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
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 30,
              marginVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '90%',
                padding: 20,
              }}>
              <Text style={{...styles.text, fontSize: 22}}>SOG</Text>
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
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
                padding: 20,
              }}>
              <Text style={{...styles.text, fontSize: 22}}>AWA</Text>
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
                -142
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>{'°'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 20,
              }}>
              <Text style={{...styles.text, fontSize: 22}}>TWS</Text>
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
                15.5
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>kn</Text>
            </View>
          </View>

          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 30,
              width: '90%',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '80%',
                padding: 20,
                justifyContent: 'center',
              }}>
              <Text style={{...styles.text, fontSize: 22}}>DTW</Text>
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
                37.3
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>nm</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '80%',
                padding: 20,
                justifyContent: 'center',
              }}>
              <Text style={{...styles.text, fontSize: 22}}>TTW</Text>
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
                04:00
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>{'hrs'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 20,
              }}>
              <Text style={{...styles.text, fontSize: 22}}>ETA</Text>
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
                16:07
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>24h</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-around',
            marginLeft: 50,
          }}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                ...styles.MainBoxView,
              }}>
                <NeumorphismButton/>
              {/* <View
                style={{
                  ...styles.childBocxView,
                }}>
                <Text style={{...styles.text, fontSize: 32}}>MOB</Text>
              </View> */}
            </View>

            <View>
              <CustomSwitch
                selectionMode={2}
                roundCorner={true}
                option1={'ON'}
                option2={'OFF'}
                onSelectSwitch={onSelectSwitch}
                selectionColor={'#000000CB'}
              />

              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  fontSize: 24,
                  marginVertical: 20,
                }}>
                winches
              </Text>
            </View>

            <View>
              <CustomSwitch
                selectionMode={2}
                roundCorner={true}
                option1={'ON'}
                option2={'OFF'}
                onSelectSwitch={onSelectSwitchBelow}
                selectionColor={'#000000CB'}
              />

              <Text
                style={{
                  ...styles.text,
                  fontSize: 24,
                  textAlign: 'center',
                  marginVertical: 20,
                }}>
                winches
              </Text>
            </View>
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
              hydro gen std
            </Text>

            <Neomorph
              inner
              darkShadowColor="#141414"
              lightShadowColor="#2e2e2e"
              style={{
                shadowOffset: {width: 10, height: 10},
                shadowOpacity: 1,
                shadowColor: 'white',
                shadowRadius: 3,
                borderRadius: 145,
                backgroundColor: '#141414',
                width: 155,
                height: 65,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 138,
                  backgroundColor: '#141414',
                  borderRadius: 26,
                  top: 10,
                  left: 10,
                }}>
                <Text
                  style={{
                    marginLeft: 20,
                    marginVertical: 2,
                    fontSize: 30,
                    color: 'white',
                  }}>
                  0.9
                </Text>
                <View
                  style={{
                    width: 2,
                    backgroundColor: 'gray',
                    marginHorizontal: 10,
                  }}></View>
                <Text
                  style={{
                    marginVertical: 10,
                    fontSize: 20,
                    color: 'white',
                  }}>
                  kW
                </Text>
              </View>
            </Neomorph>

            {/* <Neomorph
              style={{
                ...styles.NeomorphParentView,
              }}>
              <Neomorph
                inner
                style={{
                  ...styles.NeomorphChildView,
                }}>
                <Text style={{...styles.text, fontSize: 32}}>
                  0.9 <Text style={{fontSize: 26}}>kW</Text>
                </Text>
              </Neomorph>
            </Neomorph> */}
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
  MainBoxView: {
    backgroundColor: 'red',
    elevation: 10,
    borderRadius: 30,
    width: '75%',
    alignSelf: 'flex-end',
  },
  childBocxView: {
    zIndex: 1,
    elevation: 20,
    backgroundColor: '#1F1F1F',
    paddingVertical: 45,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NeomorphParentView: {
    borderRadius: 60,
    backgroundColor: '#222222',
    width: 135,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  NeomorphChildView: {
    shadowRadius: 3,
    borderRadius: 50,
    backgroundColor: '#2E2E2E',
    width: 120,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
