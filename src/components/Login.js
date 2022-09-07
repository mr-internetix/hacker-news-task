import React from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";

function Login() {
  const [loginData, setloginData] = useState({username: '' , password : ''});

  function handleLoginData() {
    // setloginData({})
    // console.log(loginData)
  }
  return (
    <div className="d-flex align-items-center justify-content-center flex-column vh-100  vw-100 bg-dark">
      <Container>
        <h1 className="text-center text-primary mt-5"> Welcome </h1>{" "}
        <Stack>
          <FloatingLabel
            controlId="floatingUsername"
            label="Enter Username"
            className="mb-3 mt-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
            />{" "}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Enter password"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter Password"
              name="password"
            />{" "}
          </FloatingLabel>
          <div className="text-center">
            <Button variant="success" className="px-lg-5  w-25" onClick={handleLoginData}>
              {" "}
              Login{" "}
            </Button>{" "}
          </div>{" "}
        </Stack>{" "}
      </Container>{" "}
    </div>
  );
}

export default Login;
