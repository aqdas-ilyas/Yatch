import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomSwitch from '../Components/CustomeSwitch';
import {Neomorph} from 'react-native-neomorph-shadows';
import Resetbtn from '../Components/Resetbtn';
import NeumorphismButton from '../Components/NeumorphismsButton';

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
            <NeumorphismButton circlebutton>
              <View
                style={{
                  borderWidth: 2,
                  width: 13,
                  borderColor: '#B1FF00',
                }}
              />
            </NeumorphismButton>

            <Text style={{...styles.text, fontSize: 24, marginVertical: 20}}>
              hydro gen bb
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
                  1.2
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
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-evenly',
            // alignItems: 'center',
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
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                padding: 20,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{...styles.text, fontSize: 22, marginRight: '40%'}}>
                  Speed
                </Text>
                <Text style={{...styles.text, fontSize: 20}}>kn</Text>
              </View>
              <Text style={{...styles.text, textAlign: 'center', fontSize: 55}}>
                9.5
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                padding: 20,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{...styles.text, fontSize: 22, marginRight: '40%'}}>
                  AWA
                </Text>
                <Text style={{...styles.text, fontSize: 20}}>{'°'}</Text>
              </View>
              <Text style={{...styles.text, textAlign: 'center', fontSize: 55}}>
                -151
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                padding: 20,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{...styles.text, fontSize: 22, marginRight: '40%'}}>
                  AWA
                </Text>
                <Text style={{...styles.text, fontSize: 20}}>{'kn'}</Text>
              </View>
              <Text style={{...styles.text, textAlign: 'center', fontSize: 55}}>
                18.6
              </Text>
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
            <Resetbtn reset1>
              <Text
                style={{
                  ...styles.restButn,
                }}>
                reset
              </Text>
            </Resetbtn>

            <Resetbtn reset2>
              <Text
                style={{
                  ...styles.restButn,
                }}>
                reset
              </Text>
            </Resetbtn>

            <View
              style={{
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                padding: 20,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{...styles.text, fontSize: 22, marginRight: '40%'}}>
                  LOG 1
                </Text>
                <Text style={{...styles.text, fontSize: 20}}>{'nm'}</Text>
              </View>
              <Text style={{...styles.text, textAlign: 'center', fontSize: 55}}>
                11.5
              </Text>
            </View>
          
            <View
              style={{
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                padding: 20,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{...styles.text, fontSize: 22, marginRight: '40%'}}>
                  LOG 2
                </Text>
                <Text style={{...styles.text, fontSize: 20}}>{'nm'}</Text>
              </View>
              <Text style={{...styles.text, textAlign: 'center', fontSize: 55}}>
                12.2
              </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  restButn: {
    fontSize: 20,
    color: '#AAAAAA',
  },
});
