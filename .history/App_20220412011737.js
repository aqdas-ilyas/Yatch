// import {
//   Dimensions,
//   FlatList,
//   LogBox,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import Orientation from 'react-native-orientation-locker';
// import SwitchButton from 'switch-button-react-native';
// import LeftSideMenu from './src/LeftSideMenu';
// import RightSideMenu from './src/RightSideMenu';
// import CenteredView from './src/CenteredView';
// import LinearGradient from 'react-native-linear-gradient';
// import CustomSwitch from './src/CustomeSwitch';
// import Menu from './src/Menu';

// LogBox.ignoreAllLogs();
// export default function App() {
//   useEffect(() => {
//     Orientation.lockToLandscape();
//   }, []);

//   return (
//     <LinearGradient
//       colors={['#0F0F0F', '#3E4345', '#202427']}
//       style={styles.linearGradient}>
//       <StatusBar translucent backgroundColor={'transparent'} />
//       <View style={{flex: 1, flexDirection: 'row'}}>
//         <LeftSideMenu />
//         <View style={{marginRight: 20, marginLeft: 50}}>
//           <CenteredView />
//         </View>
//         <RightSideMenu />
//       </View>

//       <View
//         style={{borderTopColor: 'silver', borderTopWidth: 0.5, marginTop: 10}}>
//         <Menu />
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   linearGradient: {
//     flex: 1,
//     paddingHorizontal: 50,
//     borderRadius: 5,
//     paddingTop: 20,
//   },
// });

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {Neomorph} from 'react-native-neomorph-shadows';
export const SmallButton = React.memo(props => {
  return (
    <View style={{height: 50, width: 100, alignItems: 'center'}}>
      <Neomorph
        style={{
          shadowRadius: 5,
          // borderRadius: props.radius,
          // backgroundColor: props.bgcolor,
          width: 100 - 28,
          height: 40,
        }}>
        <TouchableRipple
          borderless={true}
          // onPress={props.onPress}
          rippleColor="rgba(0, 0, 0, .1)"
          style={{
            height: 40,
            width: 100 - 28,
            borderRadius: 50,
            justifyContent: 'center',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Avenir-Medium',
                textAlign: 'center',
              }}
              numberOfLines={1}>
              {'hello'}
            </Text>
          </View>
        </TouchableRipple>
      </Neomorph>
    </View>
  );
});
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
});
