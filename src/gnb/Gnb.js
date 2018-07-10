import React from 'react';
import Util from '../util/Util.js';
import { TextInput , Alert, Modal, View, Text, Button, WebView, ScrollView, Image, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';
const Global = require('../Global.js');

class Gnb extends React.Component {

  onClickBack()
  {
    Global.navigation.pop();
  }

  render() {
      return(
          <View>
            <View style={{paddingTop: Util.getStatusBarHeight(), height:74, flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
              <Text style={{fontSize:Util.getFontSize(20), color:'#222222'}}> 상품 정보를 입력해주세요~ </Text>
              <Text style={{position : 'absolute', padding:5, left:10, bottom:12, fontSize:Util.getFontSize(16), color:'#888888'}}
                onPress={this.onClickBack}
              > 뒤로 </Text>
            </View>
            <View style={{backgroundColor: '#eeeeee', height:1}}></View>
          </View>
      );
  }
}

export default Gnb;
