import Head from 'next/head';
import { BtnProvider } from '../context/BtnContext';
import '../styles/global.css';

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Quizeck</title>
        <meta charSet='UTF-8' />
        <meta
          name='keywords'
          content='geography quiz, capital city, demographics, country location'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Gain new knowledge about geography in this entertaining quiz where you learn about capital cities, physical landmarks,country location and physical
          features of the world'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/world.png' />
      </Head>
      <BtnProvider>
        <Component {...pageProps} />
      </BtnProvider>
    </div>
  );
};

export default AppComponent;
