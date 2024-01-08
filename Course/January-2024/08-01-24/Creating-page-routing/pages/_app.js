import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
