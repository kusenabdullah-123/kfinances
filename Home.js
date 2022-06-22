import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {FloatingAction} from 'react-native-floating-action';
import styles from './styles';
import TopBar from './TopBar';
import BoxCard from './BoxCard';
import ItemBudget from './ItemBudget';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  const [money, setMoney] = useState({balance: 0, income: 0, expenditure: 0});
  const [budget, setBudget] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  const actions = [
    {
      text: 'Income',
      icon: <Icon name="plus" size={20} color="#ffffff" />,
      name: 'income',
      position: 1,
    },
    {
      text: 'Expenditure',
      icon: <Icon name="minus" size={20} color="#ffffff" />,
      name: 'expenditure',
      position: 2,
    },
  ];

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
          setBudget([...JSON.parse(dataMoney).data].slice(-2));
          setMoney(JSON.parse(dataMoney));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0C6DC7" />
      {/* topHeader */}
      <TopBar
        styles={styles}
        balance={money.balance}
        isNumber={true}
        title="Balance"
      />
      {/* end topBar */}

      <View style={styles.financeBox}>
        <View style={styles.financeBalanceBox}>
          <Text style={styles.financeBalance}>Finance Balance</Text>
          <View style={styles.box}>
            <BoxCard
              styles={styles}
              value={money.income}
              colorStyle={styles.textIncomeGreen}
              title="Income"
            />
            <BoxCard
              styles={styles}
              value={money.expenditure}
              colorStyle={styles.textExpenditureRed}
              title="Expenditure"
            />
          </View>
        </View>

        <View style={styles.boxBudget}>
          <Text style={styles.titleBudget}>Budget</Text>
          <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.clear();
            }}>
            <Text style={styles.titleBudget}>Clear</Text>
          </TouchableOpacity>
          <ScrollView style={styles.boxScrol}>
            {budget?.map((item, index) => {
              return (
                <ItemBudget
                  key={index}
                  styles={styles}
                  category={item.category}
                  title={item.name ?? 'wallet'}
                  attrNumber={item.type === 'expenditure' ? ' - ' : ' + '}
                  value={item.amount}
                  _id={item.id}
                />
              );
            })}
          </ScrollView>
        </View>
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            if (name === 'expenditure') {
              navigation.navigate('Expenditure', {
                balanceExpenditure: money.expenditure,
              });
            } else {
              navigation.navigate('Income', {
                balanceIncome: money.income,
              });
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
