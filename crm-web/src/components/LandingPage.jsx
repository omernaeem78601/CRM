import React from 'react'
import Footer from './Footer'
import FourColumns from './FourColumns'
import Deals from './Deals'
import BestSale from './BestSale'
import PopularProducts from './PopularProducts'
import Banner from './Banner'
import Category from './Category'
import Header from './Header'
import NavHeader from './NavHeader'

const LandingPage = () => {
  return (
    <>
  {/* Modal */}
  <div
    className="modal fade custom-modal"
    id="onloadModal"
    tabIndex={-1}
    aria-labelledby="onloadModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
        <div className="modal-body">
          <div
            className="deal"
            style={{ backgroundImage: 'url("assets/imgs/banner/popup-1.png")' }}
          >
            <div className="deal-top">
              <h6 className="mb-10 text-brand-2">Deal of the Day</h6>
            </div>
            <div className="deal-content detail-info">
              <h4 className="product-title">
                <a href="shop-product-right.html" className="text-heading">
                  Organic fruit for your family's health
                </a>
              </h4>
              <div className="clearfix product-price-cover">
                <div className="product-price primary-color float-left">
                  <span className="current-price text-brand">$38</span>
                  <span>
                    <span className="save-price font-md color3 ml-15">
                      26% Off
                    </span>
                    <span className="old-price font-md ml-15">$52</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="deal-bottom">
              <p className="mb-20">Hurry Up! Offer End In:</p>
              <div
                className="deals-countdown pl-5"
                data-countdown="2025/03/25 00:00:00"
              >
                <span className="countdown-section">
                  <span className="countdown-amount hover-up">03</span>
                  <span className="countdown-period"> days </span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount hover-up">02</span>
                  <span className="countdown-period"> hours </span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount hover-up">43</span>
                  <span className="countdown-period"> mins </span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount hover-up">29</span>
                  <span className="countdown-period"> sec </span>
                </span>
              </div>
              <div className="product-detail-rating">
                <div className="product-rate-cover text-end">
                  <div className="product-rate d-inline-block">
                    <div className="product-rating" style={{ width: "90%" }} />
                  </div>
                  <span className="font-small ml-5 text-muted">
                    {" "}
                    (32 rates)
                  </span>
                </div>
              </div>
              <a href="shop-grid-right.html" className="btn hover-up">
                Shop Now <i className="fi-rs-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quick view */}
  <div
    className="modal fade custom-modal"
    id="quickViewModal"
    tabIndex={-1}
    aria-labelledby="quickViewModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
        <div className="modal-body">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
              <div className="detail-gallery">
                <span className="zoom-icon">
                  <i className="fi-rs-search" />
                </span>
                {/* MAIN SLIDES */}
                <div className="product-image-slider">
                  <figure className="border-radius-10">
                    <img
                      src="assets/imgs/shop/product-16-2.jpg"
                      alt="product image"
                    />
                  </figure>
                  <figure className="border-radius-10">
                    <img
                      src="assets/imgs/shop/product-16-1.jpg"
                      alt="product image"
                    />
                  </figure>
                  <figure className="border-radius-10">
                    <img
                      src="assets/imgs/shop/product-16-3.jpg"
                      alt="product image"
                    />
                  </figure>
                  <figure className="border-radius-10">
                    <img
                      src="assets/imgs/shop/product-16-4.jpg"
                      alt="product image"
                    />
                  </figure>
                  <figure className="border-radius-10">
                    <img
                      src="assets/imgs/shop/product-16-5.jpg"
                      alt="product image"
                    />
                  </figure>
                  <figure className="border-radius-10">
                    <img
                      src="assets/imgs/shop/product-16-6.jpg"
                      alt="product image"
                    />
                  </figure>
                  <figure className="border-radius-10">
                    <img
                      src="assets/imgs/shop/product-16-7.jpg"
                      alt="product image"
                    />
                  </figure>
                </div>
                {/* THUMBNAILS */}
                <div className="slider-nav-thumbnails">
                  <div>
                    <img
                      src="assets/imgs/shop/thumbnail-3.jpg"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/imgs/shop/thumbnail-4.jpg"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/imgs/shop/thumbnail-5.jpg"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/imgs/shop/thumbnail-6.jpg"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/imgs/shop/thumbnail-7.jpg"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/imgs/shop/thumbnail-8.jpg"
                      alt="product image"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/imgs/shop/thumbnail-9.jpg"
                      alt="product image"
                    />
                  </div>
                </div>
              </div>
              {/* End Gallery */}
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="detail-info pr-30 pl-30">
                <span className="stock-status out-stock"> Sale Off </span>
                <h3 className="title-detail">
                  <a href="shop-product-right.html" className="text-heading">
                    Seeds of Change Organic Quinoa, Brown
                  </a>
                </h3>
                <div className="product-detail-rating">
                  <div className="product-rate-cover text-end">
                    <div className="product-rate d-inline-block">
                      <div
                        className="product-rating"
                        style={{ width: "90%" }}
                      />
                    </div>
                    <span className="font-small ml-5 text-muted">
                      {" "}
                      (32 reviews)
                    </span>
                  </div>
                </div>
                <div className="clearfix product-price-cover">
                  <div className="product-price primary-color float-left">
                    <span className="current-price text-brand">$38</span>
                    <span>
                      <span className="save-price font-md color3 ml-15">
                        26% Off
                      </span>
                      <span className="old-price font-md ml-15">$52</span>
                    </span>
                  </div>
                </div>
                <div className="detail-extralink mb-30">
                  <div className="detail-qty border radius">
                    <a href="#" className="qty-down">
                      <i className="fi-rs-angle-small-down" />
                    </a>
                    <span className="qty-val">1</span>
                    <a href="#" className="qty-up">
                      <i className="fi-rs-angle-small-up" />
                    </a>
                  </div>
                  <div className="product-extra-link2">
                    <button type="submit" className="button button-add-to-cart">
                      <i className="fi-rs-shopping-cart" />
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="font-xs">
                  <ul>
                    <li className="mb-5">
                      Vendor: <span className="text-brand">Nest</span>
                    </li>
                    <li className="mb-5">
                      MFG:<span className="text-brand"> Jun 4.2022</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Detail Info */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  <NavHeader/>
  {/*End header*/}
  <main className="main">
    <Header/> 
    {/*End hero slider*/}
    <Category/>
    {/*End category slider*/}
    <Banner/>
    {/*End banners*/}
    <PopularProducts/>
    {/*Products Tabs*/}
    <BestSale/>
    {/*End Best Sales*/}
    <Deals/>
    {/*End Deals*/}
    <FourColumns/>  
    {/*End 4 columns*/}
  </main>
 <Footer/>
  {/* Preloader Start */}
  {/* <div id="preloader-active">
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="preloader-inner position-relative">
        <div className="text-center">
          <img src="assets/imgs/theme/loading.gif" alt="" />
        </div>
      </div>
    </div>
  </div> */}
</>
  )
}

export default LandingPage