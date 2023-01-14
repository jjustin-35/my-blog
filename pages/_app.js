import { Provider } from 'react-redux';

import GlobalStyle from './_globalStyle';
import store from '../redux/store';

export default function App({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <GlobalStyle />
    <Component {...pageProps} />
  </Provider>
  )
}
