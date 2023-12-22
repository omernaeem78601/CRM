import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/action";

const NavLogoBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeRouteBtn = () => {
    window.open('http://localhost:3011/billing-front/login/', '_blank');
  }

  const logout = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/fruit/user/logout`
      );
      if (response.status === 200) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        dispatch(logoutAction(false));
        navigate("/login");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
      <div className="container">
        <div className="header-wrap">
          <div className="logo logo-width-1">
            <a href="index.html">
              <img src="assets/imgs/theme/logo.jpg" alt="logo" />
            </a>
          </div>
          <div className="header-right">
            <div className="search-style-2"></div>
            <div className="header-action-right">
              <div className="header-action-2">
                <div className="header-action-icon-2">
                  <a>
                    <img
                      className="svgInject"
                      alt="Nest"
                      src="assets/imgs/theme/icons/icon-compare.svg"
                    />
                  </a>
                  <a onClick={changeRouteBtn}>
                    <span className="lable ml-0">Become Farmer</span>
                  </a>
                </div>
                <div className="header-action-icon-2">
                  <a href="shop-wishlist.html">
                    <img
                      className="svgInject"
                      alt="Nest"
                      src="assets/imgs/theme/icons/icon-heart.svg"
                    />
                    <span className="pro-count blue">6</span>
                  </a>
                  <a href="shop-wishlist.html">
                    <span className="lable">Wishlist</span>
                  </a>
                </div>
                <div className="header-action-icon-2">
                  <a className="mini-cart-icon" href="shop-cart.html">
                    <img
                      alt="Nest"
                      src="assets/imgs/theme/icons/icon-cart.svg"
                    />
                    <span className="pro-count blue">2</span>
                  </a>
                  <a href="shop-cart.html">
                    <span className="lable">Cart</span>
                  </a>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html">
                            <img
                              alt="Nest"
                              src="assets/imgs/shop/thumbnail-3.jpg"
                            />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="shop-product-right.html">
                              Daisy Casual Bag
                            </a>
                          </h4>
                          <h4>
                            <span>1 × </span>$800.00
                          </h4>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <a href="shop-product-right.html">
                            <img
                              alt="Nest"
                              src="assets/imgs/shop/thumbnail-2.jpg"
                            />
                          </a>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <a href="shop-product-right.html">
                              Corduroy Shirts
                            </a>
                          </h4>
                          <h4>
                            <span>1 × </span>$3200.00
                          </h4>
                        </div>
                        <div className="shopping-cart-delete">
                          <a href="#">
                            <i className="fi-rs-cross-small" />
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                        <h4>
                          Total <span>$4000.00</span>
                        </h4>
                      </div>
                      <div className="shopping-cart-button">
                        <a href="shop-cart.html" className="outline">
                          View cart
                        </a>
                        <a href="shop-checkout.html">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-action-icon-2">
                  <a href="page-account.html">
                    <img
                      className="svgInject"
                      alt="Nest"
                      src="assets/imgs/theme/icons/icon-user.svg"
                    />
                  </a>
                  <a href="page-account.html">
                    <span className="lable ml-0">Account</span>
                  </a>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                    <ul>
                      <li>
                        <a href="page-account.html">
                          <i className="fi fi-rs-user mr-10" />
                          My Account
                        </a>
                      </li>
                      <li>
                        <a href="page-account.html">
                          <i className="fi fi-rs-location-alt mr-10" />
                          Order Tracking
                        </a>
                      </li>
                      <li>
                        <a href="page-account.html">
                          <i className="fi fi-rs-label mr-10" />
                          My Voucher
                        </a>
                      </li>
                      <li>
                        <a href="shop-wishlist.html">
                          <i className="fi fi-rs-heart mr-10" />
                          My Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="page-account.html">
                          <i className="fi fi-rs-settings-sliders mr-10" />
                          Setting
                        </a>
                      </li>
                      <li>
                        <a onClick={logout}>
                          <i className="fi fi-rs-sign-out mr-10" />
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLogoBar;
