// JS Code in this executed on server as well as client side
// use this global stylesheet all over the place
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
