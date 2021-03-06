/* @flow */

import * as React from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
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

import { Icon } from 'react-native-elements'





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

  constructor()
  {
    super();
    //this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }



  componentDidMount()
  {

  }

  componentWillUnmount()
  {

  }

  state = {
    index: 0,
    routes: [
      { key: 'myShop', title: '쇼핑몰', icon: 'message' },
      { key: 'productList', title: '상품', icon: 'add-box' },
      { key: 'order', title: '주문', icon: 'receipt' },
      { key: 'profit', title: '매출', icon: 'show-chart' },
      { key: 'setting', title: 'MY', icon: 'settings' },
    ],
  };

  _handleIndexChange(index)
  {
    this.setState({
      index,
    });
  }

  _renderLabel = ({ position, navigationState }) => ({ route, index }) => {
    const inputRange = navigationState.routes.map((x, i) => i);

    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? '#ff5000' : '#939393')
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

    var color = '#939393';
    if(navigationState.index == index)
      color = '#ff5000';

    return (
      <View style={styles.iconContainer}>
      <Icon
        name={route.icon}
        color={color} />
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
          ref={(tabView) => {
            this.tabView = tabView;
          }}
          style={[styles.container, this.props.style]}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderFooter={this._renderFooter}
          onIndexChange={(key) => this._handleIndexChange(key)}
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
