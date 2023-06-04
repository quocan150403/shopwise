import Helmet from 'components/Helmet';
import './Cart.scss';
import images from 'assets/images';

function Cart() {
  return (
    <Helmet title="Cart">
      <section class="cart mt-6">
        <div class="cart__head">
          <div class="grid wide cart__inner">
            <div class="row">
              <div class="col l-12 m-12 c-12 ">
                <table class="cart__head-table">
                  <thead>
                    <tr>
                      <th>
                        <label for="cart-checkbox-all">
                          <input id="cart-checkbox-all" type="checkbox" />
                        </label>
                      </th>
                      <th class="cart__product-img">Image</th>
                      <th class="cart__product-name">Product</th>
                      <th class="cart__product-name">Color</th>
                      <th class="cart__product-price">Price</th>
                      <th class="cart__product-quantity">Quantity</th>
                      <th class="cart__product-total">Total</th>
                      <th class="">Remove</th>
                    </tr>
                  </thead>
                  <tbody class="cart__product-box cart-list-action">
                    <tr>
                      <td>
                        <label htmlFor="" class="cart__product-checkbox">
                          <input name="ids[]" id="" class="cart-checkbox" type="checkbox" />
                        </label>
                      </td>
                      <td class="cart__product-img">
                        <a href="/">
                          <img src={images.product} alt="" />
                        </a>
                      </td>
                      <td class="cart__product-name">
                        <a href="/">Tene san pham</a>
                      </td>
                      <td class="cart__product-price">4858345</td>
                      <td class="cart__product-quantity">
                        <div class="cart__head-quantity">
                          <input type="button" value="-" class="minu cart-minus" />
                          <input type="number" value="" class="cart-quantity product-detail_value-quantity" />
                          <input type="button" value="+" class="plus cart-plus" />
                        </div>
                      </td>
                      <td class="cart__product-total">434343</td>
                      <td>
                        <i class="ti-close cart-delete cart__product-remove"></i>
                      </td>
                    </tr>
                    `,
                  </tbody>
                </table>
              </div>
            </div>
            <div class="divider">
              <i class="ti-shopping-cart-full"></i>
            </div>
          </div>
        </div>

        <div class="cart__foot">
          <div class="grid wide">
            <div class="row">
              <div class="col l-6 m-6 c-12">
                <h6 class="cart__foot-title">Calculate Shipping</h6>
                <form action="">
                  <div class="form-group">
                    <div class="input-group">
                      <select class="form-control">
                        <option value="">Choose a option...</option>
                        <option value="">1</option>
                      </select>
                      <span class="iconError">
                        <i class="ti-alert"></i>
                      </span>
                    </div>
                    <span class="form-message"></span>
                  </div>

                  <div class="form-group-wrap">
                    <div class="form-group">
                      <div class="input-group">
                        <input
                          id="username"
                          placeholder="State / Country"
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
                          id="username"
                          placeholder="PostCode / ZIP"
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
                  </div>
                  <div class="cart__foot_items cart__foot_items-foot">
                    <button class="btn btn-primary">
                      <span>Update Totals</span>
                    </button>
                  </div>
                </form>
              </div>
              <div class="col l-6 m-6 c-12">
                <div class="cart__foot-inner">
                  <h6 class="cart__foot-title">Cart Totals</h6>
                  <table>
                    <tbody>
                      <tr>
                        <td class="cart__foot-total_label">Cart Subtotal</td>
                        <td class="cart__foot-total_amount">
                          $<span class="cart-total"></span>.00
                        </td>
                      </tr>
                      <tr>
                        <td class="cart__foot-total_label">Shipping</td>
                        <td class="cart__foot-total_amount">Free Shipping</td>
                      </tr>
                      <tr>
                        <td class="cart__foot-total_label">Total</td>
                        <td class="cart__foot-total_amount">
                          <strong>
                            $<span class="cart-total"></span>.00
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h3 class="cart-message">You have not selected a product</h3>
                  <a href="checkout" class="btn btn-primary btn-cart-checkout">
                    <span>Proceed To CheckOut</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

export default Cart;
