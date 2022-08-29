import React, {useState, useEffect} from 'react';
import styles from '../styles';
import TopBar from '../component/TopBar';
import ItemBudget from '../component/ItemBudget';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView, Text, View, StatusBar, ScrollView} from 'react-native';
const HistoryScreen = () => {
  const isFocused = useIsFocused();
  const [money, setMoney] = useState([]);
  const [isDeleted, setDeleted] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await AsyncStorage.getItem('money');
        if (!data) {
          await AsyncStorage.setItem(
            'money',
            JSON.stringify({income: 0, balance: 0, expenditure: 0, data: []}),
          );
        }
        if (isFocused) {
          const dataMoney = await AsyncStorage.getItem('money');
          setMoney([...JSON.parse(dataMoney).data]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [isFocused]);
  useEffect(() => {
    const getBudget = async () => {
      if (isDeleted) {
        const dataMoney = await AsyncStorage.getItem('money');
        setMoney([...JSON.parse(dataMoney).data]);
        setDeleted(false);
      }
    };
    getBudget();
  }, [isDeleted]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0C6DC7" />
      {/* topHeader */}
      <TopBar styles={styles} balance={money.balance} title="Welcome" />
      {/* end topBar */}

      <View style={styles.financeBoxForm}>
        <View style={styles.boxBudgetHistory}>
          <Text style={styles.titleBudget}>History</Text>
          <ScrollView style={styles.boxScrolHistory}>
            {money?.map((item, index) => {
              return (
                <ItemBudget
                  key={index}
                  styles={styles}
                  category={item.category}
                  title={item.name ?? 'wallet'}
                  attrNumber={item.type === 'expenditure' ? ' - ' : ' + '}
                  value={item.amount}
                  _id={item.id}
                  deleted={isDeleted}
                  setDeleted={setDeleted}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HistoryScreen;
