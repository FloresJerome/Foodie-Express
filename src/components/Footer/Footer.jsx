import React from "react";
import {Container, Row, Col, ListGroup} from "reactstrap";
import logo from "../../assets/images/service-02.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='12' sm='6' className="px-5">
            <div className="footer__logo text-center px-1 mt-3">
              <img src={logo} alt="logo" className="m-2" />
              <h5 className="fs-5">Foodie Express</h5>
              
            </div>
          </Col>

          <Col lg='3' md='12' sm='6' className="px-4 text-center">
              <div>
                <h5 className="footer__title mt-4 fs-5">Delivery Time</h5>
                <ListGroup>
                  <div className="delivery__time-item border-0 ps-0 d-flex justify-content-center">
                    <span>Weekdays: 9:00am - 8:00pm</span>
                    <p></p>
                  </div>
                  <div className="delivery__time-item border-0 ps-0 d-flex justify-content-center">
                    <span>Weekends: 8:00am - 10:00pm</span>
                    <p></p>
                  </div>
                </ListGroup>
              </div>
          </Col>
          
          <Col lg='3' md='12'  className="px-4 text-center">
            <h5 className="footer__title mt-4 fs-5">Contact</h5>
            <ListGroup>
                  <div className="delivery__time-item border-0 ps-0 d-flex justify-content-center">
                    <span>Phone: 09247862138</span>
                    
                  </div>
                  <div className="delivery__time-item border-0 ps-0 d-flex justify-content-center">
                    <span>Email: example@gmail.com</span>
                    
                  </div>
                </ListGroup>
          </Col>

          <Col lg='3' md='12' sm='6' className="px-5 text-center">
           <h5 className="footer__title mt-4 fs-5">Follow Us</h5>
                <ListGroup>
                  <div className="delivery__time-item border-0 ps-0 d-flex justify-content-center">
                    <span><Link to='#'><i class="ri-facebook-line"></i></Link></span>
                    <span><Link to='#'><i class="ri-instagram-line"></i></Link></span>
                  </div>
                  
                </ListGroup>

          </Col>

        </Row>
        <Row>
          <Col lg='12' md='12' sm='6' className="mt-5 text-center fw-bold fs-5 d-flex justify-content-center">
          <p>© Foodie Express 2023, All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
      {/* <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>Foodie Express</h5>
        <p>Hundreds of flavors under one roof!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Weekdays</span>
            <p>9:00am - 8:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Weekends</span>
            <p>8:00am - 10:00pm</p>
          </div>
        </ListGroup>
      </div> */}
    </footer>
  );
};

export default Footer;
