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
            <a href="index.html">
              <img src="assets/imgs/theme/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="header-nav d-none d-lg-flex">
          <div className="logo logo-width-1">
            <a href="index.html">
              <img src="assets/imgs/theme/logo.jpg" alt="logo" />
            </a>
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
                    <a href="#">
                      Mega menu <i className="fi-rs-angle-down" />
                    </a>
                    <ul className="mega-menu">
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Fruit &amp; Vegetables
                        </a>
                        <ul>
                          <li>
                            <a href="shop-product-right.html">
                              Meat &amp; Poultry
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Fresh Vegetables
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Herbs &amp; Seasonings
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Cuts &amp; Sprouts
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Exotic Fruits &amp; Veggies
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Packaged Produce
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Breakfast &amp; Dairy
                        </a>
                        <ul>
                          <li>
                            <a href="shop-product-right.html">
                              Milk &amp; Flavoured Milk
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Butter and Margarine
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Eggs Substitutes
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Marmalades</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Sour Cream</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Cheese</a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Meat &amp; Seafood
                        </a>
                        <ul>
                          <li>
                            <a href="shop-product-right.html">
                              Breakfast Sausage
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Dinner Sausage</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">Chicken</a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Sliced Deli Meat
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Wild Caught Fillets
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-right.html">
                              Crab and Shellfish
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-34">
                        <div className="menu-banner-wrap">
                          <a href="shop-product-right.html">
                            <img
                              src="assets/imgs/banner/banner-menu.png"
                              alt="Nest"
                            />
                          </a>
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
                              <a href="shop-product-right.html">Shop now</a>
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
                {/* <div className="header-action-icon-2">
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
                </div> */}
                {/* <div className="header-action-icon-2">
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
                </div> */}
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
                      {/* <li>
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
                      </li> */}
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
    // <div className="header-middle header-middle-ptb-1 d-none d-lg-block header-bottom header-bottom-bg-color sticky-bar">
    //   <div className="container">
    //     <div className="header-wrap">
    //       <div className="logo logo-width-1">
    //         <a href="index.html">
    //           <img src="assets/imgs/theme/logo.jpg" alt="logo" />
    //         </a>
    //       </div>
    //       <div className="header-right">
    //         <div className="search-style-2"></div>
    //         <div className="header-action-right">
    //           <div className="header-action-2">
    //             <div className="header-action-icon-2">
    //               <a>
    //                 <img
    //                   className="svgInject"
    //                   alt="Nest"
    //                   src="assets/imgs/theme/icons/icon-compare.svg"
    //                 />
    //               </a>
    //               <a onClick={changeRouteBtn}>
    //                 <span className="lable ml-0">Become Farmer</span>
    //               </a>
    //             </div>
    //             {/* <div className="header-action-icon-2">
    //               <a href="shop-wishlist.html">
    //                 <img
    //                   className="svgInject"
    //                   alt="Nest"
    //                   src="assets/imgs/theme/icons/icon-heart.svg"
    //                 />
    //                 <span className="pro-count blue">6</span>
    //               </a>
    //               <a href="shop-wishlist.html">
    //                 <span className="lable">Wishlist</span>
    //               </a>
    //             </div> */}
    //             {/* <div className="header-action-icon-2">
    //               <a className="mini-cart-icon" href="shop-cart.html">
    //                 <img
    //                   alt="Nest"
    //                   src="assets/imgs/theme/icons/icon-cart.svg"
    //                 />
    //                 <span className="pro-count blue">2</span>
    //               </a>
    //               <a href="shop-cart.html">
    //                 <span className="lable">Cart</span>
    //               </a>
    //               <div className="cart-dropdown-wrap cart-dropdown-hm2">
    //                 <ul>
    //                   <li>
    //                     <div className="shopping-cart-img">
    //                       <a href="shop-product-right.html">
    //                         <img
    //                           alt="Nest"
    //                           src="assets/imgs/shop/thumbnail-3.jpg"
    //                         />
    //                       </a>
    //                     </div>
    //                     <div className="shopping-cart-title">
    //                       <h4>
    //                         <a href="shop-product-right.html">
    //                           Daisy Casual Bag
    //                         </a>
    //                       </h4>
    //                       <h4>
    //                         <span>1 × </span>$800.00
    //                       </h4>
    //                     </div>
    //                     <div className="shopping-cart-delete">
    //                       <a href="#">
    //                         <i className="fi-rs-cross-small" />
    //                       </a>
    //                     </div>
    //                   </li>
    //                   <li>
    //                     <div className="shopping-cart-img">
    //                       <a href="shop-product-right.html">
    //                         <img
    //                           alt="Nest"
    //                           src="assets/imgs/shop/thumbnail-2.jpg"
    //                         />
    //                       </a>
    //                     </div>
    //                     <div className="shopping-cart-title">
    //                       <h4>
    //                         <a href="shop-product-right.html">
    //                           Corduroy Shirts
    //                         </a>
    //                       </h4>
    //                       <h4>
    //                         <span>1 × </span>$3200.00
    //                       </h4>
    //                     </div>
    //                     <div className="shopping-cart-delete">
    //                       <a href="#">
    //                         <i className="fi-rs-cross-small" />
    //                       </a>
    //                     </div>
    //                   </li>
    //                 </ul>
    //                 <div className="shopping-cart-footer">
    //                   <div className="shopping-cart-total">
    //                     <h4>
    //                       Total <span>$4000.00</span>
    //                     </h4>
    //                   </div>
    //                   <div className="shopping-cart-button">
    //                     <a href="shop-cart.html" className="outline">
    //                       View cart
    //                     </a>
    //                     <a href="shop-checkout.html">Checkout</a>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div> */}
    //             <div className="header-action-icon-2">
    //               <a href="page-account.html">
    //                 <img
    //                   className="svgInject"
    //                   alt="Nest"
    //                   src="assets/imgs/theme/icons/icon-user.svg"
    //                 />
    //               </a>
    //               <a href="page-account.html">
    //                 <span className="lable ml-0">Account</span>
    //               </a>
    //               <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
    //                 <ul>
    //                   <li>
    //                     <a href="page-account.html">
    //                       <i className="fi fi-rs-user mr-10" />
    //                       My Account
    //                     </a>
    //                   </li>
    //                   {/* <li>
    //                     <a href="page-account.html">
    //                       <i className="fi fi-rs-location-alt mr-10" />
    //                       Order Tracking
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="page-account.html">
    //                       <i className="fi fi-rs-label mr-10" />
    //                       My Voucher
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="shop-wishlist.html">
    //                       <i className="fi fi-rs-heart mr-10" />
    //                       My Wishlist
    //                     </a>
    //                   </li> */}
    //                   <li>
    //                     <a href="page-account.html">
    //                       <i className="fi fi-rs-settings-sliders mr-10" />
    //                       Setting
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a onClick={logout}>
    //                       <i className="fi fi-rs-sign-out mr-10" />
    //                       Sign out
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavLogoBar;
