/* @flow */

import * as React from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import { Ionicons } from '@expo/vector-icons';
import Util from './util/Util.js';

import type { Route, NavigationState } from 'react-native-tab-view/types';

import LoginScreen from './Login.js';
import MessageScreen from './Message.js';
import MessageListScreen from './MessageList.js';
import ProductListScreen from './ProductList.js';
import MyShopScreen from './MyShop.js';
import OrderScreen from './Order.js';
import ProfitScreen from './Profit.js';
import SettingScreen from './Setting.js';





const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

type State = NavigationState<
  Route<{
    key: string,
    title: string,
    icon: string,
  }>
>;

export default class TapBar extends React.Component<*, State> {
  static title = 'No animation';
  static backgroundColor = '#fafafa';
  static tintColor = '#263238';
  static appbarElevation = 4;
  static statusBarStyle = 'dark-content';

  static navigationOptions = {
    title: 'Welcome'
    //, header: { visible:false } 헤더 숨기고 싶은데 에러남
  };


  state = {
    index: 0,
    routes: [
      { key: 'myShop', title: '쇼핑몰', icon: 'ios-people' },
      { key: 'productList', title: '상품', icon: 'ios-albums' },
      { key: 'order', title: '주문', icon: 'ios-paper' },
      { key: 'profit', title: '성과', icon: 'ios-chatboxes' },
      { key: 'setting', title: 'MY', icon: 'ios-chatboxes' },
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderLabel = ({ position, navigationState }) => ({ route, index }) => {
    const inputRange = navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? '#2196f3' : '#939393')
    );
    const color = position.interpolate({
      inputRange,
      outputRange,
    });
    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    );
  };

  _renderIcon = ({ navigationState, position }) => ({ route, index }) => {
    const inputRange = navigationState.routes.map((x, i) => i);
    const filledOpacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 1 : 0)),
    });
    const outlineOpacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 0 : 1)),
    });
    return (
      <View style={styles.iconContainer}>
        <AnimatedIcon
          name={route.icon}
          size={26}
          style={[styles.icon, { opacity: filledOpacity }]}
        />
        <AnimatedIcon
          name={route.icon + '-outline'}
          size={26}
          style={[styles.icon, styles.outline, { opacity: outlineOpacity }]}
        />
      </View>
    );
  };

  _renderFooter = props => (
    <View style={styles.tabbar}>
      {props.navigationState.routes.map((route, index) => {
        return (
          <TouchableWithoutFeedback
            key={route.key}
            onPress={() => props.jumpTo(route.key)}
          >
            <Animated.View style={styles.tab}>
              {this._renderIcon(props)({ route, index })}
              {this._renderLabel(props)({ route, index })}
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );

  _renderScene = SceneMap({
    myShop: MyShopScreen,
    productList: ProductListScreen,
    order: OrderScreen,
    profit: ProfitScreen,
    setting: SettingScreen,
  });

  render() {
    return (

        <TabViewAnimated
          style={[styles.container, this.props.style]}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderFooter={this._renderFooter}
          onIndexChange={this._handleIndexChange}
          animationEnabled={false}
          swipeEnabled={false}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .2)',
    paddingTop: 4.5,
  },
  iconContainer: {
    height: 26,
    width: 26,
  },
  icon: {
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: '#0084ff',
  },
  outline: {
    color: '#939393',
  },
  label: {
    fontSize: Util.getFontSize(13),
    marginTop: 2,
    marginBottom: 5,
    backgroundColor: 'transparent',
  },
});
