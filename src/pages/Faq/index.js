import Helmet from 'components/Helmet';

function Faq() {
  return (
    <Helmet title="Faq">
      <section class="login account-mb">
        <div class="grid wide">
          <div class="row pd">
            <div class="col l-6 l-o-3 m-8 m-o-2 c-12">
              <form action="" method="POST" id="login" class="form account">
                <h3 class="form-heading">Create Account</h3>
                <h4 class="form-error center"></h4>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      id="username"
                      placeholder="Enter your name"
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
                    <input id="email" placeholder="Enter your email" name="email" type="text" class="form-control" />
                    <span class="iconError">
                      <i class="ti-alert"></i>
                    </span>
                  </div>
                  <span class="form-message"></span>
                </div>

                <div class="form-group">
                  <div class="input-group">
                    <input id="password" placeholder="Password" name="password" type="password" class="form-control" />
                    <span class="iconError">
                      <i class="ti-alert"></i>
                    </span>
                  </div>
                  <span class="form-message"></span>
                </div>

                <div class="form-group">
                  <div class="input-group">
                    <input
                      id="confirmpassword"
                      placeholder="Confirm Password"
                      name="confirmpassword"
                      type="password"
                      class="form-control"
                    />
                    <span class="iconError">
                      <i class="ti-alert"></i>
                    </span>
                  </div>
                  <span class="form-message"></span>
                </div>

                <div class="other">
                  <div class="remember">
                    <label class="container">
                      <h4 class="other-text">I agree to terms & Policy.</h4>
                      <input type="checkbox" id="check" name="check" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>

                <button type="submit" name="register" class="form-submit">
                  <span>Register</span>
                </button>

                <div class="form-different">
                  <span>OR</span>
                </div>

                <ul class="form-connect">
                  <li>
                    <a class="form-connect-link" href="/">
                      <i class="ti-facebook"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a class="form-connect-link" href="#">
                      <i class="ti-google"></i>
                      Google
                    </a>
                  </li>
                </ul>

                <div class="form-subheading">
                  Already have an account?
                  <a href="./login" class="form-subheading-link">
                    Log in
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

export default Faq;
