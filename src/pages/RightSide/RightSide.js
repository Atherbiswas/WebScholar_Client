import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const RightSide = ({course}) => {
    const {course_name,img_url,duration,for_class,educator,price,course_details} = course;
    return (
        <Col lg={6}>
        <Card className='shadow-lg border border-0'>
        <Card.Img variant="top" style={{width: '100%', height: '250px'}} src={img_url} />
        <Card.Body>
          <Card.Title className='fw-bold'>Course Name:{course_name} </Card.Title>
          <Card.Text><span className='fw-bolder'>Syllabus:</span>
            {
              course_details.length > 200 ? 
              <>{course_details.slice(0, 200) + '...'} <Link>Show details</Link></> : course_details
            }
          </Card.Text>
          <h6>Duration: {duration}</h6>
          <h6>For Class: {for_class}</h6>
          <h6>Educator: {educator}</h6>
          <h6>Price: {price}</h6>
        </Card.Body>
        <Card.Footer>
        <Button variant="outline-warning" className='w-100 text-dark fw-bold fs-5'>Enroll Now</Button>
        </Card.Footer>
      </Card>
        </Col>
    );
};

export default RightSide;