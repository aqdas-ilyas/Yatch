import {
  Dimensions,
  FlatList,
  LogBox,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import LeftSideMenu from './src/Screens/LeftSideMenu';
import RightSideMenu from './src/Screens/RightSideMenu';
import CenteredView from './src/Screens/CenteredView';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

LogBox.ignoreAllLogs();
export default function App() {
  const [speedValue, setSpeedValue] = React.useState('0');
  const [AWA, setAWAValue] = React.useState('0');
  const [AWAKn, setAWAKNValue] = React.useState('0');
  const [LOG1, setLOG1Value] = React.useState('0');
  const [LOG2, setLOG2Value] = React.useState('0');
  const [date, setDateValue] = React.useState('0');

  const [SOG, setSOGValue] = React.useState('0');
  const [TWA, setTWAValue] = React.useState('0');
  const [TWS, setTWSValue] = React.useState('0');
  const [DTW, setDTWValue] = React.useState('0');

  const [WT, setWTValue] = React.useState('0');
  const [Depth, setDepthValue] = React.useState('0');

  useEffect(() => {
    Orientation.lockToLandscape();

    LeftSideFunc();
    RightSideFunc();
    centerSideFunc();
  }, []);

  const centerSideFunc = () => {
    // WT Value
    const min = 20;
    const max = 30;
    setInterval(
      () =>
        setWTValue(parseFloat(min + Math.random() * (max - min)).toFixed(1)),
      2000,
    );

    // Depth Value
    const min1 = 30;
    const max1 = 40;
    setInterval(
      () =>
        setDepthValue(
          parseFloat(min1 + Math.random() * (max1 - min1)).toFixed(1),
        ),
      2000,
    );
  };

  const RightSideFunc = () => {
    // SOG Value
    const min = 1;
    const max = 10;
    setInterval(
      () =>
        setSOGValue(parseFloat(min + Math.random() * (max - min)).toFixed(1)),
      2000,
    );

    // TWA Value
    const min1 = -100;
    const max1 = -200;
    setInterval(
      () =>
        setTWAValue(
          parseFloat(min1 + Math.random() * (max1 - min1)).toFixed(0),
        ),
      2000,
    );

    // TWS Value
    const min2 = 10;
    const max2 = 20;
    setInterval(
      () =>
        setTWSValue(
          parseFloat(min2 + Math.random() * (max2 - min2)).toFixed(1),
        ),
      2000,
    );

    // DTW Value
    const min3 = 30;
    const max3 = 40;
    setInterval(
      () =>
        setDTWValue(
          parseFloat(min3 + Math.random() * (max3 - min3)).toFixed(1),
        ),
      2000,
    );
  };

  const LeftSideFunc = () => {
    // Speed Value
    const min = 1;
    const max = 10;
    setInterval(
      () =>
        setSpeedValue(parseFloat(min + Math.random() * (max - min)).toFixed(1)),
      2000,
    );

    // AWA Value
    const min1 = -100;
    const max1 = -200;
    setInterval(
      () =>
        setAWAValue(
          parseFloat(min1 + Math.random() * (max1 - min1)).toFixed(0),
        ),
      2000,
    );

    // AWAKN Value
    const min2 = 10;
    const max2 = 20;
    setInterval(
      () =>
        setAWAKNValue(
          parseFloat(min2 + Math.random() * (max2 - min2)).toFixed(1),
        ),
      2000,
    );

    // LOG1 Value
    const min3 = 10;
    const max3 = 20;
    setInterval(
      () =>
        setLOG1Value(
          parseFloat(min3 + Math.random() * (max3 - min3)).toFixed(1),
        ),
      2000,
    );

    // LOG2 Value
    const min4 = 10;
    const max4 = 20;
    setInterval(
      () =>
        setLOG2Value(
          parseFloat(min4 + Math.random() * (max4 - min4)).toFixed(1),
        ),
      2000,
    );

    //Date
    const date = new Date();
    const datefinal = date.toLocaleString('en', { hour: 'numeric', hour12: true })
    const FinalDate = moment(datefinal).format('LTS');
    setDateValue(datefinal);
  };

  return (
    <LinearGradient
      colors={['#0F0F0F', '#3E4345', '#202427']}
      style={styles.linearGradient}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <LeftSideMenu
          speedvalue={speedValue}
          awa={AWA}
          AWAKn={AWAKn}
          LOG1={LOG1}
          LOG2={LOG2}
          date={date}
        />
        <View style={{marginHorizontal: 20}}>
          <CenteredView wt={WT} Depth={Depth} />
        </View>
        <RightSideMenu sog={SOG} twa={TWA} tws={TWS} dtw={DTW} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 50,
    borderRadius: 5,
    paddingTop: 30,
  },
});
