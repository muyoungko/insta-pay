import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';

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
      if(!this.state.authorized)
      {
        this.props.navigation.replace('TabBar');
        this.setState({
              authorized: true
            }, function(){

            });
      }
    }
    console.log(webViewState.url);
  }
}


export default LoginScreen;
