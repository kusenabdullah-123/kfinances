import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import ReactNativeNumberFormat from './NumberFormat';
import {Text, View} from 'react-native';

const topBar = ({styles, balance, category, title, isNumber}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.wrapperUp}
      colors={['#0C6DC7', '#238EF1', '#73B9FA']}>
      <View style={styles.containerWrapperUp}>
        {isNumber ? (
          <View style={styles.boxTitle}>
            <Text style={styles.title}>Hi</Text>
            <Text style={styles.title}>Welcome back</Text>
          </View>
        ) : null}

        <View style={styles.boxBalance}>
          <Text style={styles.title}>{title}</Text>
          {isNumber ? (
            <View style={styles.balances}>
              <Icon name="wallet" size={30} color="#ffffff" />
              <ReactNativeNumberFormat
                value={balance}
                namestyles={styles.titleBalance}
              />
            </View>
          ) : (
            <View style={styles.balances}>
              <Text style={styles.titleBalance}>{category}</Text>
            </View>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};
export default topBar;
