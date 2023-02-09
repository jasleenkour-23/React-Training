import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  Card,
  Container,
  Row,
  Form,
  Button,
  Col,
  FloatingLabel,
 
} from "react-bootstrap";
import "./Login.css";
export default function Login() {
  return (
    <div className="Box">
    <Container className=" d-flex justify-content-center align-items-center">
      <Card>
        <Card.Body>
          <Row>
            <Col lg="6" sm="12">
              <img
                src="images/r.png"
                alt="image"
                width={"100%"}
                height={"100%"} 
              />
            </Col>
           
            <Col lg="6" sm="12">
              <img
                src="images/rl.png"
                alt="logo"
                height={"100px"}
                width={"100px"}
              />
              <h1 style={{fontFamily:'monospace',color:'deepskyblue'}}>Welcome to Family</h1>
              <p style={{fontSize: '13px',color:'dimgray'}}>
                A workspace to over 12 Million influencers around the global
                world.
              </p>

              <Form>
            

                <FloatingLabel controlId="floatingInput" label="Email Address">
                  <Form.Control type="email" placeholder="Email Address" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingPassword"
                  label="Repeat Password"
                >
                  <Form.Control type="password" placeholder="Repeat Password" />
                </FloatingLabel>

                <FloatingLabel label="Phone Number" className="mb-3">
                  <Form.Control type="number" placeholder="Phone Number" />
                </FloatingLabel>
              </Form>

              <Button variant="primary" type="submit">
                Sign Up Now
              </Button>
              <Button variant="light" type="submit" style={{ color: "dimgray" }}>
                Get Login
              </Button>
              <p className="pt-2" style={{ color: "gray", fontSize: "11px" }}>
                Or you can join with
              </p>
              <span>
                <FcGoogle style={{ fontSize: "45px", paddingRight: "15px" }} />
                <BsFacebook style={{ fontSize: "29px", color: "darkblue" }} />
                <AiFillTwitterCircle
                  style={{
                    fontSize: "36px",
                    color: "deepskyblue",
                    marginLeft: "20px",
                  }}
                />
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
}
