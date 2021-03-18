/* eslint-disable react/jsx-props-no-spreading */
import '../styles/global-styles.css';
import type { AppProps } from 'next/app';

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default CustomApp;
