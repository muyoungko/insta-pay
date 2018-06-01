import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/messaging'

import InstaApi from '../instaapi/InstaApi.js';

/*
  파이어베이스 데이터 구조

  product entity
    - id : 인스타 미디어 아이디
    -

  order entity
    -

  chat entity
    -

  user entity
    -
    -

  users > user > chatid


  shops > userids > products > productid

  shops > userids > orders > order

  products > product

  chats > chatid > chat

  messages > chat > message

*/

export default class Logic{
  constructor()
  {

  }

  //static upsertAndGetUser(){}
  //static upsertAndGetShop(user){}
  static updateShopBankAcountInfo(){}
  static updateShopHelloInfo(){}


  static upsertProductToShop(){}
  static removeProductFromShop(){}
  //static selectProductFromShop(){}
  //static selectProductCandidateFromShop(){}
  static selectOrderListFromShop(seller){}
  static selectOrderDetail(orderid){}
  static changeOrderStateFromShop(){}
  static selectProfitFromShop(seller){}

  static upsertChat(){}
  static selectChatList(){}
  static selectMessageList(){}
  static sendMessage(){}
  static addDelivery(){}
  static selectDeliveryListFromUser(){}
  static selectRecentProductList(seller, shop){}
  static addRecentProduct(seller){}
  static upsertOrderFromShop(){}
  static selectOrderListFromUser(seller){}


  static upsertAndGetUser(func){
      InstaApi.self(function(json, error){

        if(error != null)
        {
          func(null, error);
          return;
        }

        const db = firebase.database();
        db.ref('users/'+json.data.id).update(
          {
            id : json.data.id,
            full_name : json.data.full_name,
            profile_picture : json.data.profile_picture,
            username : json.data.username
          }
        );

        db.ref('users/'+json.data.id).once('value').then(function(snapshot) {
          func(snapshot.val());
        });

      });
  }
  static upsertAndGetShop(user, func){

    const db = firebase.database();
    db.ref('shops/'+user.username).update(
      {
        id : user.username,
        full_name : user.full_name,
        profile_picture : user.profile_picture,
        username : user.username
      }
    );

    db.ref('shops/'+user.username).once('value').then(function(snapshot) {
      func(snapshot.val());
    });
  }

  static selectProductFromShop(shopName, func){
    const db = firebase.database();
    db.ref('shops/'+shopName).once('value').then(function(snapshot) {
      func(snapshot.val());
    });
  }

  static selectProductCandidateFromShop(shop, funca){
    const db = firebase.database();
    console.log('called ' + shop);
    db.ref('shops/'+shop+'/products').once('value').then(function(snapshot) {
      InstaApi.recent(function(recents, e){
        var products = snapshot.val();

        // var recents = recents.data;
        // for(var i=0;i<recents.length;i++)
        // {
        //
        // }

        funca(recents.data, e);
      });
    });
  }

  static say()
  {
    // const db = firebase.database();
    // const dbRef = db.ref().child('seller').child('muyoungko217').child('userName');
    //
    // db.ref('/seller/muyoungko217/userName').once('value').then(function(snapshot) {
    //   //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   alert(snapshot.val());
    // });
  }

  static init(client_id, secret, code)
  {
    this.client_id = client_id;
    this.secret = secret;
    this.code = code;
  }
};
