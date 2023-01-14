import Banner from '../containers/banner';
import Header from '../containers/header';
import Board from '../containers/board';
import Head from '../components/head';
import data from '../constants/data/home';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div style={{height: '200vh'}}>
      <Head />
      <Header />
      <Banner data={data.banner} />
      <Board />
      <Footer />
    </div>
  );
};

export default Home;
