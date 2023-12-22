import { Link } from 'react-router-dom';

function NotFoundPage(){
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">Error 404</h1>
      <p className="not-found-text">Sorry - Page Not Found!</p>
      <Link to="/" className="link-home">Back to the home</Link>
    </div>
  );
};

export default NotFoundPage;