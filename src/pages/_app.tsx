import { AppProps } from 'next/app';
import '../globalStyles/normalize.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
