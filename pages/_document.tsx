import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

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
        <body className="flex justify-center bg-white dark:bg-[#444444]">
          <div className="w-[48rem] bg-gray-100 dark:bg-[#4444FF]">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
