import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";


const Login = () => {
    const loginNameRef = useRef();
    const loginPasswordRef = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        const email = loginNameRef.current.value;
        const password = loginPasswordRef.current.value;

        try {
            const response = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();
            console.log("Login response:", data);

            // Handle the response data as needed (e.g., set authentication token, redirect to dashboard, show error message)

        } catch (error) {
            console.error("Login error:", error);
            // Handle the error as needed (e.g., show error message)
        }
    };

    return (
        <Helmet title="Login">
            <section className="reg-design">
                <Container className="reg-form w-50">
                    <Row>
                        <h3 className="text-center mt-5">Login Now!</h3>
                    </Row>
                    <Row>
                        <Col lg='9' md=' 6' sm='12' className="m-auto text-center">
                            <form action="" className="form" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input type="email" placeholder="Email" required ref={loginNameRef} />
                                </div>
                                <div className="form__group">
                                    <input type="password" placeholder="Password" required ref={loginPasswordRef} />
                                </div>
                                <button type='submit' className="addTOCart__btn px-5 fs-6 fw-bold">Login</button>
                                <div className="px-3 fs-5 my-5 ">
                                    <p>No account yet? <Link to='/register'><span className="text-warning fw-bold">Click here..</span></Link></p>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;
