import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../../../caurosel img/carousel-2.jpg';
import img3 from '../../../caurosel img/carousel-3.jpg';
import Button from 'react-bootstrap/Button';
import './CarouselSlide.css'


const CarouselSlide = () => {
    return (
        <Carousel className='container section-padding'>
      <Carousel.Item className='carousel-item'>
        <img
        style={{height: '500px'}}
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h4>Learning New Things With WEBSCHOLAR</h4>
          <p>WEBSCHOLAR is as like a online school.Here student take different courses with interesting environment.</p>
          <Button variant="warning" size="lg">
          ENROLL NOW
        </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{height: '500px'}}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h4>Learning New Things With WEBSCHOLAR</h4>
          <p>WEBSCHOLAR is as like a online school.Here student take different courses with interesting environment.</p>
          <Button variant="warning" size="lg">
          ENROLL NOW
        </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default CarouselSlide;