

export default class InstaApi{
  constructor()
  {

  }
  static say()
  {
    console.log("say - " + this.code);
  }
  static client_id;
  static secret;
  static code;
  static init(client_id, secret, code)
  {
    this.client_id = client_id;
    this.secret = secret;
    this.code = code;
  }
};
