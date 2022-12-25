import Banner from '../containers/banner';
import Board from '../components/board';
import Head from 'next/head';

const index = () => {
  return (
    <div style={{height: '200vh'}}>
    <Head>
      <title>時雨的程設隨筆｜Home</title>
    </Head>
      <Banner />
      <Board />
    </div>
  );
};

export default index;
