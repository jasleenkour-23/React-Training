import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import "./Login.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
export default function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card>
        <Card.Body>
          <div className="header">
            <h3
              className="mb-3"
              style={{
                textAlign: "center",
                fontSize: "35px",
                fontWeight: "700",textShadow: '2px 2px 4px #000000'
              }}
            > 
              Login
            </h3>
          </div>
          <div className="body">
            <Row>
              <Col>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="name"
                  className="mb-3"
                  placeholder="username@exp.com"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className="mb-1"
                  placeholder="password"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h6
                  className="mb-3"
                  style={{ fontSize: "10px", color: "gray" }}
                >
                  Forgot password?
                </h6>
              </Col>
            </Row>

            <div className="d-grid gap-2">
              <Button size="lg">Login</Button>
            </div>
          </div>
          <p
            className="pt-4"
            style={{
              fontSize: "12px",
              textAlign: "center",
              color: "gray",
              fontWeight: "500",
            }}
          >
            Or Sign Up Using{" "}
          </p>

          <div className="footer">
            <BsFacebook
              style={{ color: "purple", fontSize: "40px", margin: "10px" }}
            />
            <AiFillTwitterCircle
              style={{ color: "blue", fontSize: "40px", margin: "10px" }}
            />
            <AiFillGoogleCircle
              style={{ color: "green", fontSize: "40px", margin: "10px" }}
            />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
