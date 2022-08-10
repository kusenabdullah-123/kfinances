import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  topBar: {},
  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapperUp: {
    paddingTop: hp('1%'),
    height: hp('32%'),

    width: wp('100%'),
    backgroundColor: '#0000ff',
  },
  containerWrapperUp: {
    padding: wp('9%'),
  },
  boxTitle: {
    padding: hp('0.6%'),
  },
  title: {
    fontSize: hp('3%'),

    color: '#ffffff',
  },
  boxBalance: {
    padding: wp('2%'),
  },
  titleBalance: {
    fontSize: wp('10%'),
    marginLeft: wp('5%'),
    color: '#ffffff',
  },
  financeBox: {
    flex: 1,
    padding: wp('3%'),
    marginTop: -hp('2.5%'),
    backgroundColor: '#ffffff',
    borderTopRightRadius: wp('6%'),
    borderTopStartRadius: wp('6%'),
  },
  financeBoxForm: {
    flex: 1,

    padding: wp('3%'),
    marginTop: -hp('12%'),
    backgroundColor: '#ffffff',
    borderTopRightRadius: wp('6%'),
    borderTopStartRadius: wp('6%'),
  },
  balances: {
    flex: 0,
    flexDirection: 'row',

    alignItems: 'center',
  },
  financeBalanceBox: {
    height: hp('25%'),
    padding: wp('3%'),
  },
  financeBalance: {
    color: '#000000',
    fontSize: wp('7%'),
  },
  box: {
    marginTop: wp('2%'),
    padding: wp('1.5%'),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxCard: {
    height: wp('25%'),
    width: '45%',
    padding: wp('1.5%'),
  },
  card: {
    paddingTop: wp('3%'),
    alignItems: 'center',
    height: '100%',
    borderRadius: wp('4%'),
    backgroundColor: '#ffffff',
  },
  titleCard: {
    color: '#000000',
    fontSize: wp('4.5%'),
  },
  textIncomeGreen: {
    color: '#3CAE5C',
    fontSize: wp('5%'),
  },
  textExpenditureRed: {
    color: '#FF4328',
    fontSize: wp('5%'),
  },
  titleBudget: {
    color: '#000000',
    fontSize: hp('3.5%'),
  },
  boxScrol: {height: hp('25%'), padding: wp('3%')},
  boxBudget: {
    height: hp('43%'),
    padding: wp('3%'),
  },
  boxScroolItem: {
    height: hp('11%'),
    padding: wp('3%'),
    marginBottom: hp('1%'),
  },
  cardItem: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxLeft: {
    flex: 2,
    height: hp('8%'),
    width: wp('11%'),
    flexDirection: 'row',
  },
  boxItemText: {
    flex: 2,
    height: hp('8%'),
    padding: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxIcons: {
    width: wp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#3CAE5C',
    marginRight: hp('1%'),
  },
  itemText: {
    color: '#000000',
    fontSize: hp('2%'),
  },
  textItem: {
    color: '#000000',
  },
  time: {
    color: '#000000',
  },

  // income
  listCategory: {
    padding: hp('2%'),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  boxCategory: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('22%'),
    height: hp('9%'),
    marginBottom: hp('3%'),
    borderRadius: hp('2%'),
    backgroundColor: '#3CAE5C',
  },
  // input income
  inputs: {
    height: hp('6%'),
    margin: wp('2%'),
    borderWidth: 1,
    padding: hp('1%'),
    color: 'black',
  },
});
export default styles;
