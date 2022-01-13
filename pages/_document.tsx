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
        <body className="flex justify-center bg-gray-100 text-black dark:bg-[#444444] dark:text-white">
          <div className="w-[48rem]">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
