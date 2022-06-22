import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import TopBar from './TopBar';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const Income = ({route, navigation}) => {
  const {balanceExpenditure} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0C6DC7" />
      <TopBar
        styles={styles}
        balance={balanceExpenditure}
        isNumber={true}
        title="Your Expenditure"
      />
      <View style={styles.financeBox}>
        <Text style={styles.financeBalance}>Category</Text>
        <View style={styles.listCategory}>
          <TouchableOpacity
            style={styles.boxCategory}
            onPress={() => {
              navigation.navigate('ExpenditureInput', {
                category: 'Foods',
              });
            }}>
            <View>
              <Icon name="rest" size={40} color="#ffffff" />
              <Text>Foods</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxCategory}
            onPress={() => {
              navigation.navigate('ExpenditureInput', {
                category: 'Tools',
              });
            }}>
            <View>
              <Icon name="tool" size={40} color="#ffffff" />
              <Text>Tools</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxCategory}
            onPress={() => {
              navigation.navigate('ExpenditureInput', {
                category: 'Other',
              });
            }}>
            <View>
              <Icon name="wallet" size={40} color="#ffffff" />
              <Text>Other</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Income;
