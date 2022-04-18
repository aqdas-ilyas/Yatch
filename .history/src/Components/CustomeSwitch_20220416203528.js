import React, {useState} from 'react';
import {Shadow, Neomorph} from 'react-native-neomorph-shadows';
import {Switch} from 'react-native-switch';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function CustomeSwitch() {
  const [toggleSwitch1, SetToggleSwitch1] = useState(false);
  return (
    <View>
      <Neomorph
        inner // <- enable inner shadow
        darkShadowColor="#252525" // <- set this
        lightShadowColor="#353535"
        style={{
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 1,
          shadowColor: 'white',
          shadowRadius: 3,
          borderRadius: 150,
          // backgroundColor: '#252525',
          width: 170,
          height: 65,

          // ...include most of View/Layout styles
        }}>
        <View style={{top: 10, left: 10}}>
          <Switch
            onValueChange={VAL => SetToggleSwitch1(VAL)}
            value={toggleSwitch1}
            disabled={false}
            activeText={'ON'}
            inActiveText={'OFF'}
            circleSize={39}
            barHeight={52}
            circleBorderWidth={25}
            circleBorderInactiveColor={'#303030'}
            circleBorderActiveColor={'#303030'}
            backgroundActive={'#272727'}
            backgroundInactive={'#272727'}
            circleActiveColor={'#98FF31'}
            circleInActiveColor={'#606060'}
            // activeTextStyle={{color:'#AAAAAA'}}
            // inactiveTextStyle={{color:'#AAAAAA'}}
            // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
            innerCircleStyle={{
              width: 80,
              height: 57,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 20,
              borderRadius: 40,
            }} // style for inner animated circle for what you (may) be rendering inside the circle
            renderActiveText={true}
            renderInActiveText={true}
            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
            switchWidthMultiplier={4} // multiplied by the `circleSize` prop to calculate total width of the Switch
            switchBorderRadius={30}
          />
        </View>
      </Neomorph>
    </View>
  );
}

const styles = StyleSheet.create({});

// import React, {useState} from 'react';
// import {Shadow, Neomorph} from 'react-native-neomorph-shadows';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// const CustomSwitch = ({
//   navigation,
//   selectionMode,
//   roundCorner,
//   option1,
//   option2,
//   onSelectSwitch,
//   selectionColor,
// }) => {
//   const [getSelectionMode, setSelectionMode] = useState(selectionMode);
//   const [getRoundCorner, setRoundCorner] = useState(roundCorner);
//   const [circleState, setCircleState] = useState(false);

//   const updatedSwitchData = val => {
//     setSelectionMode(val);
//     onSelectSwitch(val);
//     setCircleState(!circleState);
//   };

//   return (
//     <View>
//       <Neomorph
//         style={{
//           borderRadius: 60,
//           backgroundColor: '#2C2C2C',
//           width: 200,
//           height: 60,
//           justifyContent: 'center',
//           alignItems: 'center',
//           elevation: 20,
//         }}>
//         <View
//           style={{
//             height: 50,
//             width: 180,
//             backgroundColor: 'rgba(0,0,0,0.1)',
//             borderRadius: getRoundCorner ? 50 : 0,
//             borderWidth: 1,
//             borderColor: 'rgba(0,0,0,0.1)',
//             flexDirection: 'row',
//             justifyContent: 'center',
//             elevation: 20,
//           }}>
//           {circleState ? (
//             <View
//               activeOpacity={1}
//               onPress={() => updatedSwitchData(1)}
//               style={{
//                 flex: 1,
//                 backgroundColor: getSelectionMode == 1 ? '#2E2D2D' : 'white',
//                 borderRadius: getRoundCorner ? 50 : 0,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <View
//                 style={{borderWidth: 5, width: 20, borderColor: '#AAAAAA'}}
//               />
//             </View>
//           ) : (
//             <TouchableOpacity
//               activeOpacity={1}
//               onPress={() => updatedSwitchData(1)}
//               style={{
//                 flex: 1,
//                 backgroundColor:
//                   getSelectionMode == 1 ? selectionColor : 'rgba(0,0,0,0.1)',
//                 borderRadius: getRoundCorner ? 50 : 0,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text
//                 style={{
//                   fontSize: 24,
//                   color: getSelectionMode == 1 ? '#4B4B4B' : '#BABABA',
//                 }}>
//                 {option1}
//               </Text>
//             </TouchableOpacity>
//           )}

//           {circleState ? (
//             <TouchableOpacity
//               TouchableOpacity
//               activeOpacity={1}
//               onPress={() => updatedSwitchData(2)}
//               style={{
//                 flex: 1,
//                 backgroundColor:
//                   getSelectionMode == 2 ? selectionColor : 'rgba(0,0,0,0.1)',
//                 borderRadius: getRoundCorner ? 50 : 0,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text
//                 style={{
//                   fontSize: 24,
//                   color: getSelectionMode == 2 ? '#4B4B4B' : '#BABABA',
//                 }}>
//                 {option2}
//               </Text>
//             </TouchableOpacity>
//           ) : (
//             <View
//               TouchableOpacity
//               activeOpacity={1}
//               style={{
//                 flex: 1,
//                 backgroundColor: getSelectionMode == 2 ? '#2E2D2D' : '#4B4B4B',
//                 borderRadius: getRoundCorner ? 50 : 0,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <View style={{borderWidth: 5, width: 20, borderColor: 'green'}} />
//             </View>
//           )}
//         </View>
//       </Neomorph>
//     </View>
//   );
// };

// export default CustomSwitch;
