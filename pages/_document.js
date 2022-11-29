import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "../utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();
    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <link rel="shortcut icon" href="/images/nemo.ico" />
          <meta name="description" content="Focus with Nemo!" />
          <meta
            name="keywords"
            content="Productivity, focus, background noise, lofi, habit"
          />
          <meta name="author" content="Harshit Singhai" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Nemo is your little helper and companion no matter if you need to focus, tune out other noises or if you want to have a moment of calm and relaxation."
          />
          <meta name="twitter:title" content="Be Productive with Nemo." />
          <meta name="twitter:site" content="@harshit_778" />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/FYMYztw/Screenshot-from-2022-11-29-13-04-55.png"
          />
          <meta name="twitter:creator" content="@harshit_778" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
