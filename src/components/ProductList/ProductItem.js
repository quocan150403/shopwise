import './Product.scss';
import images from 'assets/images';
function ProductItem({ item, addToCart }) {
  return (
    <div className="col col-3">
      <div className="product">
        <div className="product-img-wrap">
          <img className="product-img" src={images.product} alt="" />
          <ul className="product-action">
            <li>
              <a href="/" className="product-action-link">
                <i className="bi bi-shuffle"></i>
              </a>
            </li>
            <li>
              <a href="/" className="product-action-link">
                <i className="bi bi-search"></i>
              </a>
            </li>
            <li>
              <a href="/" className="product-action-link">
                <i className="bi bi-heart"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="product-info">
          <a href="/" className="product-name">
            ten san pham
          </a>
          <div className="product-price-wrap">
            <span className="product-price">
              <span className="product-price-text"> 345435</span>
            </span>
            <del>34545</del>
          </div>
          <div className="product-rating-wrap">
            <div className="product-rating">
              <i className="product-rating-star bi bi-star-fill"></i>
              <i className="product-rating-star bi bi-star-fill"></i>
              <i className="product-rating-star bi bi-star-fill"></i>
            </div>
            <span className="product-rating-num"> (434)</span>
          </div>
        </div>
        <div className="product-add-to-cart">
          <div className="product-add-to-cart-overlay"></div>
          <div onClick={() => addToCart()} className="btn red btn-add-cart">
            <i className="btn-icon bi bi-bag-check"></i>
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
