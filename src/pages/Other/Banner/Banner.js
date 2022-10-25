import React from 'react';
import bannerImg from '../../../caurosel img/banner.png';
import Button from 'react-bootstrap/Button';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container section-padding'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-12'>
                    <div className='banner-img'>
                        <img src={bannerImg} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-12 ps-lg-4 mt-md-5'>
                    <div className='banner-text'>
                        <h2 className='fs-1'>We Provide Best Quality <br />Course Ever </h2>
                        <p className='fs-5'>We assure that we have trained educator and we provide best course than other.we are insure that if a student take this course course.They will benefited than other.</p>
                        <Button variant="warning" size="lg" className='fw-bolder'>LEARN MORE</Button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;