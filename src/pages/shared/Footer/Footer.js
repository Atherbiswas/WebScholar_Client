import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaYoutube, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import './Footer.css'
import Form from 'react-bootstrap/Form';

const Footer = () => {
    return (
        <div className='section-padding bg-dark text-light'>
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="12">
                        <h4>Contact Us</h4>
                        <hp>Tel: +8801700112233</hp>
                        <p>Email: support@webscholar.com</p>
                        <Button variant="warning" size="lg" className='mb-3'>CONTACT US</Button>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <h4>Follow Us</h4>
                        <p> <FaFacebook></FaFacebook> Facebook</p>
                        <p> <FaYoutube></FaYoutube> YouTube</p>
                        <p><FaLinkedin></FaLinkedin> Linkedin</p>
                        <p> <FaWhatsappSquare></FaWhatsappSquare> WhatsApp</p>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <h4>Never Miss Out</h4>
                        <p>Subscribe to our newsletter to receive updates from our blog.You can Unsubscribe at any time</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={2} placeholder='Enter your message'/>
                            </Form.Group>
                            <Button variant="warning" size="lg">Subscribe</Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;