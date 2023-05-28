import "../styles/checkout.css";
import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { AiFillCheckCircle } from "react-icons/ai";





const Message = () => {
    return (

        <Helmet title='Message'>
            <div className="checkoutMessage">
              <div className="checkoutTitleContainer">
                <AiFillCheckCircle className="checkoutIcon" />
                <h3>Thank you for your order!</h3>
              </div>
              <span>
                Your order is being processed and will be delivered as fast as
                possible.
              </span>
            </div>

        </Helmet>
         
        );
};

export default Message;