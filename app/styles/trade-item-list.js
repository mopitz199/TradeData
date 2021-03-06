import { StyleSheet, Platform } from 'react-native';
import * as theme from './theme';
const platform = Platform.OS;
export const styles = StyleSheet.flatten({
  tradeItemBorder:{
    borderBottomColor: theme.borderColor,
    borderBottomWidth: 1,
  },
  tradeItemList:{
    /*borderBottomColor: theme.borderColor,
    borderBottomWidth: 1,*/
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  tradeItemListLeft:{
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  datetime:{
    fontSize: 18,
  },
  tradeItemListCenter:{
    marginLeft: 10,
    flex: 1,
    height: 60,
    justifyContent: 'space-between',
  },
  tradeItemListTopInfo:{
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  date:{
    fontSize: 18,
    marginRight: 10,
  },
  time:{
    fontSize: 15,
  },
  tradeItemListBottomInfo:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  tradeType:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  tradeItemListRight:{

  },
  result:{
    fontSize: 35,
  },
  winResult:{
    color: 'rgb(40, 187, 90)',
  },
  loseResult:{
    color: theme.errorColor,
  }

});
