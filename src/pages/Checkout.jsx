import "../styles/checkout.css";
import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import guyImg from "../assets/images/hero-banner.gif";



const Checkout = () => {

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const submitHandler = e => {
    e.preventDefault()
}

  return <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='7' md='6'>
              <h5 className="mb-4">Shipping Details</h5>
                <form className="checkout__form" onSubmit={submitHandler}>
                  <div className="form__group">
                    <input type="text" placeholder="Enter your name" required/>
                  </div>

                  <div className="form__group">
                    <input type="email" placeholder="Enter your email address" required/>
                  </div>

                  <div className="form__group">
                    <input type="number" placeholder="Enter your contact number" required/>
                  </div>

                  <div className="form__group">
                    <input type="text" placeholder="Enter your full address" required/>
                  </div>
                </form>
            </Col>
            <Col lg='5' md='6'>
            <div className="hero__img text-center">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
              
            <div className="checkout__bill text-center">
                <h6 className="my-4 fs-4">Total Amount: ₱<span>{totalAmount}</span></h6>
            </div>

            <div className="text-center">
              <button className="addTOCart__btn" type="submit">
              <Link to="/message">Place Order</Link>  
              </button> 
            </div>
            </Col>

          </Row>
        </Container>
      </section>
  </Helmet>
  // return (
  //   <>
  //     <div className="checkoutMessage">
  //       <div className="checkoutTitleContainer">
  //         <AiFillCheckCircle className="checkoutIcon" />
  //         <h3>Thank you for your order!</h3>
  //       </div>
  //       <span>
  //         Your order is being processed and will be delivered as fast as
  //         possible.
  //       </span>
  //     </div>
  //   </>
  // );
};

export default Checkout;
