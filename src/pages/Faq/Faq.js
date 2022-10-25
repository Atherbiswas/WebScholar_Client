import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='container section-padding'>
            <h1 className='text-center'>Frequently Asked Question (FAQ)</h1>
            <Accordion className='w-75 mx-auto mt-4'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
            <h5>Who are these courses for?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <p className='fw-semibold'>Those who are interested in online based learning and complete 2 years syllabus in 1 year with hardwork.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
            <h5>Why should you take these courses?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <p className='fw-semibold'>If you want to complete your syllabus within 1 year with hard work and want to score well in public exams then courses are for you because we complete them responsibly.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
            <h5>How to get the course videos?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <p className='fw-semibold'>Course videos will be pre-recorded.You should account and enroll in this course.Video will be give one module per day from the start of the course.Each module usually has 5 to 7 videos.You have to finish these videos within the day they are released.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
            <h5>What to do if you got stuck somewhere while following the courses?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <p className='fw-semibold'>We have created a secret Facebook group for the courses.Our target is to answer all your Question within 24 hours.Most of the fines instant reply is given.On the average al answers will be received within 6-8 hours.Every 2 days later we take a conceptual session.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
            <h5>Is the courses content final?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <p className='fw-semibold'>We add new system and modules daily based on the student feedback.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
            <h5>In addition to these ,if I have more question where should I do it?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <p className='fw-semibold'>No tension.Please send any qusetion you have to support@webscholar.com.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            
        </div>
    );
};

export default Faq;