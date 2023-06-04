import ProductList from 'components/ProductList';
import './ProductDetail.scss';
import images from 'assets/images';
import Helmet from 'components/Helmet';

function ProductDetail() {
  return (
    <Helmet title="Product Detail">
      {/* <!-- Product detail --> */}
      <section class="detail padding-header">
        <div class="grid wide">
          <div class="row pd lg-gutter">
            <div class="col l-7 m-6 c-12">
              <div class="row sm-gutter">
                <div class="col l-3 m-0 c-0">
                  <div class="detail-img__container-extra">
                    <img class="detail-img__extra" src="assets/images/products/1.webp" alt="" />
                    <img class="detail-img__extra" src="assets/images/products/1.webp" alt="" />
                    <img class="detail-img__extra" src="assets/images/products/1.webp" alt="" />
                  </div>
                </div>

                <div class="col l-9 m-12 c-12">
                  <img class="detail-img__main" src="assets/images/products/1.webp" alt="" />
                </div>
              </div>
            </div>

            <div class="col l-5 m-6 c-12">
              <h3 class="detail-name">Tên sản phẩm</h3>

              <div class="detail-star">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <div class="detail-info">
                <div class="detail-info__heading">SKU:</div>
                <div class="detail-info__subheading">37</div>
              </div>

              <div class="detail-info">
                <div class="detail-info__heading">Categories:</div>
                <div class="detail-info__subheading">Antonio, Furniture</div>
              </div>

              <div class="detail-info">
                <div class="detail-info__heading">Tags:</div>
                <div class="detail-info__subheading">TRENDY VIBE</div>
              </div>

              <div class="detail-container__price">
                <h3 class="detail-delprice">120.000.000</h3>
                <h3 class="detail-price">120.000.000</h3>
              </div>

              <div class="detail-container__quantity">
                <h3 class="detail-container__heading">Quantity</h3>
                <div class="detail-quantity">
                  <div class="detail-quantity__box">
                    <i class="bi bi-dash"></i>
                  </div>
                  <div class="detail-quantity__text">1</div>
                  <div class="detail-quantity__box">
                    <i class="bi bi-plus"></i>
                  </div>
                </div>
              </div>
              <a href="#" class="btn red btn-add-cart detail-btn">
                <i class="btn-icon bi bi-bag"></i>
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Description --> */}
      <section class="description">
        <div class="grid wide">
          <div class="row pd">
            <div class="col l-12 m-12 c-12">
              {/* <!-- Tab items --> */}
              <div class="tabs">
                <div class="tab-item">Description</div>
                <div class="tab-item">Additional Info</div>
                <div class="tab-item active">Review (4)</div>
                <div class="line"></div>
              </div>

              {/* <!-- Tab content --> */}
              <div class="tab-content">
                <div class="tab-pane">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Vivamus bibendum magna Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.Contrary to popular belief, Lorem Ipsum is not
                    simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
                    2000 years old.
                  </p>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  </p>
                </div>
                <div class="tab-pane">
                  <table>
                    <tr>
                      <td>Style</td>
                      <td>Modern</td>
                    </tr>
                    <tr>
                      <td>Brand</td>
                      <td>Ingrid Lauritz</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>2kg</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>74,4cm</td>
                    </tr>
                    <tr>
                      <td>Warranty</td>
                      <td>2 years</td>
                    </tr>
                  </table>
                </div>
                <div class="tab-pane active">
                  <h2>0 Review</h2>

                  {/* <!-- <div class="review bb">
              <img class="review-img" src="ASM/assets/img/avatar2.jpg" alt="" />
              <div class="review-info">
                <h2 class="review-info__name">Alea Brooks</h2>
                <p class="review-info__date">March 5, 2018</p>
                <p class="review-info__content">
                  Lorem Ipsumin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi
                  elit consequat ipsum, nec sagittis sem nibh id elit.
                  Duis sed odio sit amet nibh vulputate
                </p>
              </div>
              <div class="review-info__star-box">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div> --> */}
                  <div class="comment">
                    <form action="" method="POST">
                      <h2 class="comment-heading">Add a review</h2>
                      <div class="comment-rating">
                        <i data-id="1" class="rating-js fa-regular fa-star"></i>
                        <i data-id="2" class="rating-js fa-regular fa-star"></i>
                        <i data-id="3" class="rating-js fa-regular fa-star"></i>
                        <i data-id="4" class="rating-js fa-regular fa-star"></i>
                        <i data-id="5" class="rating-js fa-regular fa-star"></i>
                      </div>

                      <input type="number" hidden value="0" class="input-rating" name="rating" />

                      <textarea
                        required
                        name="content"
                        placeholder="Your review *"
                        class="comment-content"
                        rows="8"
                      ></textarea>
                      <div class="comment-group">
                        <input required name="name" placeholder="Enter Name *" class="comment-input" />
                        <input required name="email" placeholder="Enter Email *" class="comment-input" />
                      </div>

                      <button type="submit" class="btn-comment" name="review">
                        <span class="btn red">Submit Review</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Related --> */}
      <section class="topSeller">
        <div class="grid wide product__container">
          <h2 class="main-heading">Related Products</h2>

          <div class="owl-carousel owl-theme">products</div>
        </div>
      </section>
    </Helmet>
  );
}

export default ProductDetail;
