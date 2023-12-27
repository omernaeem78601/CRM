import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';

const Category = () => {
  const products = [
    {
      imgSrc: 'assets/imgs/shop/cat-13.png',
      title: 'Become Farmer',
      members: '26 members',
      color: 'bg-9',
      path:'/farmer-list'
    },
    {
      imgSrc: 'assets/imgs/shop/cat-12.png',
      title: 'Become a Wholesaler',
      members: '28 members',
      color: 'bg-10',
      path:'/wholesaler'
    },
    {
      imgSrc: 'assets/imgs/shop/cat-13.png',
      title: 'Become a Vendor',
      members: '26 members',
      color: 'bg-9',
      path:'/vendor-list'
    },
    {
      imgSrc: 'assets/imgs/shop/cat-12.png',
      title: 'Register in Logistics',
      members: '28 members',
      color: 'bg-10',
      path:'/logistics'
    },
    {
      imgSrc: 'assets/imgs/shop/cat-13.png',
      title: 'Register in Agricultural',
      members: '26 members',
      color: 'bg-9',
      path:'/agricultural'
    },
    {
      imgSrc: 'assets/imgs/shop/cat-12.png',
      title: 'Become Our Golden Member',
      members: '28 members',
      color: 'bg-10',
      path:'/golden-member'
    },
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
                  <Link to={product.path}>
                    <img src={product.imgSrc} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to={product.path}>{product.title}</Link>
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
