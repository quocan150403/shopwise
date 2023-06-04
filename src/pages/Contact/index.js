import ProductList from 'components/ProductList';
import './Contact.scss';
import images from 'assets/images';
import Helmet from 'components/Helmet';

function Contact() {
  return (
    <Helmet title="Contact">
      <div class="contact">
        <div class="contact__inner">
          <div class="contact__inner-heading">
            <div class="grid wide">
              <div class="row">
                <div class="col l-4 m-6 c-12">
                  <div class="contact__items">
                    <div class="contact__items-img">
                      <i class="ti-map"></i>
                    </div>
                    <h4 class="contact__items-title">Address</h4>
                    <p class="contact__items-address">123 Street, Old Trafford, London, UK</p>
                  </div>
                </div>
                <div class="col l-4 m-6 c-12">
                  <div class="contact__items">
                    <div class="contact__items-img">
                      <i class="ti-mobile"></i>
                    </div>
                    <h4 class="contact__items-title">Email Address</h4>
                    <p class="contact__items-address">info@yourmail.com</p>
                  </div>
                </div>
                <div class="col l-4 m-6 c-12">
                  <div class="contact__items">
                    <div class="contact__items-img">
                      <i class="ti-email"></i>
                    </div>
                    <h4 class="contact__items-title">Phone</h4>
                    <p class="contact__items-address">+ 457 789 789 65</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact__inner-footer">
            <div class="grid wide">
              <div class="row">
                <div class="col l-6 m-12 c-12">
                  <div class="contact__from">
                    <h2 class="contact__from-title">Get In Touch</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id
                      varius nunc id varius nunc.
                    </p>

                    {/* <!-- Form --> */}
                    <form action="" method="POST" id="form1">
                      <div class="form-group-wrap">
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              id="username"
                              placeholder="Enter name *"
                              name="username"
                              type="text"
                              class="form-control"
                            />
                            <span class="iconError">
                              <i class="ti-alert"></i>
                            </span>
                          </div>
                          <span class="form-message"></span>
                        </div>

                        <div class="form-group">
                          <div class="input-group">
                            <input
                              id="telephone"
                              placeholder="Enter telephone *"
                              name="telephone"
                              type="text"
                              class="form-control"
                            />
                            <span class="iconError">
                              <i class="ti-alert"></i>
                            </span>
                          </div>
                          <span class="form-message"></span>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="input-group">
                          <input
                            id="email"
                            placeholder="Enter Email *"
                            name="email"
                            type="email"
                            class="form-control"
                          />
                          <span class="iconError">
                            <i class="ti-alert"></i>
                          </span>
                        </div>
                        <span class="form-message"></span>
                      </div>

                      <div class="form-group">
                        <div class="input-group">
                          <textarea
                            id="message"
                            placeholder="Enter Message *"
                            name="message"
                            class="form-control form-control-textarea"
                            rows="50"
                          ></textarea>
                          <span class="iconError">
                            <i class="ti-alert"></i>
                          </span>
                        </div>
                        <span class="form-message"></span>
                      </div>

                      <div class="contact-btn">
                        <button type="submit" name="login" class="btn btn-primary">
                          <span>Send Message</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="col l-6 m-12 c-12">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.45706628552!2d106.62435511465328!3d10.852798760747369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a272ac90551%3A0xfdedca96b3ea5e15!2zQ8O0bmcgVmnDqm4gUGjDosyAbiBNw6rMgG0gUXVhbmcgVHJ1bmcgVMO0IEvDvQ!5e0!3m2!1svi!2s!4v1668069267274!5m2!1svi!2s"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Contact;
