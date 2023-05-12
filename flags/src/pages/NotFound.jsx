import { Helmet } from 'react-helmet';

const title = '404 Not Found';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>OOPS...</h1>
      <p>
        It seems this page does not exist or was removed. Please try somthing
        else...
      </p>
    </>
  );
};

export default NotFound;
