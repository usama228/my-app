import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ToastMessage from './ToastMessage';
import './HomeSection.css';

const products = [
  {
    id: 1,
    name: 'Maria B.',
    price: '$49.99',
    image1: '/images/Product1.jpg',
    image2: '/images/Product1-hover.jpg',
  },
  {
    id: 2,
    name: 'Chiniyre',
    price: '$59.99',
    image1: '/images/Product2.jpg',
    image2: '/images/Product2-hover.jpg',
  },
  {
    id: 3,
    name: 'Nishat',
    price: '$69.99',
    image1: '/images/Product3.jpg',
    image2: '/images/Product3-hover.jpg',
  },
  {
    id: 4,
    name: 'Zelbury',
    price: '$79.99',
    image1: '/images/Product4.jpg',
    image2: '/images/Product4-hover.jpg',
  },
  {
    id:5,
    name:'Barezze',
    price: '$78.8',
    image1:'/images/Product5.jpg',
    image2: '/images/Product5-hover.jpg'
  },
  {
    id:6,
    name:'Sports ',
    price: '$78.8',
    image1:'/images/Product6.jpg',
    image2: '/images/Product6-hover.jpg'
  },
  {
    id:7,
    name:'Asim Jofa',
    price: '$78.8',
    image1:'/images/Product7.jpg',
    image2: '/images/Product7-hover.jpg'
  },
];

function HomeSection() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: '', body: '' });
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleShowToast = (title, body) => {
    setToastMessage({ title, body });
    setShowToast(true);
  };

  const handleMouseEnter = (id) => {
    setHoveredProductId(id);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <section id="home" className="home-section">
      <div className="carousel-container">
        <Carousel interval={3000} pause="hover">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="/images/slide1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h3>LOGO.</h3>
              <p>Unleash your individuality with our statement pieces, designed to inspire confidence and creativity</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="/images/Slide2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h3>MENS.</h3>
              <p>Discover the essence of elegance in every stitch, as fashion meets function effortlessly</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="/images/slide3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h3>WOMEN.</h3>
              <p>Elevate your style with our timeless pieces, crafted with precision and passion</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="/images/slide4.jpg"
              alt="Four slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h3>CHILDS.</h3>
              <p>Elevate your style with our timeless pieces, crafted with precision and passion</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="featured-products">
        <h2>Featured Brand</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleShowToast(product.name, `${product.name} added to cart!`)}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hoveredProductId === product.id ? product.image2 : product.image1}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        style={{ position: 'relative', minHeight: '100px' }}
      >
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <ToastMessage
            show={showToast}
            onClose={() => setShowToast(false)}
            title={toastMessage.title}
            body={toastMessage.body}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
