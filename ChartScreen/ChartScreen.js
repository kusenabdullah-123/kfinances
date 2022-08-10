import React, {useState, useEffect} from 'react';
import styles from '../styles';
import TopBar from '../component/TopBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView, Text, View, StatusBar, ScrollView} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import uuid from 'react-native-uuid';
import {heightPercentageToDP} from 'react-native-responsive-screen';
const ChartScreen = () => {
  const isFocused = useIsFocused();
  const [chart, setChart] = useState([]);
  //   const [isDeleted, setDeleted] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        if (isFocused) {
          let data = [
            {value: 0, type: 'Wallet', color: '#177AD5'},
            {value: 0, type: 'Foods', color: '#79D2DE'},
            {value: 0, type: 'Tools', color: '#ED6665'},
            {value: 0, type: 'Other', color: '#00cc44'},
          ];
          const dataMoney = await AsyncStorage.getItem('money');
          JSON.parse(dataMoney).data?.map(item => {
            if (item.category == 'Wallet') {
              data[0].value += 1;
            }
            if (item.category == 'Foods') {
              data[1].value += 1;
            }
            if (item.category == 'Tools') {
              data[2].value += 1;
            }
            if (item.category == 'Other') {
              data[3].value += 1;
            }
          });
          setChart(data);
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
      <TopBar styles={styles} title="Welcome" />
      {/* end topBar */}

      <View style={styles.financeBoxForm}>
        <View style={styles.boxChart}>
          <Text style={styles.titleBudget}>Chart</Text>
          <ScrollView>
            <View style={styles.Chart}>
              {chart.length > 0 ? (
                <PieChart
                  key={uuid.v4()}
                  data={chart}
                  showText
                  textColor="black"
                  radius={150}
                  textSize={15}
                  showValuesAsLabels
                  showTextBackground
                  textBackgroundRadius={25}
                />
              ) : null}
              <View styles={styles.containerTextChart}>
                {chart?.map((item, index) => {
                  return (
                    <Text
                      key={index}
                      style={{
                        color: `${item.color}`,
                        fontSize: heightPercentageToDP('3.1%'),
                      }}>
                      {item.type} : {item.value}
                    </Text>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ChartScreen;
