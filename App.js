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



import LoginScreen from './src/Login.js';
import MessageScreen from './src/Message.js';
import MessageListScreen from './src/MessageList.js';
import ProductListScreen from './src/ProductList.js';
import MyShopScreen from './src/MyShop.js';
import OrderScreen from './src/Order.js';
import ProfitScreen from './src/Profit.js';
import SettingScreen from './src/Setting.js';
import TabBarScreen from './src/TabBar.js';



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

class HomeScreen extends React.Component {
  constructor()
  {
    super();
    this.state = {test : 'asdfsdfs'};
    console.log('test');
  }

  static navigationOptions = {
    tabBarLabel: 'Settings'
  };

  componentDidMount()
  {
    this.setState({
          test: 'false'
        }, function(){

        });
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{this.state.test}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}


class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: '상품상세',
  };
  static navigationOptions = {
    tabBarLabel: 'ddd'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}


const MainStackNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    TabBar: TabBarScreen,
    Message: MessageScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
);


const MyNestedTabNav = createBottomTabNavigator({
  Message: { screen: MyShopScreen },
  Product: { screen: ProductListScreen },
  Order: { screen: OrderScreen },
  Profit: { screen: ProfitScreen },
  Setting: { screen: SettingScreen}
});

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
    const db = firebase.database();
    const dbRef = db.ref().child('seller').child('muyoungko217').child('userName');

    db.ref('/seller/muyoungko217/userName').once('value').then(function(snapshot) {
      //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      //alert(snapshot.val());
    });
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
        <MainStackNavigator/>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
     flexDirection: 'column',
  },
  statusbar: {
    height: Platform.OS === 'ios' ? 20 : 25,
  },
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 44 : 56,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    flex: 1,
    margin: 16,
    textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    fontSize: 18,
    color: '#fff',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 56,
    padding: Platform.OS === 'ios' ? 12 : 16,
  },
  touchable: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .06)',
  },
  item: {
    fontSize: 16,
    color: '#333',
  },
});
