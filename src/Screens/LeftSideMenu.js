import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomSwitch from '../Components/CustomeSwitch';
import {Neomorph} from 'react-native-neomorph-shadows';
import Resetbtn from '../Components/Resetbtn';
import NeumorphismButton from '../Components/NeumorphismsButton';

export default function LeftSideMenu(props) {
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
              hydro gen bb
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
                  {props.hydroGenBB}
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

        <View
          style={{
            marginLeft: 40,
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
                    fontSize: 20,
                    marginRight: '40%',
                  }}>
                  SPEED
                </Text>
                <Text style={{...styles.text, fontSize: 20}}>kn</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  fontSize: 65,
                  marginTop: -15,
                }}>
                {props.speedvalue}
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
                <Text style={{...styles.text, fontSize: 20}}>AWA</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'°'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 65,
                }}>
                {props.awa}
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
                <Text style={{...styles.text, fontSize: 20}}>AWA</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'kn'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 65,
                }}>
                {props.AWAKn}
              </Text>
            </View>
          </View>

          <View
            style={{
              borderColor: '#707070',
              borderWidth: 1,
              borderRadius: 30,
              marginTop: 50,
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
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                padding: 10,
                width: '70%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 20}}>LOG 1</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'nm'}</Text>
              </View>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  marginTop: -15,
                  fontSize: 65,
                }}>
                {props.LOG1}
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                padding: 10,
                width: '70%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{...styles.text, fontSize: 20}}>LOG 2</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'nm'}</Text>
              </View>
              <Text style={{...styles.text, textAlign: 'center', fontSize: 65}}>
                {props.LOG2}
              </Text>
            </View>

            <View
              style={{
                borderBottomColor: '#707070',
                borderBottomWidth: 1,
                padding: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}>
                <Text style={{...styles.text, fontSize: 20}}>time</Text>
                <Text style={{...styles.text, fontSize: 20}}>{'local'}</Text>
              </View>
              <Text style={{...styles.text, textAlign: 'center', fontSize: 55}}>
                {props.date}
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
    color: '#AAAAAA',
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
    color: 'silver',
    fontWeight: 'bold',
  },
});
