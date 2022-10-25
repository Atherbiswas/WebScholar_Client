import React from 'react';
import { FaBookOpen, FaUserTie, FaUserFriends } from 'react-icons/fa';

const About = () => {
    return (
        <div className='container section-padding'>
            <h1 className='text-center mb-3'>Our Manngement</h1>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-12'>
                    <div className='text-center bg-info p-1 rounded-4'>
                    <div><FaBookOpen className='fs-1'></FaBookOpen></div>
                    <hr />
                    <h1>10+</h1>
                    <h4>Courses</h4>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                <div className='text-center bg-info p-1 rounded-4'>
                    <div><FaUserTie className='fs-1'></FaUserTie></div>
                    <hr />
                    <h1>25+</h1>
                    <h4>Educator</h4>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                <div className='text-center bg-info p-1 rounded-4'>
                    <div><FaUserFriends className='fs-1'></FaUserFriends></div>
                    <hr />
                    <h1>2.5k +</h1>
                    <h4>Student</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;