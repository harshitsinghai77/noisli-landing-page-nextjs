import Head from "next/head";

import { getSiteMetaData } from "../utils/helpers";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  const siteMetadata = getSiteMetaData();
  return (
    <>
      <Head>
        <title>
          {siteMetadata.title} - {siteMetadata.description}
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
