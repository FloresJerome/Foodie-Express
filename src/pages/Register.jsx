import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/register.css";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  async function signUp() {
    console.warn(name, password, email, phone, address);
    let item = { name, password, email, phone, address };

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    signUp();
  };

  return (
    <Helmet title="Register">
      <section className="reg-design">
        <Container className="reg-form w-50">
          <Row>
            <h3 className="text-center mt-5">Sign Up Now!</h3>
          </Row>
          <Row>
            <Col lg="9" md="6" sm="12" className="m-auto text-center">
              <form action="" className="form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>

                <div className="form__group">
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                  />
                </div>

                <div className="form__group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>

                <button type="submit" className="addTOCart__btn px-5 fs-6 fw-bold">
                  Sign Up
                </button>

                <div className="px-3 fs-5 my-5 ">
                  <p>
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="text-warning fw-bold">Login here..</span>
                    </Link>
                  </p>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export
 default Register;

