import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <h1>Header</h1>
    </header>
  );
}

export default Header;
