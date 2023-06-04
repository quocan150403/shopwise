import Helmet from 'components/Helmet';
import './Login.scss';
import CommonSection from 'components/CommonSection';

function Login() {
  return (
    <Helmet title="Login">
      {/* <!-- login --> */}
      <section class="login padding-header">
        <CommonSection title="Login" />
        <div class="grid wide">
          <div class="row pd">
            <div class="col l-6 l-o-3 m-8 m-o-2 c-12">
              <form action="ASM/Login" method="POST" id="login" class="form account">
                <h3 class="form-heading">LOGIN</h3>
                <h4 class="form-error center">hdfsj</h4>
                <div class="form-group">
                  <div class="form-input">
                    <input id="username" placeholder=" " name="username" type="text" class="form-control" value="" />
                    <label for="email" class="form-label">
                      Username
                    </label>
                  </div>
                  <span class="form-message"></span>
                </div>

                <div class="form-group">
                  <div class="form-input">
                    <input id="password" placeholder=" " name="password" type="text" class="form-control" value="" />
                    <label for="password" class="form-label">
                      Password
                    </label>
                  </div>
                  <span class="form-message"></span>
                </div>

                <div class="other">
                  <div class="remember">
                    <label class="container">
                      <h4 class="other-text">Remember me</h4>
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>

                    <h4 class="other-text">Forgot password?</h4>
                  </div>
                </div>

                <button type="submit" name="login" class="form-submit">
                  <span>Login</span>
                </button>

                <div class="form-different">
                  <span>OR</span>
                </div>

                <ul class="form-connect">
                  <li>
                    <a class="form-connect-link" href="#">
                      <i class="bi bi-facebook"></i>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a class="form-connect-link" href="#">
                      <i class="bi bi-google"></i>
                      Google
                    </a>
                  </li>
                </ul>

                <div class="form-subheading">
                  Don't Have an Account?
                  <a href="ASM/Register" class="form-subheading-link">
                    {' '}
                    Sign up now
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

export default Login;
