import React from 'react';

import DropShadow from 'react-native-drop-shadow';

import ReactNativeNumberFormat from './NumberFormat';

import {Text, View} from 'react-native';

const BoxCard = ({styles, value, colorStyle, title}) => {
  return (
    <View style={styles.boxCard}>
      <DropShadow style={styles.shadowProp}>
        <View style={styles.card}>
          <Text style={styles.titleCard}>{title}</Text>
          <ReactNativeNumberFormat value={value} namestyles={colorStyle} />
        </View>
      </DropShadow>
    </View>
  );
};
export default BoxCard;
