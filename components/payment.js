import React, { Component } from 'react';
import Iamport from 'iamport';

const IMP_UID = 'imp99591491';
const REST_API = '3769525998731891';
const SECRET = 'pPiG5P7oyIl5WW2SPOd0Cb8x9Gsk7pvxfNdkDkIb34hZ1jSR75RKh0iqGKKOaglp4zJHTsTXxaXytPpB';

const iamport = new Iamport({
  impKey: REST_API,
  impSecret: SECRET
});

class Payment extends Component {
  constructor() {
    super();
    iamport.payment.getByImpUid({
      imp_uid: IMP_UID
    }).then(function(result){
      // To do
      debugger;
    }).catch(function(error){
      // handle error
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>Payment</div>
    )
  }
}

export default Payment;