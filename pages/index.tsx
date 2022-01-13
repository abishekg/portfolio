import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen justify-center items-center">
        <Head>
          <title>Abeeshook</title>
          <meta name="description" content="Portfolio" />
          <link rel="icon" href={'/bee.png'} />
        </Head>

        <div>
          <div>Hi</div>
        </div>
      </div>
    </>
  );
};

export default Home;
