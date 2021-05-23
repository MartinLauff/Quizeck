import Link from 'next/link';
import Footer from '../components/Footer';
import indexStyles from '../styles/Index.module.css';

const LandingPage = () => {
  return (
    <div>
      <header>
        <div className={indexStyles.divBG}>
          <h1>QUIZECK</h1>
          <p className={indexStyles.intro}>
            Test your knowledge about geography which consists of topics like
            capital cities, physical landmarks and country location. Good luck
            and have fun!
          </p>
        </div>
        <Link href='/quiz'>
          <a className={indexStyles.introLink}>Start the quiz</a>
        </Link>
      </header>
      <Footer />
    </div>
  );
};

export default LandingPage;
