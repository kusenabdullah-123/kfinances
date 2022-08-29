import AsyncStorage from '@react-native-async-storage/async-storage';

const chartData = async () => {
  const pieData = [
    {
      value: 0,
      color: '#009FFF',
      gradientCenterColor: '#006DFF',
      category: 'Wallet',
    },
    {
      value: 0,
      color: '#93FCF8',
      gradientCenterColor: '#3BE9DE',
      category: 'Foods',
    },
    {
      value: 0,
      color: '#BDB2FA',
      gradientCenterColor: '#8F80F3',
      category: 'Tools',
    },
    {
      value: 0,
      color: '#FFA5BA',
      gradientCenterColor: '#FF7F97',
      category: 'Other',
    },
  ];
  const dataMoney = await AsyncStorage.getItem('money');
  JSON.parse(dataMoney).data?.map(item => {
    if (item.category == 'Wallet') {
      pieData[0].value += 1;
    }
    if (item.category == 'Foods') {
      pieData[1].value += 1;
    }
    if (item.category == 'Tools') {
      pieData[2].value += 1;
    }
    if (item.category == 'Other') {
      pieData[3].value += 1;
    }
  });
  return pieData;
};

const getPrecentage = (num, total) => {
  return Math.round((num / total) * 100);
};

const getDataChart = async () => {
  const dataChart = await chartData();

  const countChart = dataChart
    .map(item => {
      return item.value;
    })
    .reduce((acc, cur) => acc + cur);
  const getDataPercent = () => {
    if (countChart > 0) {
      return dataChart.map(item => {
        return {
          category: item.category,
          percen: getPrecentage(item.value, countChart),
        };
      });
    }
    return dataChart.map(item => {
      return {
        category: item.category,
        percen: 0,
      };
    });
  };
  const percentage = getDataPercent();

  const valuePercen = [...dataChart].map(item => {
    return item.value;
  });
  const highPercentIndex = [...dataChart].findIndex(
    element => element.value === Math.max(...valuePercen),
  );
  const highPercent = {
    category: dataChart[highPercentIndex].category,
    percen: getPrecentage(dataChart[highPercentIndex].value, countChart),
  };
  return {dataChart, percentage, highPercent};
};

export {getDataChart};
