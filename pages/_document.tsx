import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

import Header from '../components/Header';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="flex justify-center bg-white w-[48rem] dark:bg-[#444444]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
