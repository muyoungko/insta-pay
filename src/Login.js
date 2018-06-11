import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/messaging'


import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import Util from './util/Util.js';
import queryString from 'query-string';
import InstaApi from './instaapi/InstaApi.js';
import Logic from './logic/Logic.js';
const Global = require('./Global.js');

class LoginScreen extends React.Component {
  constructor()
  {
    super();
    this.state = {authorized : false};
  }

  componentDidMount()
  {
    //var shopId = 'muyoungko217';
    // const db = firebase.database();
    // db.ref('shops/'+shopId +'/products').once('value').then(function(productIdArraySnapshot){
    //   var productIdArray = productIdArraySnapshot.val();
    //   var products = [];
    //   for(var i=0;i<productIdArray.length;i++)
    //   {
    //     db.ref('products/'+productIdArray[i]).once('value').then(function(snapshot){
    //       products.push(snapshot.val());
    //       if(productIdArray.length == products.length)
    //         console.log(products);
    //     });
    //   }
    // });

    // const db = firebase.database();
    // var productsref = db.ref('products');
    // var r = [];
    // productsref.orderByChild('id').equalTo(true/false).on("child_added", function(Data){
    //   console.log(Data.val(), Data.key);
    // });
  }

  static navigationOptions = {
    title: '인스타 연동을 해주세요~',
  };

  render() {

    return (
      <WebView
        marginTop={Util.getStatusBarHeight()}
        source={{uri: 'https://www.instagram.com/oauth/authorize/?client_id=c99f61f0de284159a05576d4b34005bc&redirect_uri=http%3A%2F%2Finstapay-3aae4.firebaseapp.com%2Ftalkin%3Ffrom%3Dapp&response_type=token'}}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        javaScriptEnabled = {true}
        domStorageEnabled = {true}
        injectedJavaScript = {this.state.cookie}
        startInLoadingState={true}
      />
    );
  }

  _onNavigationStateChange(webViewState){
    var urlObject = url.parse(webViewState.url);
    //console.log(webViewState.url);
    //let outUrlString = urlObject.protocol + '//' + urlObject.host + '/more/jump?jump_path=' + encodeURIComponent(urlObject.pathname);

    var params = queryString.parse(urlObject.query);

    var index = webViewState.url.indexOf('#');
    if(urlObject.pathname == '/talkin' && index >= 0)
    {
      var token = webViewState.url.substring(index+'#access_token='.length,webViewState.url.length)


      Global.navigation = this.props.navigation;
      //console.log(Global.CODE);
      if(!this.state.authorized)
      {
        var self = this;
        InstaApi.init('c99f61f0de284159a05576d4b34005bc', 'a50de48865f8436ba1298d420a1f7213', token);
        Logic.upsertAndGetUser(function(user,err){
          //console.log(user);
          Global.shopId = user.username;
          Logic.upsertAndGetShop(user, function(shop,err){
            self.props.navigation.replace('TabBar');
          });
        });

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
