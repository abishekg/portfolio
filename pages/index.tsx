import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Introduction from '../components/Introduction';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Abeeshook</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href={'/bee.png'} />
      </Head>
      <div className="flex min-h-screen w-[48rem] overflow-auto">
        <Introduction />
      </div>
      <Footer />
    </>
  );
};

export default Home;
