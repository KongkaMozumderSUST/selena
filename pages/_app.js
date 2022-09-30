import "../styles/globals.css";
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Head>
        <title>Selena</title>
        <meta name='description' content='Selena, the moon visualization app' />
        <link rel='icon' href='/logo.png' />
      </Head>{" "}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
