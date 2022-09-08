import React from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { useState , useRef } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Homepage from "./Homepage";
import Alert from 'react-bootstrap/Alert';


function Login() {

  const username=useRef()
  const password=useRef()
  const [show, setShow] = useState(false)
  const [loggedin , setLoggedin] = useState(localStorage.getItem("login"))

  function handleLoginData() {
    setShow(true)
    if(username.current.value.trim() !== "admin" && password.current.value.trim() !== "admin"){
      setShow(true)
      console.log("it is running")
    }
    if(username.current.value.trim() ==="admin"&&password.current.value.trim() ==="admin"){
      localStorage.setItem("login","true")
      setLoggedin(true)

     }
  }
  return (loggedin ? <Homepage/> :

    <div className="d-flex align-items-center justify-content-center flex-column vh-100  vw-100 bg-dark">
      {show ?  <Alert variant="danger" onClose={() => setShow(false)} className="w-50"dismissible>
        <Alert.Heading>Username Or Password is Incorrect </Alert.Heading>
        x
      </Alert> : '' }
      
      <Container className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-center text-primary mt-5"> Welcome </h1>{" "}
        <Stack className="d-flex align-items-center">
          <FloatingLabel
            controlId="floatingUsername"
            label="Enter Username"
            className="mb-3 w-50 mt-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              ref={username}
            />{" "}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Enter password"
            className="mb-3 w-50"
          >
            <Form.Control
              type="text"
              placeholder="Enter Password"
              name="password"
              ref={password}
            />{" "}
          </FloatingLabel>
          
        </Stack>{" "}
        <div className="text-center">
            <Button
              variant="success"
              className="px-lg-5 text-center"
              onClick={handleLoginData}
            >
              {" "}
              {show ? <Spinner animation="border"/> : "Login"}{" "}
            </Button>{" "}
          </div>{" "}
      </Container>{" "}

      
    </div>
  );
}


export default Login;
