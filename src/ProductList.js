import React from 'react';
import { View, Text, Button, WebView, ScrollView, Image, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';
import InstaApi from './instaapi/InstaApi.js';
const GLOBAL = require('./Global.js');

const COVERS = [
  require('../assets/album-art-1.jpg'),
  require('../assets/album-art-2.jpg'),
  require('../assets/album-art-3.jpg'),
  require('../assets/album-art-4.jpg'),
  require('../assets/album-art-5.jpg'),
  require('../assets/album-art-6.jpg'),
  require('../assets/album-art-7.jpg'),
  require('../assets/album-art-8.jpg'),
];

class ProductList extends React.Component<{}> {
  constructor()
  {
    super();
  }

  componentDidMount()
  {

  }

  static navigationOptions = {
    title: '상품을 선택해주세요',
  };

  static navigationOptions = {
    tabBarLabel: '상품'
  };

  onClickItem(key)
  {
    console.log('click ' + key);
  }

  render() {

    return (
      <View style={{backgroundColor: '#ffffff', flex:1}}>

        <View style={{marginTop: 20, height:54, flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
          <Text style={{fontSize:20}}> 인스타 사진 중에서 상품을 선택해주세요 </Text>
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          {COVERS.map((source, i) => (
            <TouchableHighlight key={i} onPress={(key) => this.onClickItem(key)}>
              <View style={{flex: 1}}>
                <Image key={i} source={source} style={styles.cover} onPress={this.onClickItem} />
                <View style={{flex: 1, position: 'absolute'}}>
                  <Text style={{backgroundColor: '#00000044', fontSize:15, color:'#ffffff'}}> 21000 </Text>
                </View>
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
    backgroundColor: '#ffffff'
    ,flex : 1
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
