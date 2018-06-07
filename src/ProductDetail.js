import React from 'react';
import { TextInput , Modal, View, Text, Button, WebView, ScrollView, Image, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';
import PopupDialog, { FadeAnimation, DialogTitle, DialogButton }  from 'react-native-popup-dialog';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';
import InstaApi from './instaapi/InstaApi.js';
import Util from './util/Util.js';
import Logic from './logic/Logic.js';
const Global = require('./Global.js');


class ProductDetail extends React.Component<{}> {
  constructor()
  {
    super();
    this.state = {
      data : [],
    };
  }

  componentDidMount()
  {

    var self = this;
    Logic.selectProductCandidateFromShop(Global.shopId, function(recents){
      //console.log(recents);
      self.setState({
        data : recents
      });
    });
  }

  onClickItem(index)
  {

  }

  onClickBack()
  {
    Global.navigation.pop();
  }
  onClickSave()
  {

  }
  render() {

    return (
      <View style={{ backgroundColor: '#ffffff', flex:1}}>

        <View style={{paddingTop: Util.getStatusBarHeight(), height:74, flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
          <Text style={{fontSize:Util.getFontSize(20), color:'#222222'}}> 상품 상세 정보 </Text>
          <Text style={{position : 'absolute', padding:5, left:10, bottom:12, fontSize:Util.getFontSize(16), color:'#888888'}}
            onPress={this.onClickBack}
          > 뒤로 </Text>
        </View>
        <View style={{backgroundColor: '#eeeeee', height:1}}></View>

        <View style={{height:50, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{left: 20, width : 100, fontSize:Util.getFontSize(18), color:'#222222'}}> 이름 </Text>
          <Text style={{ fontSize:Util.getFontSize(18), color:'#222222'}}> #고기방패 </Text>
        </View>
        <View style={{backgroundColor: '#eeeeee', height:1}}></View>

        <View style={{height:50, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{left: 20, width : 100, fontSize:Util.getFontSize(18), color:'#222222'}}> 가격 </Text>
          <TextInput style={{fontSize:Util.getFontSize(18), color:'#222222', paddingLeft:10, left: 5, width : 150, height : 40, borderWidth: 1,borderColor: '#eeeeee'}}>
            26,000
          </TextInput>
        </View>
        <View style={{backgroundColor: '#eeeeee', height:1}}></View>

        <Image style={{flex:1}} source={{uri:'https://scontent.cdninstagram.com/vp/51fbf8e56d4283a7c3c25fcfd947c263/5BACBA81/t51.2885-15/s640x640/sh0.08/e35/18721876_639737186217778_6870566493721985024_n.jpg'}}  />

        <View style={{backgroundColor: '#eeeeee', height:1}}></View>
        <View style={{height:80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{marginLeft:30, marginRight:30, backgroundColor: '#00aeef', flex:1, borderRadius: 5 }}>
            <Button
              onPress={this.onClickSave}
              title="저장"
              color="#ffffff"
              style={{flex:1}}
            />
          </View>
        </View>
      </View>
    );
  }

}



export default ProductDetail;
