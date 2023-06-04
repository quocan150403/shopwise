import Helmet from 'components/Helmet';
import './Checkout.scss';
import CommonSection from 'components/CommonSection';

function Checkout() {
  return (
    <Helmet title="Checkout">
      <section class="checkout padding-header">
        <CommonSection title="Checkout" />
        <div class="grid wide">
          <form method="POST">
            <div class="row pd">
              {/* <!-- Billing --> */}
              <div class="col l-6 m-12 c-12">
                <div class="checkout-billing">
                  <div class="form form-checkout">
                    <div class="form-group">
                      <div class="form-input">
                        <input required id="name" placeholder=" " name="name" type="text" class="form-control" />
                        <label for="name" class="form-label">
                          Your Name *
                        </label>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-input">
                        <input required id="tel" placeholder=" " name="tel" type="text" class="form-control" />
                        <label for="tel" class="form-label">
                          Tel *
                        </label>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-input">
                        <input required id="email" placeholder=" " name="email" type="text" class="form-control" />
                        <label for="email" class="form-label">
                          Email *
                        </label>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="form-input">
                        <input required id="address" placeholder=" " name="address" type="text" class="form-control" />
                        <label for="address" class="form-label">
                          Address *
                        </label>
                      </div>
                    </div>
                  </div>

                  <h3 class="form-heading-checkout">Additional Information</h3>
                  <textarea placeholder="Order notes" name="notes" rows="7"></textarea>
                </div>
              </div>

              {/* <!-- Total --> */}
              <input name="total" class="input-total" hidden type="number" />
              {/* <!-- Array Product --> */}
              <input name="products" class="input-arr-product" hidden />

              {/* <!-- Orders --> */}
              <div class="col l-6 m-12 c-12">
                <div class="checkout-orders">
                  <h3 class="form-heading form-heading-checkout">Your Orders</h3>

                  <div class="checkout-orders__item head">
                    <div class="checkout-orders__item-product">
                      <span>Product</span>
                    </div>
                    <div>
                      <span>Total</span>
                    </div>
                  </div>

                  <ul class="checkout-orders__list">
                    {/* <!-- <li class="checkout-orders__item">
          <div class="checkout-orders__item-product">
            Lether Gray Tuxedo <span>x 1</span>
          </div>
          <div>$55.00</div>
        </li>
       --> */}
                  </ul>

                  <ul class="checkout-orders__list-other">
                    <li class="checkout-orders__item">
                      <div class="checkout-orders__item-product">
                        <span>Shipping</span>
                      </div>
                      <div class="">Free</div>
                    </li>

                    <li class="checkout-orders__item">
                      <div class="checkout-orders__item-product">
                        <span>Total</span>
                      </div>
                      <div>
                        <span class="checkout-orders__item-total">$349.00</span>
                      </div>
                    </li>
                  </ul>

                  <ul class="checkout-orders__list-payment">
                    <div class="form-heading-checkout">Payment</div>
                    <li class="checkout-orders__item-payment">
                      <input type="radio" value="0" name="payment" checked id="orders1" />
                      <label for="orders1">Cash payment</label>
                    </li>
                    <li class="checkout-orders__item-payment">
                      <input type="radio" value="1" name="payment" id="orders2" />
                      <label for="orders2">Paypal</label>
                    </li>
                  </ul>
                  <button type="submit" name="placeorder" class="form-submit">
                    <span>Place Order</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Helmet>
  );
}

export default Checkout;
