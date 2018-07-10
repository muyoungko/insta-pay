import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';
import Util from './util/Util.js';
const Global = require('./Global.js');

class MyShop extends React.Component {
  constructor()
  {
    super();
    var url = 'https://instapay-3aae4.firebaseapp.com/' + Global.shopId;
    this.state = {url:url};
  }

  componentDidMount()
  {

  }


  render() {

    return (
      <View paddingTop={Util.getStatusBarHeight()}
        style={{backgroundColor: '#ffffff', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <WebView
          style={{ backgroundColor: '#ffffff', flex: 1}}
          source={{uri: this.state.url}}
          onNavigationStateChange={this._onNavigationStateChange.bind(this)}
          javaScriptEnabled = {true}
          domStorageEnabled = {true}
          injectedJavaScript = {this.state.cookie}
          startInLoadingState={true}
        />
      </View>
    );
  }

  _onNavigationStateChange(webViewState){
    //alert(webViewState.url);
  }
}


export default MyShop;
