import App, { Container } from 'next/app'
import * as React from 'react'
import withReduxStore from '../redux/lib/with-redux-store';
import { Provider } from 'react-redux'

interface InitialProps {
  reduxStore: any
}

interface Props extends InitialProps {}

class MyApp extends App<Props> {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)