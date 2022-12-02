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
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta name="description" content="Focus with Nemo!" />
        <meta name="image" content="https://iili.io/HfzCEbe.png" />
        <meta itemProp="name" content="Nemo" />
        <meta
          itemProp="description"
          content="Nemo is your little helper and companion no matter if you need to focus, tune out other noises or if you want to have a moment of calm and relaxation."
        />
        <meta itemProp="image" content="https://iili.io/HfzCEbe.png" />

        <meta
          name="keywords"
          content="Productivity, focus, background noise, lofi, habit"
        />
        <meta name="author" content="Harshit Singhai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://nemo-landing-page.netlify.app/"
        />
        <meta name="twitter:title" content="Be Productive with Nemo." />
        <meta
          name="twitter:description"
          content="Nemo is your little helper and companion no matter if you need to focus, tune out other noises or if you want to have a moment of calm and relaxation."
        />
        <meta name="twitter:site" content="@harshit_778" />
        <meta name="twitter:creator" content="@harshit_778" />
        <meta name="twitter:image" content="https://iili.io/HfzCEbe.png" />
        <meta name="twitter:image:src" content="https://iili.io/HfzCEbe.png" />
        <meta name="og:title" content="Be productive with Nemo" />
        <meta
          name="og:description"
          content="Nemo is your little helper and companion no matter if you need to focus, tune out other noises or if you want to have a moment of calm and relaxation."
        />
        <meta name="og:image" content="https://iili.io/HfzCEbe.png" />
        <meta name="og:url" content="https://nemo-landing-page.netlify.app/" />
        <meta name="og:site_name" content="Be productive with Nemo" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <meta property="og:title" content="Be productive with Nemo" />
        <meta
          property="og:description"
          content="We provide background sounds that help to mask annoying noises in order to keep you sane, improve your focus and boost your productivity."
        />
        <meta property="og:image" content="https://iili.io/HfzCEbe.png" />
        <meta
          property="og:url"
          content="https://nemo-landing-page.netlify.app/"
        />
        <meta
          property="og:site_name"
          content="Nemo is your digital place for focus."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
