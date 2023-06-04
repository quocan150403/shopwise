import images from 'assets/images';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="grid wide">
        <div className="header-container">
          {/* <!-- logo --> */}
          <div className="header-logo">
            <a className="header-logo__link" href="/">
              <img className="header-logo__img--light" src={images.logo} alt="" />
              <img className="header-logo__img--dark" src={images.logo_dark} alt="" />
            </a>
          </div>

          {/* <!-- nav --> */}
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <a href="/" className="header-nav__link">
                  HOME
                </a>
              </li>
              <li className="header-nav__item header-nav__category">
                <a href="/shop" className="header-nav__link">
                  Shop
                </a>
              </li>
              <li className="header-nav__item">
                <a href="/blog" className="header-nav__link">
                  BLOG
                </a>
              </li>
              <li className="header-nav__item">
                <a href="/about" className="header-nav__link">
                  ABOUT
                </a>
              </li>
              <li className="header-nav__item">
                <a href="/contact" className="header-nav__link">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          {/* <!-- other --> */}
          <div className="header-other">
            {/* <!-- Search --> */}
            <div className="header-other__link header-other__search-js">
              <i className="bi bi-search"></i>

              <div className="header-other__search">
                <span className="header-other__close lnr lnr-cross"></span>
                <form className="header-search__form" method="POST" action="Search">
                  <input require type="text" name="keyword" placeholder="Search" className="header-search__input" />
                  <button className="header-search__btn" type="submit">
                    <span className="lnr lnr-magnifier"></span>
                  </button>
                </form>
              </div>
              <div className="header-other__search-overlay"></div>
            </div>

            {/* <!-- Cart --> */}
            <div href="cart" className="header-other__link header-other-cart">
              <i className="bi bi-cart"></i>
              <div className="header-other__cart-amount">4</div>

              <div className="header-other__cart-box">
                <div className="header-other__cart--empty">
                  <img src="/assets/images/cart-empty.jpg" alt="" />
                  <h4 className="header-other__cart--empty-title">Không có sản phẩm nào trong giỏ</h4>
                  <a href="shop" className="btn btn2">
                    Tiếp tục mua sắm
                  </a>
                </div>
                <div className="header-other__cart-inner">
                  <ul>
                    <li>
                      <img src="" alt="" />
                      <div className="header-other__cart-info">
                        <h3>name</h3>
                        <h4>
                          4 x<span>4</span>
                        </h4>
                      </div>
                      <div className="header-other__cart-remove">
                        <i className="bi bi-x"></i>
                      </div>
                    </li>
                  </ul>
                  <div className="header-other__cart-wrapper">
                    <div className="header-other__cart-total">
                      <h4>Tổng tiền:</h4>
                      <h3>454</h3>
                    </div>
                    <div className="header-other__cart-btn">
                      <a href="cart" className="btn btn2">
                        Xem giỏ hàng
                      </a>
                      <a href="checkout" className="btn red">
                        Thanh toán
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- User --> */}
            <div className="header-other__link header-user">
              <i className="bi bi-person-circle"></i>
              <ul className="header-other__user">
                <li>
                  <img className="header-user__img" src="/assets/images/user-men.jpg" alt="" />
                  <div className="header-user__content">
                    <h4 className="header-user__name">quocan</h4>
                    <h5 className="header-user__email">quocan@gmail.com</h5>
                  </div>
                </li>
                <hr />
                <li>
                  <a href="account">Change password</a>
                </li>
                <li>
                  <a href="account/Logout">Log out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
