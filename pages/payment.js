import React, { Component } from 'react';
import Head from 'next/head'

const IMP_UID = 'imp99591491';
const REST_API = '3769525998731891';
const SECRET = 'pPiG5P7oyIl5WW2SPOd0Cb8x9Gsk7pvxfNdkDkIb34hZ1jSR75RKh0iqGKKOaglp4zJHTsTXxaXytPpB';

class Payment extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    IMP.init(IMP_UID);
  }

  onClickPayment() {
    IMP.request_pay({
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid: 'merchant_' + new Date().getTime(),
      name: '주문명:결제테스트',
      amount: 100,
      buyer_email: 'iamport@siot.do',
      buyer_name: '구매자이름',
      buyer_tel: '010-1234-5678',
      buyer_addr: '서울특별시 강남구 삼성동',
      buyer_postcode: '123-456'
    }, function (rsp) {
      if ( rsp.success ) {
        var msg = '결제가 완료되었습니다.';
        msg += '고유ID : ' + rsp.imp_uid;
        msg += '상점 거래ID : ' + rsp.merchant_uid;
        msg += '결제 금액 : ' + rsp.paid_amount;
        msg += '카드 승인번호 : ' + rsp.apply_num;
      } else {
        var msg = '결제에 실패하였습니다.';
        msg += '에러내용 : ' + rsp.error_msg;
      }

      alert(msg);
    });
  }

  render() {
    return (
      <div>
        <Head>
          <script src="/static/js/jquery/jquery.min.js" type="text/javascript"></script>
          <script src="/static/js/iamport/iamport.payment-1.1.5.js" type="text/javascript"></script>
        </Head>
        <button onClick={this.onClickPayment}>P</button>
      </div>
    )
  }
}

export default Payment;