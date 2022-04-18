import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomSwitch from '../Components/CustomeSwitch';
import {Neomorph} from 'react-native-neomorph-shadows';
import Resetbtn from '../Components/Resetbtn';
import NeumorphismButton from '../Components/NeumorphismsButton';

export default function LeftSideMenu() {
  const [first, setfirst] = React.useState(true);

  const click = () => {
    setfirst(!first);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View
          style={{
            justifyContent: 'space-between',
            marginVertical: 80,
          }}>
          <View style={{alignItems: 'center'}}>
            <CustomSwitch />

            <Text style={{...styles.text, fontSize: 24, marginVertical: 20}}>
              nav equipment
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <NeumorphismButton onpress={click} circlebutton>
              {first ? (
                <View
                  style={{
                    borderWidth: 5,
                    width: 20,
                    backgroundColor: '#B1FF00',
                    borderColor: '#B1FF00',
                  }}
                />
              ) : (
                <View
                  style={{
                    borderWidth: 5,
                    width: 20,
                    backgroundColor: '#AAAAAA',
                    borderColor: '#AAAAAA',
                  }}
                />
              )}
            </NeumorphismButton>

            <Text style={{...styles.text, fontSize: 24, marginVertical: 20}}>
              hydro gen bb
            </Text>

            <Neomorph
              inner
              darkShadowColor="#151515"
              lightShadowColor="#414141"
              style={{
                shadowOffset: {width: 10, height: 10},
                shadowOpacity: 1,
                shadowColor: 'white',
                shadowRadius: 3,
                borderRadius: 145,
                backgroundColor: '#313131',
                width: 155,
                height: 65,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 138,
                  backgroundColor: '#252525',
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
            justifyContent: 'space-around',
            marginLeft: 40,
            width: '50%',
          }}>
          <View
            style={{
              alignItems: 'center',
              borderColor: '#707070',
              borderWidth: 1,
              borderRadius: 30,
              marginVertical: 15,
            }}>
            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                paddingVertical: 10,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 18,
                    marginRight: '40%',
                  }}>
                  SPEED
                </Text>
                <Text style={{...styles.text, fontSize: 18}}>kn</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  fontSize: 60,
                  marginTop: -15,
                }}>
                9.5
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                padding: 10,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 18}}>AWA</Text>
                <Text style={{...styles.text, fontSize: 18}}>{'°'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 60,
                }}>
                -151
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                padding: 10,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 18}}>AWA</Text>
                <Text style={{...styles.text, fontSize: 18}}>{'kn'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 60,
                }}>
                18.6
              </Text>
            </View>
          </View>

          <View
            style={{
              borderColor: 'silver',
              borderWidth: 1,
              borderRadius: 30,
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
                padding: 10,
                width: '70%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 18}}>LOG 1</Text>
                <Text style={{...styles.text, fontSize: 18}}>{'nm'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 60,
                }}>
                11.5
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                padding: 10,
                width: '70%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 18}}>LOG 2</Text>
                <Text style={{...styles.text, fontSize: 18}}>{'nm'}</Text>
              </View>
              <Text style={{...styles.text, textAlign: 'center', fontSize: 60}}>
                12.2
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
                padding: 10,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{...styles.text, fontSize: 22, marginRight: '40%'}}>
                  time
                </Text>
                <Text style={{...styles.text, fontSize: 20}}>{'local'}</Text>
              </View>
              <Text style={{...styles.text, textAlign: 'center', fontSize: 52}}>
                12:07:03
              </Text>
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
    fontWeight: 'bold',
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
