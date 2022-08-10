import React, {useState} from 'react';
import styles from '../styles';
import TopBar from '../component/TopBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

const IncomeInput = ({route, navigation}) => {
  const {category} = route.params;
  const [amount, onChangeAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const addIncome = async () => {
    try {
      const prevMoney = JSON.parse(await AsyncStorage.getItem('money'));
      prevMoney.income += +amount;
      prevMoney.balance = prevMoney.income - prevMoney.expenditure;
      prevMoney.data.push({
        category,
        amount,
        date: selectedDate,
        type: 'income',
        id: uuid.v4(),
      });
      await AsyncStorage.setItem('money', JSON.stringify(prevMoney));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar animated={true} backgroundColor="#0C6DC7" />
        <TopBar
          styles={styles}
          category={category}
          isNumber={false}
          title="Category"
        />
        <View style={styles.financeBoxForm}>
          <Text style={styles.financeBalance}>Amount</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={onChangeAmount}
            value={amount}
          />
          <Text style={styles.financeBalance}>Date</Text>
          <DatePicker
            options={{
              backgroundColor: '#ffffff',
              textHeaderColor: '#000000',
              textDefaultColor: '#000000',

              mainColor: '#0C6DC7',
              textSecondaryColor: '#000000',
              borderColor: '#000000',
            }}
            mode="calendar"
            minuteInterval={30}
            style={{borderRadius: 10}}
            onSelectedChange={date => setSelectedDate(date)}
          />
          <Button
            title="Add Income"
            onPress={() => {
              addIncome();

              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default IncomeInput;
