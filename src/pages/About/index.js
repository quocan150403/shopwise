import './About.scss';
import Helmet from 'components/Helmet';
function About() {
  return (
    <Helmet title="About">
      <div class="about_us">
        <div class="about__head">
          <div class="grid wide">
            <div class="row">
              <div class="col l-6 m-6 c-12">
                <img class="about__head-image" src="public/image/banners/about_img.jpg" alt="" />
              </div>
              <div class="col l-6 m-6 c-12">
                <h1 class="about__head-title">Who We Are</h1>
                <p class="about__head-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur quibusdam enim expedita sed
                  nesciunt incidunt accusamus adipisci officia libero laboriosam!
                </p>
                <p class="about__head-text">
                  Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh id elit. Duis sed odio sit amet
                  nibh vultate cursus a sit amet mauris. Duis sed odio sit amet nibh vultate cursus a sit amet mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="about__body">
          <div class="about__body-inner">
            <div class="about__body-heading">
              <h1 class="about__body-title">Why Choose Us?</h1>
              <p class="about__body-heading-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div class="about__body-footer">
              <div class="grid wide">
                <div class="row">
                  <div class="col l-4 m-6 c-12">
                    <div class="about__body-items">
                      <div class="about__body-icon">
                        <i class="ti-pencil-alt "></i>
                      </div>
                      <h5 class="abitems__body-title">Creative Design</h5>
                      <p class="about__body-text">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form
                      </p>
                    </div>
                  </div>
                  <div class="col l-4 m-6 c-12">
                    <div class="about__body-items">
                      <div class="about__body-icon">
                        <i class="ti-layers "></i>
                      </div>
                      <h5 class="abitems__body-title">Creative Design</h5>
                      <p class="about__body-text">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form
                      </p>
                    </div>
                  </div>
                  <div class="col l-4 m-6 c-12">
                    <div class="about__body-items">
                      <div class="about__body-icon">
                        <i class="ti-email "></i>
                      </div>
                      <h5 class="abitems__body-title">Creative Design</h5>
                      <p class="about__body-text">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="about__bot">
          <div class="about__bot-inner">
            <div class="about__bot-heading">
              <h1 class="about__body-title">Our Team Members</h1>
              <p class="about__body-heading-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..
              </p>
            </div>
            <div class="about__bot-footer">
              <div class="grid wide">
                <div class="row">
                  <div class="col l-3 m-6 c-12">
                    <div class="about__bot-items">
                      <div class="about__bot-imgteam">
                        <img src="public/image/other/team_img1.jpg" alt="" />
                        <div class="about__csreen">
                          <div class="about__csreen-icon">
                            <i class="ti-facebook"></i>
                            <i class="ti-twitter-alt"></i>
                            <i class="ti-google"></i>
                            <i class="ti-linkedin"></i>
                          </div>
                        </div>
                      </div>
                      <h5 class="about__bot-name">John Muniz</h5>
                      <span class="about__bot-position">Project Engineer</span>
                    </div>
                  </div>
                  <div class="col l-3 m-6 c-12">
                    <div class="about__bot-items">
                      <div class="about__bot-imgteam">
                        <img src="public/image/other/team_img2.jpg" alt="" />
                        <div class="about__csreen">
                          <div class="about__csreen-icon">
                            <i class="ti-facebook"></i>
                            <i class="ti-twitter-alt"></i>
                            <i class="ti-google"></i>
                            <i class="ti-linkedin"></i>
                          </div>
                        </div>
                      </div>
                      <h5 class="about__bot-name">Alea Brooks</h5>
                      <span class="about__bot-position">Graphics Designer</span>
                    </div>
                  </div>
                  <div class="col l-3 m-6 c-12">
                    <div class="about__bot-items">
                      <div class="about__bot-imgteam">
                        <img src="public/image/other/team_img3.jpg" alt="" />
                        <div class="about__csreen">
                          <div class="about__csreen-icon">
                            <i class="ti-facebook"></i>
                            <i class="ti-twitter-alt"></i>
                            <i class="ti-google"></i>
                            <i class="ti-linkedin"></i>
                          </div>
                        </div>
                      </div>
                      <h5 class="about__bot-name">Anders Glick</h5>
                      <span class="about__bot-position">Software Developer</span>
                    </div>
                  </div>
                  <div class="col l-3 m-6 c-12">
                    <div class="about__bot-items">
                      <div class="about__bot-imgteam">
                        <img src="public/image/other/team_img4.jpg" alt="" />
                        <div class="about__csreen">
                          <div class="about__csreen-icon">
                            <i class="ti-facebook"></i>
                            <i class="ti-twitter-alt"></i>
                            <i class="ti-google"></i>
                            <i class="ti-linkedin"></i>
                          </div>
                        </div>
                      </div>
                      <h5 class="about__bot-name">Richard Tice</h5>
                      <span class="about__bot-position">Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default About;
