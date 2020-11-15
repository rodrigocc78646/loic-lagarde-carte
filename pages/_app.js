import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Loic Carte</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Exemple de carte mondiale" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
