import React from 'react';
import styles from '../styles';
import TopBar from '../component/TopBar';
import {SafeAreaView, View, StatusBar} from 'react-native';
import Pie from '../component/Pie';
const ChartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0C6DC7" />
      {/* topHeader */}
      <TopBar styles={styles} title="Welcome" />
      {/* end topBar */}

      <View style={styles.financeBoxForm}>
        <View style={styles.boxChart}>
          <Pie />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ChartScreen;
