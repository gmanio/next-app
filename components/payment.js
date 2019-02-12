import React, { Component } from 'react';
import { Iamporter, IamporterError } from 'iamporter';

const IMP_UID = 'imp99591491';
const REST_API = '3769525998731891';
const SECRET = 'pPiG5P7oyIl5WW2SPOd0Cb8x9Gsk7pvxfNdkDkIb34hZ1jSR75RKh0iqGKKOaglp4zJHTsTXxaXytPpB';

const iamport = new Iamporter({
  apiKey: REST_API,
  secret: SECRET
});

class Payment extends Component {
  constructor() {
    super();
    iamport.getToken()
      .then((res) => {
        debugger;
        console.log(res);
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