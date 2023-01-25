import Head from '../../components/head';
import Header from '../../containers/header';
import TextEditor from '../../containers/textEditor';
import Footer from '../../components/footer';

const Editor = () => (
  <>
    <Head />
    <Header variant="edit" />
    <TextEditor />
    <Footer />
  </>
);

export default Editor;
