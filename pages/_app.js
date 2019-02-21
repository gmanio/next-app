import App, { Container } from 'next/app';
import CounterProvider from '../components/CounterProvider';

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <CounterProvider>
          <Component {...pageProps} />
        </CounterProvider>
      </Container>
    )
  }
}

export default MyApp