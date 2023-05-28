import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer')}>
      <h1>footer</h1>
    </footer>
  );
}

export default Footer;
