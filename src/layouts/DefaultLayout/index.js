import classNames from 'classnames/bind';

import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('default-layout')}>
      <Header />
      <main className={cx('main')}>{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
