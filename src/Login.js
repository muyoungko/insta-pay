import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';

const GLOBAL = require('./Global.js');

class LoginScreen extends React.Component {
  constructor()
  {
    super();
    this.state = {authorized : false};
  }

  componentDidMount()
  {

  }

  static navigationOptions = {
    title: '인스타 연동을 해주세요~',
  };

  render() {

    return (
      <WebView
        source={{uri: 'https://www.instagram.com/oauth/authorize/?client_id=c99f61f0de284159a05576d4b34005bc&redirect_uri=http%3A%2F%2Finstapay-3aae4.firebaseapp.com%2Ftalkin%3Ffrom%3Dapp&response_type=code'}}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        javaScriptEnabled = {true}
        domStorageEnabled = {true}
        injectedJavaScript = {this.state.cookie}
        startInLoadingState={true}
      />
    );
  }

  /**
    {
    canGoBack: bool,
    canGoForward: bool,
    loading: bool,
    target: number,
    title: string,
    url: string,
  }*/
  _onNavigationStateChange(webViewState){
    var urlObject = url.parse(webViewState.url);
    //let outUrlString = urlObject.protocol + '//' + urlObject.host + '/more/jump?jump_path=' + encodeURIComponent(urlObject.pathname);

    //alert(urlObject.pathname);
    var params = queryString.parse(urlObject.query);
    if(urlObject.pathname == '/talkin' && params.code)
    {
      GLOBAL.CODE = params.code;
      if(!this.state.authorized)
      {
        this.props.navigation.replace('TabBar');
        // var ig = require('instagram-node').instagram();
        // ig.use({ access_token: GLOBAL.CODE });
        // ig.use({ client_id: 'c99f61f0de284159a05576d4b34005bc',
        //  client_secret: 'a50de48865f8436ba1298d420a1f7213' });

        // const Instagram = require('node-instagram').default;
        // // Create a new instance.
        // const instagram = new Instagram({
        //   clientId: 'c99f61f0de284159a05576d4b34005bc',
        //   clientSecret: 'a50de48865f8436ba1298d420a1f7213',
        //   accessToken: GLOBAL.CODE,
        // });


        this.setState({
              authorized: true
            }, function(){

            });
      }
    }
    //console.log(webViewState.url);
  }
}


export default LoginScreen;
