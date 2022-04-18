import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CustomSwitch = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);
  const [circleState, setCircleState] = useState(false);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
    setCircleState(!circleState);
  };

  return (
    <View>
      <View
        style={{
          height: 30,
          width: 120,
          backgroundColor: '#4B4B4B',
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 1,
          borderColor: '#4B4B4B',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>
        {circleState ? (
          <View
            activeOpacity={1}
            onPress={() => updatedSwitchData(1)}
            style={{
              flex: 1,
              backgroundColor: getSelectionMode == 1 ? selectionColor : 'white',
              borderRadius: getRoundCorner ? 25 : 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{borderWidth: 2, width: 10, borderColor: 'green'}} />
          </View>
        ) : (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updatedSwitchData(1)}
            style={{
              flex: 1,
              backgroundColor:
                getSelectionMode == 1 ? selectionColor : '#4B4B4B',
              borderRadius: getRoundCorner ? 25 : 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: getSelectionMode == 1 ? '#4B4B4B' : selectionColor,
              }}>
              {option1}
            </Text>
          </TouchableOpacity>
        )}

        {circleState ? (
          <TouchableOpacity
            TouchableOpacity
            activeOpacity={1}
            onPress={() => updatedSwitchData(2)}
            style={{
              flex: 1,
              backgroundColor:
                getSelectionMode == 2 ? selectionColor : '#4B4B4B',
              borderRadius: getRoundCorner ? 25 : 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: getSelectionMode == 2 ? '#4B4B4B' : selectionColor,
              }}>
              {option2}
            </Text>
          </TouchableOpacity>
        ) : (
          <View
            TouchableOpacity
            activeOpacity={1}
            style={{
              flex: 1,
              backgroundColor:
                getSelectionMode == 2 ? selectionColor : '#4B4B4B',
              borderRadius: getRoundCorner ? 25 : 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{borderWidth: 2, width: 10, borderColor: 'green'}} />
          </View>
        )}
      </View>
    </View>
  );
};
export default CustomSwitch;
