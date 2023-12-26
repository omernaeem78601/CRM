import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/action";
import { useEffect } from "react";

const NavLogoBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeRouteBtn = () => {
    window.open("http://localhost:3011/fruit-auction/", "_blank");
  };
  const newsWeb = () => {
    window.open("https://fruitsauction.com/", "_blank");
  };

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
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".sticky-bar");
      if (navbar) {
        if (window.pageYOffset > 0) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header-bottom header-bottom-bg-color sticky-bar">
      <div className="container">
        <div className="header-wrap header-space-between position-relative">
          <div className="logo logo-width-1 d-block d-lg-none">
            <Link to="/">
              <img src="assets/imgs/theme/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="header-nav d-none d-lg-flex">
            <div className="logo logo-width-1">
              <Link to="/">
                <img src="assets/imgs/theme/logo.jpg" alt="logo" />
              </Link>
            </div>
            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
              <nav>
                <ul>
                  <li>
                    <Link className="active" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>

                  <li className="position-static">
                    <Link>
                      All Categories <i className="fi-rs-angle-down" />
                    </Link>
                    <ul className="mega-menu">
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <Link className="menu-title" to="/farmer-list">
                          Farmer &amp; Vendors
                        </Link>
                        <ul>
                          <li>
                            <Link to="/farmer-list">Farmers</Link>
                          </li>
                          <li>
                            <Link to="/vendor-list">Vendors</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <Link className="menu-title" to="/vendor-list">
                          Agriculture
                        </Link>
                        <ul>
                          <li>
                            <Link to="/vendor-list">Machinery</Link>
                          </li>
                          <li>
                            <Link to="/farmer-list">Seeds</Link>
                          </li>
                          <li>
                            <Link to="/vendor-list">Raw Material</Link>
                          </li>
                          <li>
                            <Link to="/farmer-list">Land Brokers</Link>
                          </li>
                          <ul>
                            <Link className="menu-title" to="/vendor-list">
                              Wholesaler
                            </Link>
                          </ul>
                          <ul onClick={newsWeb}>
                            <Link className="menu-title">
                              News
                            </Link>
                          </ul>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <Link to="/farmer-list" className="menu-title" >
                         Logistics
                        </Link>
                        <ul>
                        <li>
                            <Link to="/farmer-list">Transport</Link>
                          </li>
                          <li>
                            <Link to="/vendor-list">Accounts</Link>
                          </li>
                         
                         
                          <ul>
                            <Link className="menu-title" to="/government-policies">
                              Government Policies
                            </Link>
                          </ul>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-34">
                        <div className="menu-banner-wrap">
                          <Link to="/signUp">
                            <img
                              src="assets/imgs/banner/banner-menu.png"
                              alt="Nest"
                            />
                          </Link>
                          <div className="menu-banner-content">
                            <h4>Hot deals</h4>
                            <h3>
                              Don't miss
                              <br />
                              Trending
                            </h3>
                            <div className="menu-banner-price">
                              <span className="new-price text-success">
                                Save to 50%
                              </span>
                            </div>
                            <div className="menu-banner-btn">
                              <Link to="/signUp">Sign Up Now</Link>
                            </div>
                          </div>
                          <div className="menu-banner-discount">
                            <h3>
                              <span>25%</span>
                              off
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="hotline d-none d-lg-flex">
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
                        <Link to="/account-setting">
                          <i className="fi fi-rs-user mr-10" />
                          My Account
                        </Link>
                      </li>
                      <li>
                        <Link to="/account-setting">
                          <i className="fi fi-rs-settings-sliders mr-10" />
                          Setting
                        </Link>
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
          <div className="header-action-icon-2 d-block d-lg-none">
            <div className="burger-icon burger-icon-white">
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>
          <div className="header-action-right d-block d-lg-none">
            <div className="header-action-2">
              <div className="header-action-icon-2">
                <a href="shop-wishlist.html">
                  <img
                    alt="Nest"
                    src="assets/imgs/theme/icons/icon-heart.svg"
                  />
                  <span className="pro-count white">4</span>
                </a>
              </div>
              <div className="header-action-icon-2">
                <a className="mini-cart-icon" href="#">
                  <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                  <span className="pro-count white">2</span>
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
                            Plain Striola Shirts
                          </a>
                        </h4>
                        <h3>
                          <span>1 × </span>$800.00
                        </h3>
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
                            src="assets/imgs/shop/thumbnail-4.jpg"
                          />
                        </a>
                      </div>
                      <div className="shopping-cart-title">
                        <h4>
                          <a href="shop-product-right.html">Macbook Pro 2022</a>
                        </h4>
                        <h3>
                          <span>1 × </span>$3500.00
                        </h3>
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
                        Total <span>$383.00</span>
                      </h4>
                    </div>
                    <div className="shopping-cart-button">
                      <a href="shop-cart.html">View cart</a>
                      <a href="shop-checkout.html">Checkout</a>
                    </div>
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
