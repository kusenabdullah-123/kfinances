import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PieChart} from 'react-native-gifted-charts';
import {getDataChart} from '../lib/dataChart';
import {useIsFocused} from '@react-navigation/native';
const Pie = () => {
  const isFocused = useIsFocused();
  const [dataPie, setDataPie] = useState([]);
  const [percent, setPersent] = useState([]);
  const [highPercent, setHighPercent] = useState({});
  useEffect(() => {
    const getDataPie = async () => {
      if (isFocused) {
        const {dataChart, percentage, highPercent} = await getDataChart();
        setDataPie(dataChart);
        setPersent(percentage);
        setHighPercent(highPercent);
      }
    };
    getDataPie();
  }, [isFocused]);
  const renderDot = color => {
    return (
      <View
        style={{
          height: hp('1.9%'),
          width: wp('3.5%'),
          borderRadius: hp('5%'),
          backgroundColor: color,
          marginRight: wp('3%'),
        }}
      />
    );
  };

  const legend = percen => {
    return percen.length > 0 ? (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: hp('2%'),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: wp('40%'),
              marginRight: wp('5%'),
            }}>
            {renderDot('#006DFF')}
            <Text style={{color: 'black'}}>
              {percen[0].category}: {percen[0].percen}%
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#8F80F3')}
            <Text style={{color: 'black'}}>
              {percen[1].category}: {percen[1].percen}%
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: wp('40%'),
              marginRight: wp('5%'),
            }}>
            {renderDot('#3BE9DE')}
            <Text style={{color: 'black'}}>
              {percen[2].category}: {percen[2].percen}%
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#FF7F97')}
            <Text style={{color: 'black'}}>
              {percen[3].category}: {percen[3].percen}%
            </Text>
          </View>
        </View>
      </>
    ) : (
      <ActivityIndicator size="small" color="#0000ff" />
    );
  };

  return (
    <View
      style={{
        paddingVertical: hp('2%'),
        flex: 1,
      }}>
      <View
        style={{
          padding: hp('2%'),
          borderRadius: hp('5%'),
        }}>
        <Text style={{color: 'black', fontSize: wp('5%'), fontWeight: 'bold'}}>
          Performance
        </Text>
        <View style={{padding: hp('3%'), alignItems: 'center'}}>
          {dataPie.length > 0 ? (
            <PieChart
              data={dataPie}
              donut
              showGradient
              sectionAutoFocus
              radius={90}
              innerRadius={60}
              innerCircleColor={'#232B5D'}
              centerLabelComponent={() => {
                return (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: wp('7%'),
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      {highPercent.percen || 0}%
                    </Text>
                    <Text style={{fontSize: wp('5%'), color: 'white'}}>
                      {highPercent.category}
                    </Text>
                  </View>
                );
              }}
            />
          ) : null}
        </View>
        {legend(percent)}
      </View>
    </View>
  );
};
export default Pie;
