import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import ReactNativeNumberFormat from './NumberFormat';
import {Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ItemBudget = ({
  styles,
  category,
  title,
  attrNumber,
  value,
  _id,
  setDeleted,
}) => {
  const deleteBudget = async () => {
    const prevData = JSON.parse(await AsyncStorage.getItem('money'));
    const find = prevData.data.find(item => item.id === _id);
    if (find.type === 'income') {
      prevData.income -= +find.amount;
    } else {
      prevData.expenditure -= +find.amount;
    }
    prevData.balance = prevData.income - prevData.expenditure;
    const dataAfterDelete = prevData.data.filter(item => {
      return item.id !== _id;
    });
    prevData.data = dataAfterDelete;
    await AsyncStorage.setItem('money', JSON.stringify(prevData));
    setDeleted(true);
  };
  return (
    <View style={styles.boxScroolItem}>
      <View style={styles.cardItem}>
        <View style={styles.boxLeft}>
          <View style={styles.boxIcons}>
            <Icon name="wallet" size={30} color="#ffffff" />
          </View>
          <View>
            <Text style={styles.textItem}>{category}</Text>
            <Text style={styles.time}>{title}</Text>
          </View>
        </View>
        <View style={styles.boxItemText}>
          <ReactNativeNumberFormat
            value={value}
            attr={attrNumber}
            namestyles={styles.itemText}
          />
          <TouchableOpacity
            onPress={() => {
              deleteBudget();
            }}>
            <Icon name="close" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemBudget;
