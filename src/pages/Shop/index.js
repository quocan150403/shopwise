import './Shop.scss';
import ProductList from 'components/ProductList';
import CommonSection from 'components/CommonSection';
import Helmet from 'components/Helmet';

function Shop() {
  return (
    <Helmet title="Shop">
      <section className="shop padding-header">
        <CommonSection title="Shop" />
        <div className="grid wide">
          <div className="row pd lg-gutter">
            {/* <!-- Categories --> */}
            <div className="col l-3 m-12 c-12">
              <div className="shop-filter">
                <div className="shop-filter__container">
                  <div className="shop-filter__box">
                    <div className="shop-filter__subbox">
                      <h2 className="shop-filter__heading">Danh mục sản phẩm</h2>
                      <span className="shop-filter__close hide-on-pc">
                        <i className="bi bi-x-lg"></i>
                      </span>
                    </div>
                    <ul className="shop-filter__list">
                      <li className="shop-filter__item">
                        <a className="shop-filter__item-name" href="/">
                          Bàn
                        </a>
                        <span className="shop-filter__item-amount">(5)</span>
                      </li>
                      <li className="shop-filter__item">
                        <a className="shop-filter__item-name" href="/">
                          Ghế
                        </a>
                        <span className="shop-filter__item-amount">(5)</span>
                      </li>
                      <li className="shop-filter__item">
                        <a className="shop-filter__item-name" href="/">
                          category name
                        </a>
                        <span className="shop-filter__item-amount">(5)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="shop-filter__box">
                    <h2 className="shop-filter__heading">Giá</h2>
                    <ul className="shop-filter__list">
                      <li className="shop-filter__item">
                        <div className="shop-filter__item-name">
                          <input id="1" className="shop-filter__item-input" type="checkbox" />
                          <label htmlFor="1">0 - 100.000 đ</label>
                        </div>
                      </li>
                      <li className="shop-filter__item">
                        <div className="shop-filter__item-name">
                          <input id="2" className="shop-filter__item-input" type="checkbox" />
                          <label htmlFor="2">100.000 - 200.000 đ</label>
                        </div>
                      </li>
                      <li className="shop-filter__item">
                        <div className="shop-filter__item-name">
                          <input id="3" className="shop-filter__item-input" type="checkbox" />
                          <label htmlFor="3">200.000 - 300.000 đ</label>
                        </div>
                      </li>
                      <li className="shop-filter__item">
                        <div className="shop-filter__item-name">
                          <input id="4" className="shop-filter__item-input" type="checkbox" />
                          <label htmlFor="4"> > 300.000 đ</label>
                        </div>
                      </li>
                      <li className="shop-filter__item">
                        <div className="shop-filter__item-name">
                          <input id="5" className="shop-filter__item-input" type="checkbox" />
                          <label htmlFor="5"> > 500.000 đ</label>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="shop-filter__box">
                    <h2 className="shop-filter__heading">Brand</h2>
                    <ul className="shop-filter__list">
                      <li className="shop-filter__item">
                        <div className="shop-filter__item-name">
                          <input id="1" className="shop-filter__item-input" type="checkbox" />
                          <label htmlFor="1">New Arrivals</label>
                        </div>
                      </li>
                      <li className="shop-filter__item">
                        <div className="shop-filter__item-name">
                          <input id="2" className="shop-filter__item-input" type="checkbox" />
                          <label htmlFor="2">Lighting</label>
                        </div>
                      </li>
                      <li className="shop-filter__item">
                        <div className="shop-filter__item-name">
                          <input id="3" className="shop-filter__item-input" type="checkbox" />
                          <label htmlFor="3">Tablet</label>
                        </div>
                      </li>
                      <li className="shop-filter__item">
                        <div className="shop-filter__item-name">
                          <input id="4" className="shop-filter__item-input" type="checkbox" />
                          <label htmlFor="4">Chairs</label>
                        </div>
                      </li>
                      <li className="shop-filter__item">
                        <div className="shop-filter__item-name">
                          <input id="5" className="shop-filter__item-input" type="checkbox" />
                          <label htmlFor="5">Accessories</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="shop-filter-overlay hide-on-pc"></div>
            </div>

            <div className="col l-9 m-12 c-12">
              <div className="shop-container">
                {/* <!-- Directional --> */}
                <div className="shop-container__directional">
                  <div className="shop-directional__sorting">
                    <select>
                      <option>Default sorting</option>
                      <option>Default sorting</option>
                      <option>Default sorting</option>
                    </select>
                  </div>

                  <div className="shop-directional">
                    <div className="shop-directional__box active">
                      <i className="bi bi-grid-3x3-gap"></i>
                    </div>
                    <div className="shop-directional__box">
                      <i className="bi bi-list-task"></i>
                    </div>
                    <div className="hide-on-mobile shop-directional__sorting shop-directional__showing">
                      <select>
                        <option>Showing</option>
                        <option>Showing</option>
                        <option>Showing</option>
                      </select>
                    </div>
                    <div className="shop-directional__box shop-directional__box-filter hide-on-pc">
                      <i className="bi bi-funnel"></i>
                    </div>
                  </div>
                </div>

                {/* <!-- Products --> */}
                <div className="shop-container__products">
                  <ProductList />
                </div>

                {/* <!-- Index --> */}
                <ul className="shop-container__index">
                  <li className="shop-container__index-item">
                    <a href="ASM/Products/page/' . ($current_page - 1) . '" className="shop-container__index-link">
                      <i className="fa-solid fa-angle-left"></i>
                    </a>
                  </li>
                  <li className="shop-container__index-item active">
                    <span>1</span>
                  </li>
                  <li className="shop-container__index-item">
                    <a href="ASM/Products/page/' . $i . '">2</a>
                  </li>
                  <li className="shop-container__index-item">
                    <a href="ASM/Products/page/' . ($current_page + 1) . '">
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

export default Shop;
