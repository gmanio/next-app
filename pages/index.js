import React, { Component, useState } from 'react';
import Link from 'next/link';
import css from 'styled-jsx/css';
import { CounterConsumer } from '../components/CounterProvider';

export const body = css.global`
body {
  padding:0;
  margin:0;
  text-shadow: 0 0 0.1px rgba(0, 0, 0, 0.3);
  -webkit-text-size-adjust: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
}
`;

export default class Index extends Component {
  render() {
    return (
      <CounterConsumer>
        {({ count }) => (
          <>
            <p>
              <Link href='/second'>
                <a>second</a>
              </Link></p>
            <div>{count}</div>
          </>
        )}
      </CounterConsumer>
    )
  }
}