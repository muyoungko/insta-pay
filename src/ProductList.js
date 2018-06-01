import React from 'react';
import { View, Text, Button, WebView, ScrollView, Image, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';
import InstaApi from './instaapi/InstaApi.js';
import Util from './util/Util.js';
import Logic from './logic/Logic.js';
const Global = require('./Global.js');


class ProductList extends React.Component<{}> {
  constructor()
  {
    super();
    this.state = {
      data : []
    };
  }

  componentDidMount()
  {
    var url ='https://api.instagram.com/v1/users/self/media/recent/?access_token=';
    url += Global.CODE;


    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('------------');
        //console.log(responseJson.data);

        this.setState({
          data : responseJson.data
        });
      })
      .catch((error) => {
        console.log(error);
      });


  }

  static navigationOptions = {
    title: '상품을 선택해주세요',
  };

  static navigationOptions = {
    tabBarLabel: '상품'
  };

  onClickItem(index)
  {
    console.log('click');
  }

  render() {
    return (
      <View style={{backgroundColor: '#ffffff', flex:1}}>

        <View style={{marginTop: Util.getStatusBarHeight(), height:54, flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
          <Text style={{fontSize:Util.getFontSize(20), color:'#222222'}}> 인스타 사진 중에서 상품을 선택해주세요 </Text>
          <Text style={{fontSize:Util.getFontSize(16), color:'#888888'}}> 쇼핑몰에 상품으로 추가됩니다 </Text>
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          {this.state.data.map((item, i) => (
            <TouchableHighlight key={i} onPress={(key) => this.onClickItem(i)}>
              <View style={{flex:1}}>
                <Image key={i} source={{uri:item.images.low_resolution.url}} style={styles.cover} onPress={this.onClickItem} />

                <Text style={{position: 'absolute', margin:3, backgroundColor: '#00000044', right:0, bottom:0, fontSize:Util.getFontSize(15), color:'#ffffff'}}>
                {item.id}</Text>

                {(() => {
                  if(item.product)
                  {
                    return (
                      <View style={{borderRadius: 0,
                        borderWidth: 2,
                        borderColor: '#ff0000', width:Dimensions.get('window').width/3-3,
                        height:Dimensions.get('window').width/3-3,
                        position: 'absolute', margin:1.5}}/>
                    )
                  }
                })()}
              </View>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex : 1,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cover: {
    width: Dimensions.get('window').width/3-3,
    marginTop : 1.5,
    marginLeft : 1.5,
    marginBottom : 1.5,
    marginRight : 1.5,
    height: Dimensions.get('window').width /3-3,
  },
});


export default ProductList;
