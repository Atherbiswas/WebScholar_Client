import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSide from '../Leftside/LeftSide';
import RightSide from '../RightSide/RightSide';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
  const courses = useLoaderData();
    return (
        <Container>
      <Row>
        <Col lg="4" sm="12">
            <LeftSide></LeftSide>
            </Col>
        <Col lg="8" sm="12">
          <Row className='g-4'>
             {
                courses.map(course => <RightSide
                key={course._id}
                course={course}
                ></RightSide>)
             }
          </Row>
             </Col>
      </Row>
    </Container>
    );
};

export default Courses;