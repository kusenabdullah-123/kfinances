import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Income from './Income';
import Expenditure from './expenditure';
import ExpenditureInput from './ExpenditureInput';
import IncomeInput from './incomeInput';
const Stack = createNativeStackNavigator();
const MainScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home">{props => <Home {...props} />}</Stack.Screen>
      <Stack.Screen name="Income" component={Income} />
      <Stack.Screen name="IncomeInput" component={IncomeInput} />
      <Stack.Screen name="Expenditure" component={Expenditure} />
      <Stack.Screen name="ExpenditureInput" component={ExpenditureInput} />
    </Stack.Navigator>
  );
};
export default MainScreen;
