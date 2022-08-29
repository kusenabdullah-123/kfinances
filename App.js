import React, {useState, useEffect} from 'react';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainScreen from './MainScreen/mainScreen';
import HistoryScreen from './HistoryScreen/HistoryScreen';
import ChartScreen from './ChartScreen/ChartScreen';
const Tab = createBottomTabNavigator();
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
        <Tab.Navigator
          initialRouteName="MainScreen"
          screenOptions={{
            tabBarActiveTintColor: '#0C6DC7',
          }}>
          <Tab.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={HistoryScreen}
            options={{
              tabBarLabel: 'History',
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="database"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Chart"
            component={ChartScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Chart',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="chart-arc"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AnimatedSplash>
  );
};

export default App;
