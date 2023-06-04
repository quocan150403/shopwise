import images from 'assets/images';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12">
            <div className="footer-s1 border-bot">
              <div className="row">
                <div className="col l-5 m-6">
                  <div className="footer-heading-s1">Subscribe Our Newsletter</div>
                  <p className="footer-description">
                    Contrary to popular belief of lorem Ipsm Latin amet ltin from industry. Phasellus blandit massa enim
                    varius nunc.
                  </p>
                </div>
                <div className="col l-6 l-o-1 m-6">
                  <form action="" className="footer-form">
                    <div className="footer-form-group">
                      <input type="text" required placeholder="Enter Email Address" />
                      <button className="footer-form-submit" type="submit">
                        <i className="bi bi-envelope-paper"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-s2 border-bot">
          <div className="row lg-gutter">
            <div className="col l-4 m-12">
              <div className="footer-s2-widget">
                <div className="footer-s2-logo">
                  <a href="#">
                    <img src={images.logo} alt="" />
                  </a>
                </div>
                <p className="footer-description">
                  If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text
                </p>
                <ul className="footer-s2-social">
                  <li>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col l-8 m-12">
              <div className="row lg-gutter">
                <div className="col l-4 m-4">
                  <h6 className="footer-s2-heading">Quick Links</h6>
                  <ul className="footer-s2-list">
                    <li>
                      <a className="footer-description" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Affiliates
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col l-4 m-4">
                  <h6 className="footer-s2-heading">Information</h6>
                  <ul className="footer-s2-list">
                    <li>
                      <a className="footer-description" href="#">
                        Term Of Service
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Return policy
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Your Account
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Suppliers
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col l-4 m-4">
                  <h6 className="footer-s2-heading">My Account</h6>
                  <ul className="footer-s2-list">
                    <li>
                      <a className="footer-description" href="#">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Discount
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Returns
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Orders History
                      </a>
                    </li>
                    <li>
                      <a className="footer-description" href="#">
                        Order Tracking
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-s3">
          <div className="row">
            <div className="col l-4 m-4 c-12">
              <div className="footer-s3-wrap">
                <div className="footer-s3-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="footer-s3-content">
                  <h5>Location</h5>
                  <p>
                    123 Street, Old Trafford,
                    <br />
                    NewYork, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="col l-4 m-4 c-12">
              <div className="footer-s3-wrap">
                <div className="footer-s3-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="footer-s3-content">
                  <h5>Email Us</h5>
                  <p>
                    info@sitename.com <br />
                    bestwebcreator.com
                  </p>
                </div>
              </div>
            </div>

            <div className="col l-4 m-4 c-12">
              <div className="footer-s3-wrap">
                <div className="footer-s3-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="footer-s3-content">
                  <h5>27/4 Online Support</h5>
                  <p>
                    Call for styling advice on <br />
                    +123 1234 5678
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-s4">
        <div className="grid wide">
          <div className="row">
            <div className="col l-6">
              <p className="footer-s4-text">
                <span>© 2020 All Rights Reserved by Bestwebcreator</span>
              </p>
            </div>

            <div className="col l-6">
              <div className="footer-s4-content">
                <ul className="footer-s4-payment">
                  <li>
                    <a href="#">
                      <img src={images.payments.visa} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={images.payments.american_express} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={images.payments.discover} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={images.payments.master_card} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={images.payments.paypal} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
