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

  //user(고객 or 셀러)를 upsert하고 정보를 가져온다.
  //static upsertAndGetUser(){}

  //shop을 upsert하고 정보를 가져온다.
  //static upsertAndGetShop(user){}

  //shop의 입금 계좌번호를 입력한다.
  static updateShopBankAcountInfo(){}
  //shop의 인삿말을 입력한다.
  static updateShopHelloInfo(){}

  //shop에 product를 upsert한다.
  static upsertProductToShop(){}
  //shop에 product를 제거 한다.
  static removeProductFromShop(){}
  //상품 목록을 가져온다.
  static selectProductFromShop(){}
  //상품과 상품 후보 목록을 가져온다.
  static selectProductCandidateFromShop(){}
  //샵의 구매 목록을 가져온다.
  static selectOrderListFromShop(seller){}
  //구매 상세를 가져온다.
  static selectOrderDetail(orderid){}
  //구매를 상태를 바꾼다.
  static changeOrderStateFromShop(){}
  //셀러의 매출 목록을 가져온다.
  static selectProfitFromShop(seller){}

  //상품 문의 채팅방을 만든다.
  static upsertChat(){}
  //채팅 목록을 본다
  static selectChatList(){}
  //채팅 대화 목록을 본다
  static selectMessageList(){}
  //채팅을 날린다.
  static sendMessage(){}

  //유저의 배송지 정보를 입력한다.
  static addDelivery(){}
  //유저의 배송지 정보를 불러온다.
  static selectDeliveryListFromUser(){}
  //사용자의 최근 본 상품 목록을 가져온다.
  static selectRecentProductList(seller, shop){}
  //사용자의 최근 본 상품을 추가한다
  static addRecentProduct(seller){}
  //구매를 업서트 한다.
  static upsertOrderFromShop(){}
  //사용자의 구매 목록을 가져온다.
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

  static say()
  {
    const db = firebase.database();
    // const dbRef = db.ref().child('seller').child('muyoungko217').child('userName');
    //
    // db.ref('/seller/muyoungko217/userName').once('value').then(function(snapshot) {
    //   //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   //alert(snapshot.val());
    // });
  }

  static init(client_id, secret, code)
  {
    this.client_id = client_id;
    this.secret = secret;
    this.code = code;
  }
};
