import React from 'react'

const PopularProducts = () => {
  return (
    <section className="product-tabs section-padding position-relative">
    <div className="container">
      <div className="section-title style-2 wow animate__animated animate__fadeIn">
        <h3>Popular Products</h3>
        <ul className="nav nav-tabs links" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="nav-tab-one"
              data-bs-toggle="tab"
              data-bs-target="#tab-one"
              type="button"
              role="tab"
              aria-controls="tab-one"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-two"
              data-bs-toggle="tab"
              data-bs-target="#tab-two"
              type="button"
              role="tab"
              aria-controls="tab-two"
              aria-selected="false"
            >
              Milks &amp; Dairies
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-three"
              data-bs-toggle="tab"
              data-bs-target="#tab-three"
              type="button"
              role="tab"
              aria-controls="tab-three"
              aria-selected="false"
            >
              Coffes &amp; Teas
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-four"
              data-bs-toggle="tab"
              data-bs-target="#tab-four"
              type="button"
              role="tab"
              aria-controls="tab-four"
              aria-selected="false"
            >
              Pet Foods
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-five"
              data-bs-toggle="tab"
              data-bs-target="#tab-five"
              type="button"
              role="tab"
              aria-controls="tab-five"
              aria-selected="false"
            >
              Meats
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-six"
              data-bs-toggle="tab"
              data-bs-target="#tab-six"
              type="button"
              role="tab"
              aria-controls="tab-six"
              aria-selected="false"
            >
              Vegetables
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="nav-tab-seven"
              data-bs-toggle="tab"
              data-bs-target="#tab-seven"
              type="button"
              role="tab"
              aria-controls="tab-seven"
              aria-selected="false"
            >
              Fruits
            </button>
          </li>
        </ul>
      </div>
      {/*End nav-tabs*/}
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="tab-one"
          role="tabpanel"
          aria-labelledby="tab-one"
        >
          <div className="row product-grid-4">
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-1-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-1-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$28.85</span>
                      <span className="old-price">$32.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-2-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-2-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      All Natural Italian-Style Chicken Meatballs
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Stouffer</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$52.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-3-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-3-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="new">New</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">StarKist</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$48.85</span>
                      <span className="old-price">$52.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-4-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-4-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Vegetables</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Foster Farms Takeout Crispy Classic Buffalo Wings
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$17.85</span>
                      <span className="old-price">$19.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-5-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-5-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="best">-14%</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Pet Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Blue Diamond Almonds Lightly Salted Vegetables
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="product-cart-wrap wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-6-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-6-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Chobani Complete Vanilla Greek Yogurt
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$54.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="product-cart-wrap wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-7-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-7-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Meats</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="product-cart-wrap wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-8-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-8-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Encore Seafoods Stuffed Alaskan Salmon
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$35.85</span>
                      <span className="old-price">$37.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="product-cart-wrap wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-9-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-9-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Coffes</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Gorton’s Beer Battered Fish Fillets with soft paper
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Old El Paso</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
              <div
                className="product-cart-wrap wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-10-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-10-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Cream</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Haagen-Dazs Caramel Cone Ice Cream Ketchup
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Tyson</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$22.85</span>
                      <span className="old-price">$24.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
          </div>
          {/*End product-grid-4*/}
        </div>
        {/*En tab one*/}
        <div
          className="tab-pane fade"
          id="tab-two"
          role="tabpanel"
          aria-labelledby="tab-two"
        >
          <div className="row product-grid-4">
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-10-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-10-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$28.85</span>
                      <span className="old-price">$32.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-12-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-12-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      All Natural Italian-Style Chicken Meatballs
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Stouffer</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$52.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-13-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-13-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="new">New</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">StarKist</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$48.85</span>
                      <span className="old-price">$52.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-14-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-14-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Vegetables</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Foster Farms Takeout Crispy Classic Buffalo Wings
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$17.85</span>
                      <span className="old-price">$19.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-15-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-15-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="best">-14%</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Pet Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Blue Diamond Almonds Lightly Salted Vegetables
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-16-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-16-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Chobani Complete Vanilla Greek Yogurt
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$54.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-7-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-7-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Meats</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-8-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-8-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Encore Seafoods Stuffed Alaskan Salmon
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$35.85</span>
                      <span className="old-price">$37.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-9-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-9-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Coffes</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Gorton’s Beer Battered Fish Fillets with soft paper
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Old El Paso</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-10-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-10-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Cream</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Haagen-Dazs Caramel Cone Ice Cream Ketchup
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Tyson</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$22.85</span>
                      <span className="old-price">$24.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
          </div>
          {/*End product-grid-4*/}
        </div>
        {/*En tab two*/}
        <div
          className="tab-pane fade"
          id="tab-three"
          role="tabpanel"
          aria-labelledby="tab-three"
        >
          <div className="row product-grid-4">
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-9-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-9-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$28.85</span>
                      <span className="old-price">$32.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-8-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-8-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      All Natural Italian-Style Chicken Meatballs
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Stouffer</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$52.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-7-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-7-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="new">New</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">StarKist</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$48.85</span>
                      <span className="old-price">$52.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-6-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-6-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Vegetables</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Foster Farms Takeout Crispy Classic Buffalo Wings
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$17.85</span>
                      <span className="old-price">$19.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-5-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-5-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="best">-14%</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Pet Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Blue Diamond Almonds Lightly Salted Vegetables
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-4-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-4-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Chobani Complete Vanilla Greek Yogurt
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$54.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-3-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-3-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Meats</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-2-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-2-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Encore Seafoods Stuffed Alaskan Salmon
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$35.85</span>
                      <span className="old-price">$37.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-9-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-9-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Coffes</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Gorton’s Beer Battered Fish Fillets with soft paper
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Old El Paso</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-1-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-1-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Cream</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Haagen-Dazs Caramel Cone Ice Cream Ketchup
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Tyson</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$22.85</span>
                      <span className="old-price">$24.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
          </div>
          {/*End product-grid-4*/}
        </div>
        {/*En tab three*/}
        <div
          className="tab-pane fade"
          id="tab-four"
          role="tabpanel"
          aria-labelledby="tab-four"
        >
          <div className="row product-grid-4">
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-6-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-6-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$28.85</span>
                      <span className="old-price">$32.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-7-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-7-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      All Natural Italian-Style Chicken Meatballs
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Stouffer</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$52.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-8-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-8-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="new">New</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">StarKist</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$48.85</span>
                      <span className="old-price">$52.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-9-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-9-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Vegetables</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Foster Farms Takeout Crispy Classic Buffalo Wings
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$17.85</span>
                      <span className="old-price">$19.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-4-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-4-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="best">-14%</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Pet Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Blue Diamond Almonds Lightly Salted Vegetables
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-3-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-3-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Chobani Complete Vanilla Greek Yogurt
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$54.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-2-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-2-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Meats</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-1-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-1-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Encore Seafoods Stuffed Alaskan Salmon
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$35.85</span>
                      <span className="old-price">$37.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-11-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-11-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Coffes</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Gorton’s Beer Battered Fish Fillets with soft paper
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Old El Paso</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-12-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-12-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Cream</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Haagen-Dazs Caramel Cone Ice Cream Ketchup
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Tyson</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$22.85</span>
                      <span className="old-price">$24.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
          </div>
          {/*End product-grid-4*/}
        </div>
        {/*En tab four*/}
        <div
          className="tab-pane fade"
          id="tab-five"
          role="tabpanel"
          aria-labelledby="tab-five"
        >
          <div className="row product-grid-4">
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-12-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-12-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$28.85</span>
                      <span className="old-price">$32.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-13-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-13-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      All Natural Italian-Style Chicken Meatballs
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Stouffer</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$52.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-14-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-14-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="new">New</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">StarKist</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$48.85</span>
                      <span className="old-price">$52.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-15-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-15-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Vegetables</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Foster Farms Takeout Crispy Classic Buffalo Wings
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$17.85</span>
                      <span className="old-price">$19.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-16-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-16-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="best">-14%</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Pet Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Blue Diamond Almonds Lightly Salted Vegetables
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-5-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-5-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Chobani Complete Vanilla Greek Yogurt
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$54.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-7-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-7-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Meats</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-8-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-8-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Encore Seafoods Stuffed Alaskan Salmon
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$35.85</span>
                      <span className="old-price">$37.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-9-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-9-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Coffes</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Gorton’s Beer Battered Fish Fillets with soft paper
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Old El Paso</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-10-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-10-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Cream</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Haagen-Dazs Caramel Cone Ice Cream Ketchup
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Tyson</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$22.85</span>
                      <span className="old-price">$24.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
          </div>
          {/*End product-grid-4*/}
        </div>
        {/*En tab five*/}
        <div
          className="tab-pane fade"
          id="tab-six"
          role="tabpanel"
          aria-labelledby="tab-six"
        >
          <div className="row product-grid-4">
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-4-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-4-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$28.85</span>
                      <span className="old-price">$32.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-6-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-6-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      All Natural Italian-Style Chicken Meatballs
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Stouffer</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$52.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-8-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-8-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="new">New</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">StarKist</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$48.85</span>
                      <span className="old-price">$52.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-9-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-9-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Vegetables</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Foster Farms Takeout Crispy Classic Buffalo Wings
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$17.85</span>
                      <span className="old-price">$19.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-5-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-5-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="best">-14%</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Pet Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Blue Diamond Almonds Lightly Salted Vegetables
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-6-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-6-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Chobani Complete Vanilla Greek Yogurt
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$54.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-7-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-7-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Meats</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-8-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-8-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Encore Seafoods Stuffed Alaskan Salmon
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$35.85</span>
                      <span className="old-price">$37.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-9-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-9-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Coffes</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Gorton’s Beer Battered Fish Fillets with soft paper
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Old El Paso</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-10-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-10-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Cream</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Haagen-Dazs Caramel Cone Ice Cream Ketchup
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Tyson</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$22.85</span>
                      <span className="old-price">$24.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
          </div>
          {/*End product-grid-4*/}
        </div>
        {/*En tab six*/}
        <div
          className="tab-pane fade"
          id="tab-seven"
          role="tabpanel"
          aria-labelledby="tab-seven"
        >
          <div className="row product-grid-4">
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-5-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-5-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$28.85</span>
                      <span className="old-price">$32.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-3-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-3-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      All Natural Italian-Style Chicken Meatballs
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Stouffer</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$52.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-7-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-7-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="new">New</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "85%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">StarKist</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$48.85</span>
                      <span className="old-price">$52.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-9-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-9-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Vegetables</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Foster Farms Takeout Crispy Classic Buffalo Wings
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$17.85</span>
                      <span className="old-price">$19.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-10-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-10-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="best">-14%</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Pet Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Blue Diamond Almonds Lightly Salted Vegetables
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-16-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-16-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Hodo Foods</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Chobani Complete Vanilla Greek Yogurt
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$54.85</span>
                      <span className="old-price">$55.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-7-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-7-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Meats</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-8-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-8-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">Sale</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Snack</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Encore Seafoods Stuffed Alaskan Salmon
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$35.85</span>
                      <span className="old-price">$37.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-9-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-9-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Coffes</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Gorton’s Beer Battered Fish Fillets with soft paper
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Old El Paso</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$23.85</span>
                      <span className="old-price">$25.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
              <div className="product-cart-wrap">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-10-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-10-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                    <a
                      aria-label="Quick view"
                      className="action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-eye" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">Cream</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">
                      Haagen-Dazs Caramel Cone Ice Cream Ketchup
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Tyson</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$22.85</span>
                      <span className="old-price">$24.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5" />
                        Add{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end product card*/}
          </div>
          {/*End product-grid-4*/}
        </div>
        {/*En tab seven*/}
      </div>
      {/*End tab-content*/}
    </div>
  </section>
  )
}

export default PopularProducts