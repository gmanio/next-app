import React, { Component, useState, useContext } from 'react';
import { CounterConsumer } from '../components/CounterProvider';

export default () => {
    // const [value, setValue] = useState(0);

    return (
        <>
            <CounterConsumer>
                {
                    ({count, increase, decrease}) => (
                        <>
                            <div>{count}</div>
                            <button onClick={increase}>increase</button>
                            <button onClick={decrease}>decrease</button>
                        </>
                    )
                }
            </CounterConsumer>
        </>
    )
}