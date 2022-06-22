import React, {useState} from 'react';
import styles from './styles';
import TopBar from './TopBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

const IncomeInput = ({route, navigation}) => {
  const {category} = route.params;
  const [amount, onChangeAmount] = useState('');
  const addIncome = async () => {
    try {
      const prevMoney = JSON.parse(await AsyncStorage.getItem('money'));
      prevMoney.income += +amount;
      prevMoney.balance = prevMoney.income - prevMoney.expenditure;
      prevMoney.data.push({category, amount, type: 'income', id: uuid.v4()});
      await AsyncStorage.setItem('money', JSON.stringify(prevMoney));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0C6DC7" />
      <TopBar
        styles={styles}
        category={category}
        isNumber={false}
        title="Category"
      />
      <View style={styles.financeBox}>
        <Text style={styles.financeBalance}>Amount</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={onChangeAmount}
          value={amount}
        />
        <Button
          title="Add Income"
          onPress={() => {
            addIncome();
            // navigation.navigate('Home');
            navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default IncomeInput;
