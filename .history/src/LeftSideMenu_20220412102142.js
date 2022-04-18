import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomSwitch from './CustomeSwitch';
import {Neomorph} from 'react-native-neomorph-shadows';

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
            marginVertical: 50,
          }}>
          <View style={{alignItems: 'center'}}>
            <CustomSwitch />

            <Text style={{...styles.text, fontSize: 24, marginVertical: 20}}>
              hydro gen bb
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Neomorph
              style={{
                ...styles.NeomorphParentView,
              }}>
            <Neomorph
              inner
              darkShadowColor="#141414" // <- set this
              lightShadowColor="#2e2e2e"
              style={{
                shadowOffset: {width: 10, height: 10},
                shadowOpacity: 1,
                shadowColor: 'white',
                shadowRadius: 3,
                borderRadius: 150,
                backgroundColor: '#141414',
                width: 70,
                height: 70,
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
            justifyContent: 'space-evenly',
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
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
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
                padding: 20,
              }}>
              <Text style={{...styles.text, fontSize: 22}}>AWA</Text>
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
                -151
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>{'°'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 30,
              }}>
              <Text style={{...styles.text, fontSize: 22}}>AWS</Text>
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
                18.6
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
            <Text
              style={{
                ...styles.restButn,
                left: -40,
                top: 50,
              }}>
              reset
            </Text>

            <Text
              style={{
                ...styles.restButn,
                left: -40,
                top: 170,
              }}>
              reset
            </Text>

            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                width: '90%',
                padding: 20,
                justifyContent: 'center',
              }}>
              <Text style={{...styles.text, fontSize: 22}}>LOG 1</Text>
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
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
                padding: 20,
                justifyContent: 'center',
              }}>
              <Text style={{...styles.text, fontSize: 22}}>LOG 1</Text>
              <Text style={{...styles.text, fontSize: 55, marginHorizontal: 5}}>
                12.2
              </Text>
              <Text style={{...styles.text, fontSize: 20}}>{'nm'}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 20,
                justifyContent: 'center',
              }}>
              <Text style={{...styles.text, fontSize: 22}}>time</Text>
              <Text style={{...styles.text, fontSize: 45, marginHorizontal: 5}}>
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
  NeomorphParentView: {
    borderRadius: 60,
    backgroundColor: '#222222',
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  NeomorphChildView: {
    shadowRadius: 3,
    borderRadius: 50,
    backgroundColor: '#2E2E2E',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restButn: {
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: '#000000B1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    position: 'absolute',
  },
});