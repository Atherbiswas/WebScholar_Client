import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaDownload } from 'react-icons/fa';
import { jsPDF } from "jspdf";

const CourseDetails = () => {
    const course = useLoaderData();
    const {course_name,img_url,duration,for_class,educator,price,course_details,rating} = course;

    const pdfGenerator = () => {
      const doc = new jsPDF();
      doc.text("W E L C O M E-W E B S C H O L A R", 10, 10);
      doc.save("Course.pdf");
    }
    return (
        <div className='container mt-5'>
            <Card style={{width: '32rem'}} className='shadow-lg border border-0'>
            <Card.Img variant="top" style={{width: '100%', height: '250px'}} src={img_url} />
      <Card.Body>
      <Card.Title className='fw-bold'>Course Name:{course_name} </Card.Title>
        <Card.Text>
        <h6><span className='fw-bolder'>Syllabus:</span>
        {course_details}</h6>
        <h6>Duration: {duration}</h6>
          <h6>For Class: {for_class}</h6>
          <h6>Educator: {educator}</h6>
          <h6>Price: {price}</h6>
          <h6>Rating: {rating}</h6>
        </Card.Text>
        <Link to='/courses' className='btn btn-warning mx-2'>Back</Link>
        <Link to='/enroll' className='btn btn-warning mx-2'>Enroll Now</Link>
        <Button onClick={pdfGenerator} variant="warning"> <FaDownload></FaDownload> Download Pdf</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseDetails;