import React, {useState, useEffect} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Income from './Income';
import Expenditure from './expenditure';
import ExpenditureInput from './ExpenditureInput';
import IncomeInput from './incomeInput';

const Stack = createNativeStackNavigator();
const App = props => {
  const [loaded, setLoaded] = useState(false);
  const timer = setTimeout(() => setLoaded(true), 3000);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={loaded}
      logoImage={require('./assets/kf.png')}
      backgroundColor={'#0C6DC7'}
      logoHeight={150}
      logoWidth={150}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home">
            {props => <Home {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Income" component={Income} />
          <Stack.Screen name="IncomeInput" component={IncomeInput} />
          <Stack.Screen name="Expenditure" component={Expenditure} />
          <Stack.Screen name="ExpenditureInput" component={ExpenditureInput} />
        </Stack.Navigator>
      </NavigationContainer>
    </AnimatedSplash>
  );
};

export default App;
