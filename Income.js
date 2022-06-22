import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import TopBar from './TopBar';
import styles from './styles';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
const Income = ({route, navigation}) => {
  const {balanceIncome} = route.params;
  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor="#0C6DC7" />
      <TopBar
        styles={styles}
        balance={balanceIncome}
        isNumber={true}
        title="Your Income"
      />
      <View style={styles.financeBox}>
        <Text style={styles.financeBalance}>Category</Text>
        <View style={styles.listCategory}>
          <TouchableOpacity
            style={styles.boxCategory}
            onPress={() => {
              navigation.navigate('IncomeInput', {
                category: 'Wallet',
              });
            }}>
            <View>
              <Icon name="wallet" size={40} color="#ffffff" />
              <Text>Wallet</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Income;
