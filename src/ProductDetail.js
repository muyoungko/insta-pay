import React from 'react';
import { TextInput , Alert, Modal, View, Text, Button, WebView, ScrollView, Image, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';
import PopupDialog, { FadeAnimation, DialogTitle, DialogButton }  from 'react-native-popup-dialog';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';
import InstaApi from './instaapi/InstaApi.js';
import Util from './util/Util.js';
import Logic from './logic/Logic.js';
import Gnb from './gnb/Gnb.js'
const Global = require('./Global.js');


class ProductDetail extends React.Component<{}> {
  constructor()
  {
    super();
    this.state = {
      product : {}
    };
  }

  componentDidMount()
  {
    const { navigation } = this.props;
    const productId = navigation.getParam('productId', 'NO-ID');

    //console.log(productId);
    var self = this;
    Logic.selectProduct(productId, function(product){
      self.setState({
        price : product.price,
        product : product
      });
    });
  }

  onClickItem(index)
  {

  }


  onClickSave()
  {
    var n = parseInt(this.state.price);
    var pproduct = {
      id:this.state.product.id,
      price: n
    };
    Logic.updateProduct(pproduct, function(error){
      Alert.alert('저장되었습니다~ 쇼핑몰에서 확인해보세요');
      Global.navigation.pop();
    });
  }
  onClickDelete()
  {
    var self = this;
    Alert.alert(
      '경고',
      '쇼핑몰에서 제외합니다. 그러면 그냥 인스타 사진이 됩니다.',
      [
        {text: '취소', onPress: () => {

        }, style: 'cancel'},
        {
          text: '삭제', onPress: () => {
            Logic.removeProductFromShop(Global.shopId, self.state.product.id, function(error){
              Alert.alert('상품이 삭제되었습니다~ 쇼핑몰에서 확인해보세요');
              Global.navigation.pop();
            });
          }
        },
      ],
      { cancelable: true }
    );
  }

  render() {
    return (

      <View style={{ backgroundColor: '#ffffff', flex:1}}>

        <Gnb />


        <View style={{height:50, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{left: 20, width : 100, fontSize:Util.getFontSize(18), color:'#222222'}}> 이름 </Text>
          <Text style={{ fontSize:Util.getFontSize(18), color:'#222222'}}> {this.state.product.caption}</Text>
        </View>
        <View style={{backgroundColor: '#eeeeee', height:1}}></View>

        <View style={{height:50, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{left: 20, width : 100, fontSize:Util.getFontSize(18), color:'#222222'}}> 가격 </Text>
          <TextInput
            placeholder="Enter Price"
            keyboardType = 'numeric'
            ref={(textInput) => {
              this.textInput = textInput;
            }}
            onChangeText={(text) => this.setState({price:text})}
            value = {this.state.product.price?String(this.state.product.price):''}
            style={{fontSize:Util.getFontSize(18), color:'#222222', paddingLeft:10, left: 5, width : 150, height : 40, borderWidth: 1,borderColor: '#eeeeee'}}/>
        </View>
        <View style={{backgroundColor: '#eeeeee', height:1}}></View>

        <Image style={{flex:1}} source={{uri:this.state.product.image_high}}  />

        <View style={{backgroundColor: '#eeeeee', height:1}}></View>

        <View style={{height:60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{marginLeft:30, marginRight:30, backgroundColor: '#00aeef', flex:1, borderRadius: 10 }}>
            <Button
              onPress={() => this.onClickSave()}
              title="저장"
              color="#ffffff"
              style={{flex:1}}
            />
          </View>
        </View>

        <View style={{height:60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{marginLeft:30, marginBottom:15, marginRight:30, backgroundColor: '#ff0000', flex:1, borderRadius: 10 }}>
            <Button
              onPress={() => this.onClickDelete()}
              title="삭제"
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
