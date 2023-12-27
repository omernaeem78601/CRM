import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
  return (
    <section className="home-slider position-relative mb-30 ">
      <div className="container ">
        <Carousel>
          <Carousel.Item>
            <div
              className="single-hero-slider p-5 text-center  single-animation-wrap"
              style={{
                backgroundImage: "url(assets/imgs/slider/slider-1.png)"
              }}
            >
              <div className="slider-content">
                <h1 className="display-2 mb-40">
                  Let's start your Business
                  <br />
                  With Us
                </h1>
                <p className="mb-65">Sign up for the daily newsletter</p>
                {/* <form className="w-25 form-subcriber d-flex">
                  <input type="email" placeholder="Your email address" />
                  <button className="btn" type="submit">
                    Subscribe
                  </button>
                </form> */}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="single-hero-slider p-5 text-center single-animation-wrap"
              style={{
                backgroundImage: "url(assets/imgs/slider/slider-2.png)"
              }}
            >
              <div className="slider-content">
                <h1 className="display-2 mb-40">
                Helping partner of 
                  <br />
                  your Business
                </h1>
                <p className="mb-65">Save up to 50% off on your first order</p>
                {/* <form className="w-25 form-subscriber d-flex">
                  <input type="email" placeholder="Your email address" />
                  <button className="btn" type="submit">
                    Subscribe
                  </button>
                </form> */}
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Header;
