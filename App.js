import React from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  NativeModules,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/messaging'


const Global = require('./src/Global.js');


import LoginScreen from './src/Login.js';
import MessageScreen from './src/Message.js';
import MessageListScreen from './src/MessageList.js';
import ProductListScreen from './src/ProductList.js';
import MyShopScreen from './src/MyShop.js';
import OrderScreen from './src/Order.js';
import ProfitScreen from './src/Profit.js';
import SettingScreen from './src/Setting.js';
import TabBarScreen from './src/TabBar.js';
import ProductDetail from './src/ProductDetail.js'


function __translate(term) {

  //check if localeIdentifier exists
  if (NativeModules.I18nManager.localeIdentifier) {

    const i18nLocale = NativeModules.I18nManager.localeIdentifier;

    console.log(i18nLocale);

    //Check if has registered terms in current i18nLocale;
    if (TERMS[i18nLocale]){

      //Return the registered or empty string to prevent error
      return TERMS[i18nLocale][term] || '';

    } else {

      //Check if has language without a especific region like
      //Example en-CA to en
      const simplei18nLocale = i18nLocale.split('_')[0];

      return TERMS[simplei18nLocale][term] || '';

    }
  }
}


const MainStackNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    TabBar: TabBarScreen,
    Message: MessageScreen,
    ProductDetail : ProductDetail
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
);



export default class App extends React.Component {
  constructor(){
    super();

    let config = {
      apiKey: "AIzaSyBRkuDWWYp1ZZybWOmanPgh0J47j746Rc8",
      authDomain: "instapay-3aae4.firebaseapp.com",
      databaseURL: "https://instapay-3aae4.firebaseio.com",
      projectId: "instapay-3aae4",
      storageBucket: "instapay-3aae4.appspot.com",
      messagingSenderId: "377294303001",
    };

    firebase.initializeApp(config);
  }
  componentDidMount()
  {
  }



  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            barStyle={
              /* $FlowFixMe */
              Platform.OS === 'ios' ? 'dark-content' : 'light-content'
            }
          />
        <MainStackNavigator
          ref={(nav) => {
            this.nav = nav;
          }}
          onNavigationStateChange={(prevState, currentState) => {
            // const currentScreen = this.getCurrentRouteName(currentState);
            // const prevScreen = this.getCurrentRouteName(prevState);

            // { key: 'StackRouterRoot',
            //   isTransitioning: false,
            //   index: 1,
            //   routes:
            //    [ { params: undefined,
            //        routeName: 'TabBar',
            //        key: 'id-1529933756451-1' },
            //      { params: { productId: '1524720643072290931_4787392170' },
            //        routteName: 'ProductDetail',
            //        key: 'id-1529933756451-2' } ] }

            //alert(prevState.index + ' / ' + currentState.index);
            if(prevState.index == 1 && currentState.index == 0)
            {
                Global.ProductListScreen.componentDidMount();
            }
          }}

        />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
     flexDirection: 'column',
  },
});
