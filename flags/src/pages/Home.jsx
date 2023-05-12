import Helmet from 'react-helmet';
import Countries from '../components/Countries';
import Navigation from '../components/Navigation';
import Logo from '../components/logo';

const pageTitle = 'Accueil';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div>
        <Logo />
        <Navigation />
        <Countries />
      </div>
    </>
  );
};

export default Home;
