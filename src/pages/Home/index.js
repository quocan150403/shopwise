import ProductList from 'components/ProductList';
import './Home.scss';
import images from 'assets/images';

function Home() {
  return (
    <>
      {/* // <!-- Slider --> */}
      <section class="slider">
        <div class="slider-arrow-prev arrow prev">
          <i class="bi bi-arrow-left"></i>
        </div>
        <div class="slider-arrow-next arrow next">
          <i class="bi bi-arrow-right"></i>
        </div>

        <div class="slider-container active">
          <img className="slider-img" src={images.banners.banner1} alt="" />
          <div class="slider-content">
            <div class="grid wide">
              <div class="row pd">
                <div class="col l-8 l-o-2 m-10 m-o-1 center">
                  <h2 class="slider-heading">Unique Furniture Style</h2>
                  <p class="slider-subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id
                    varius nunc id varius nunc.
                  </p>
                  <div class="btn">
                    <span>Shop Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slider-container">
          <img className="slider-img" src={images.banners.banner1} alt="" />

          <div class="slider-content">
            <div class="grid wide">
              <div class="row pd">
                <div class="col l-8 l-o-2 m-10 m-o-1 center">
                  <h5 class="slider-sale">Get up to 50% off Today Only!</h5>
                  <h2 class="slider-heading">Quality Furniture</h2>
                  <p class="slider-subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id
                    varius nunc id varius nun
                  </p>
                  <div class="btn">
                    <span>Shop Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slider-container">
          <img className="slider-img" src={images.banners.banner1} alt="" />
          <div class="slider-content">
            <div class="grid wide">
              <div class="row pd">
                <div class="col l-8 l-o-2 m-10 m-o-1 center">
                  <h5 class="slider-sale">Taking your Viewing Experience to Next Level</h5>
                  <h2 class="slider-heading">Living Room Collection</h2>
                  <p class="slider-subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id
                    varius nunc id varius nunc.
                  </p>
                  <div class="btn">
                    <span>Shop Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // <!-- Categories --> */}
      <section class="categories">
        <div class="grid wide">
          <div class="row pd">
            <div class="col l-12 m-12 c-12">
              <div class="categories-content">
                <div class="row lg-gutter">
                  <div class="col l-3 m-4">
                    <div class="categories-content__text">
                      <h4>Top Categories</h4>
                      <p>There are many variations of passages of Lorem</p>
                      <div class="categories-btn">
                        <a href="/" class="btn btn2">
                          View All
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col l-9 m-8">
                    <div class="row">
                      <div class="col l-3">
                        <div class="categories-wrap">
                          <a href="/">
                            <img src={images.icons.armchair} alt="" />
                            <span>ten </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // <!-- Products --> */}
      <section class="products margin-top">
        <div class="grid wide">
          <div class="row pd">
            <div class="col l-6 l-o-3 m-10 m-o-1 c-12">
              <h2 class="products-heading center">Sản phẩm nổi bật</h2>
              <p class="products-description center">
                Đây là những sản phẩm được nhiều người mua nhất trong tháng qua của chúng tôi
              </p>
            </div>
          </div>
          <ProductList />
        </div>
      </section>

      {/* // <!-- Banner --> */}
      <section class="banner">
        <div class="grid wide">
          <div class="row pd lg-gutter">
            <div class="col l-6 m-8 c-12">
              <div class="banner-content">
                <h3 class="banner-title">Ưu đãi đặc biệt</h3>
                <h2 class="banner-heading">Giảm giá 50%</h2>
                <div class="row">
                  <div class="col l-3 m-3 c-3">
                    <div class="banner-countdown">
                      <span class="banner-countdown-days">4</span>
                      <span class="banner-countdown-text">Ngày</span>
                    </div>
                  </div>
                  <div class="col l-3 m-3 c-3">
                    <div class="banner-countdown">
                      <span class="banner-countdown-days">5</span>
                      <span class="banner-countdown-text">Giờ</span>
                    </div>
                  </div>
                  <div class="col l-3 m-3 c-3">
                    <div class="banner-countdown">
                      <span class="banner-countdown-days">5</span>
                      <span class="banner-countdown-text">Phút</span>
                    </div>
                  </div>
                  <div class="col l-3 m-3 c-3">
                    <div class="banner-countdown">
                      <span class="banner-countdown-days">34</span>
                      <span class="banner-countdown-text">Giây</span>
                    </div>
                  </div>
                </div>
                <div class="banner-btn">
                  <a href="/" class="btn red">
                    Mua ngay
                  </a>
                </div>
                <div class="banner-form">
                  <form action="">
                    <div class="banner-form-group">
                      <input class="banner-form-input" placeholder="Nhâp email của bạn" type="text" />
                      <button class="btn red">Đăng ký</button>
                    </div>
                    <small>Đăng ký để nhận thông tin khuyến mãi mới nhất từ chúng tôi</small>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // <!-- Special product --> */}
      <section class="products margin-top">
        <div class="grid wide">
          <div class="row">
            <div class="col l-6 l-o-3 m-10 m-o-1 c-12">
              <h2 class="products-heading center">Special Offers</h2>
              <ul class="tab-list">
                <li class="tab-item active">Bán chạy</li>
                <li class="tab-item">Mới nhất</li>
                <li class="tab-item">Yêu thích</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <div class="blogs">
        <div class="grid wide">
          <div class="row pd">
            <div class="col l-6 l-o-3 m-10 m-o-1 c-12">
              <h2 class="products-heading center">Latest News</h2>
              <p class="products-description center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim Nullam nunc
                varius.
              </p>
            </div>
          </div>

          <div class="row pd lg-gutter">
            <div class="col l-4 m-6 c-12">
              <div class="blog">
                <div class="blog-img-wrap">
                  <img src="/assets/images/banners/blog1.jpg" alt="" class="blog-img" />
                </div>
                <div class="blog-content">
                  <h5 class="blog-titel">
                    <a href="/">But I must explain to you how all this mistaken idea</a>
                  </h5>

                  <ul class="blog-list">
                    <li class="blog-item">
                      <i class="bi bi-calendar-check"></i>
                      April 14, 2018
                    </li>
                    <li class="blog-item">
                      <i class="bi bi-chat-right-text"></i>2 Comment
                    </li>
                  </ul>
                  <p class="blog-description">
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything hidden in
                    the text
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
