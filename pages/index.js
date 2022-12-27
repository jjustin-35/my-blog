import Banner from '../containers/banner';
import Board from '../containers/board';
import Head from '../components/head';
import data from '../constants/data/home';

const Home = () => {
  return (
    <>
      <Head />
      <Banner data={data.banner} />
      <Board />
    </>
  );
};

export default Home;
