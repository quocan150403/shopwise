import './NotFound.scss';
import Helmet from 'components/Helmet';

function NotFound() {
  return (
    <Helmet title="Home">
      <div class="notpage">
        <div class="notpage__inner">
          <div class="notpage__content">404</div>
          <h5 class="notpage__title">oops! The page you requested was not found!</h5>
          <p class="notpage__text">The page you are looking for was moved, removed, renamed or might never existed.</p>
          <div class="notpage-btn">
            <a href="/" class="btn btn-primary">
              <span class="notpage__btn-text">Back to home</span>
            </a>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default NotFound;
