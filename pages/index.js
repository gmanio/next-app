import React, { Component } from 'react';
import { Iamporter, IamporterError } from 'iamporter';
import Payment from "../components/payment";

const IMP_UID = 'imp99591491';
const REST_API = '3769525998731891';
const SECRET = 'pPiG5P7oyIl5WW2SPOd0Cb8x9Gsk7pvxfNdkDkIb34hZ1jSR75RKh0iqGKKOaglp4zJHTsTXxaXytPpB';

const iamport = new Iamporter({
  apiKey: REST_API,
  secret: SECRET
});

export default class Index extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <>
        <style jsx global>
          {`
      body {
        padding:0;
        margin:0;
        text-shadow: 0 0 0.1px rgba(0, 0, 0, 0.3);
        -webkit-text-size-adjust: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        text-rendering: optimizelegibility;
      }`}
        </style>
        <Payment/>
      </>
    )
  }
}