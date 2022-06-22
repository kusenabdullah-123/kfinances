import React, {useState} from 'react';
import styles from './styles';
import TopBar from './TopBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';
import uuid from 'react-native-uuid';
const ExpenditureInput = ({route, navigation}) => {
  const {category} = route.params;
  const [amount, onChangeAmount] = useState('');
  const [name, onChangeName] = useState('');
  const addExpenditure = async () => {
    try {
      const prevMoney = JSON.parse(await AsyncStorage.getItem('money'));

      prevMoney.expenditure += +amount;
      prevMoney.balance = prevMoney.income - prevMoney.expenditure;
      prevMoney.data.push({
        category,
        amount,
        type: 'expenditure',
        name,
        id: uuid.v4(),
      });
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
        <Text style={styles.financeBalance}>Name</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={onChangeName}
          value={name}
        />
        <Text style={styles.financeBalance}>Amount</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={onChangeAmount}
          value={amount}
        />
        <Button
          title="Add Expenditure"
          onPress={() => {
            addExpenditure();
            navigation.navigate('Home');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default ExpenditureInput;
