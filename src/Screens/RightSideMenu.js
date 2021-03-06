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
import CustomSwitch from '../Components/CustomeSwitch';
import {Shadow, Neomorph} from 'react-native-neomorph-shadows';
import NeumorphismButton from '../Components/NeumorphismsButton';

LogBox.ignoreAllLogs();
export default function RightSideMenu(props) {
  const [first, setfirst] = React.useState(true);

  const onSelectSwitch = index => {
    console.log('Selected index: ' + index);
  };

  const onSelectSwitchBelow = index => {
    console.log('Selected index: ' + index);
  };

  const click = () => {
    setfirst(!first);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View
          style={{
            marginTop: 50,
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
                padding: 10,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 20}}>SOG</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'kn'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 65,
                }}>
                {props.sog}
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                padding: 10,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 20}}>TWA</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'??'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 65,
                }}>
                {props.twa}
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                padding: 10,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 20}}>TWS</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'kn'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 65,
                }}>
                {props.tws}
              </Text>
            </View>
          </View>

          <View
            style={{
              borderColor: '#707070',
              borderWidth: 1,
              borderRadius: 30,
              alignItems: 'center',
              marginTop: 50,
            }}>
            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                padding: 10,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 20}}>DTW</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'nm'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 65,
                }}>
                {props.dtw}
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                padding: 10,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 20}}>TTW</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'hrs'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 65,
                }}>
                {props.TTS}
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                padding: 10,
                width: '80%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 20}}>ETA</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'24h'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 65,
                }}>
                {props.ETA}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-around',
            marginLeft: 50,
          }}>
          <View style={{alignItems: 'flex-end', marginTop: -40}}>
            <NeumorphismButton nopress MOB>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 22,
                }}>
                MOB
              </Text>
            </NeumorphismButton>

            <View style={{marginTop: 40}}>
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
            <NeumorphismButton onpress={click} circlebutton>
              {first ? (
                <View
                  style={{
                    borderWidth: 5,
                    width: 30,
                    backgroundColor: '#B1FF00',
                    borderColor: '#B1FF00',
                  }}
                />
              ) : (
                <View
                  style={{
                    borderWidth: 5,
                    width: 30,
                    backgroundColor: '#AAAAAA',
                    borderColor: '#AAAAAA',
                  }}
                />
              )}
            </NeumorphismButton>
            <Text style={{...styles.text, fontSize: 24, marginVertical: 20}}>
              hydro gen std
            </Text>

            <Neomorph
              inner
              // darkShadowColor="#151515"
              // lightShadowColor="#414141"
              darkShadowColor="#191919" // <- set this
              lightShadowColor="#353535"
              style={{
                shadowOffset: {width: 0, height: 10},
                shadowOpacity: 1,
                shadowColor: 'white',
                shadowRadius: 3,
                borderRadius: 145,
                backgroundColor: '#414141',
                width: 155,
                height: 65,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 138,
                  backgroundColor: '#303030',
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
                  {props.hydroGenSTD}
                </Text>
                <View
                  style={{
                    width: 2,
                    backgroundColor: '#303030',
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '4%',
  },
  text: {
    color: '#AAAAAA',
    fontWeight: 'bold',
  },
});
