import React from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  NativeModules,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { createStackNavigator} from 'react-navigation';
import LoginScreen from './src/Login.js';

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
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Login',
  }
);



export default class App extends React.Component {
  render() {
    return <LoginScreen/>;
  }
}
