// when we check the source code, tou doctype, head sb huta ha
// if we want to modify that we use this _document.tsx file

// if you want to add meta tags wrna minimal use rkho

// JS Code in this executed on server side only

import Document, { Html, Head, Main, NextScript } from 'next/document';

// using Document here in class comp instead of functional, because it implements certain functionality which are imp for nextjs

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property='custom' content='okayy' />
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}
