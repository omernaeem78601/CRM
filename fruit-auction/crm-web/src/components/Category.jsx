import React from 'react';
import Banner from './Banner';

const Category = () => {
  const products = [
    {
      imgSrc: 'assets/imgs/shop/cat-13.png',
      title: 'Become Farmer',
      members: '26 members',
      color: 'bg-9',
    },
    {
      imgSrc: 'assets/imgs/shop/cat-12.png',
      title: 'Become a Wholesaler',
      members: '28 members',
      color: 'bg-10',
    },
    {
      imgSrc: 'assets/imgs/shop/cat-13.png',
      title: 'Become a Vendor',
      members: '26 members',
      color: 'bg-9',
    },
    {
      imgSrc: 'assets/imgs/shop/cat-12.png',
      title: 'Register in logistics department',
      members: '28 members',
      color: 'bg-10',
    },
    {
      imgSrc: 'assets/imgs/shop/cat-13.png',
      title: 'Register in agricultural department',
      members: '26 members',
      color: 'bg-9',
    },
    {
      imgSrc: 'assets/imgs/shop/cat-12.png',
      title: 'Become Our Golden Member',
      members: '28 members',
      color: 'bg-10',
    },
  ];

  const additionalProducts = [
    // {
    //   imgSrc: 'assets/imgs/shop/cat-13.png',
    //   title: 'Cake & Milk',
    //   items: '26 items',
    //   color: 'bg-9',
    // },
    // {
    //   imgSrc: 'assets/imgs/shop/cat-12.png',
    //   title: 'Organic Kiwi',
    //   items: '28 items',
    //   color: 'bg-10',
    // },
  ];
  
  return (
    <section className="popular-categories section-padding">
      <div className="container">
        <div className="row">
          {/* Show 8 products in 4 rows of 2 columns */}
          {products.slice(0, 8).map((product, index) => (
            <div key={index} className="col-md-2">
              <div
                className={`card-2 ${product.color} wow animate__animated animate__fadeInUp`}
                data-wow-delay={`.${index + 1}s`}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <a href="shop-grid-right.html">
                    <img src={product.imgSrc} alt="" />
                  </a>
                </figure>
                <h6>
                  <a href="shop-grid-right.html">{product.title}</a>
                </h6>
                <span>{product.members}</span>
              </div>
            </div>
          ))}
        </div>
        <Banner />
      </div>
    </section>
  );
};

export default Category;
