import React from 'react';
import { Link } from 'react-router-dom';

const Enroll = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-center fs-1'>YAYY, SUCCESSFULLY ENROLLED!!! </h1>
            <br /><br /><br />
            <h2 className='text-center'>START COURSE.....</h2>
            <br /><br /><br />
            <h3 className='text-center'>HAPPY JOURNEY.</h3>
            <br /><br /><br />
            <Link to='/courses' className='btn btn-warning mx-auto'>Back</Link>
        </div>
    );
};

export default Enroll;