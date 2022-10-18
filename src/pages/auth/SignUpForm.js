
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    password1: '',
    password2: '',
  });
  const { username, password1, password2 } = signUpData;

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  return (
        <Row className={styles.Row}>
        <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
        <h1 className={styles.Header}>🤘sign up🤘</h1>

        <Form>
        <Form.Group controlId="username">
        <Form.Label className='d-none'>Username</Form.Label>
        <Form.Control
        type="text" 
        placeholder="Hardcore Username!"
        name="username"
        value={username}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="password1">
      <Form.Label className="d-none">Password</Form.Label>
      <Form.Control
      type="password"
      placeholder="Your inpossible Password"
      name="password1" 
      value={password1}
      onChange={handleChange}
      />
      </Form.Group>

      <Form.Group controlId="password2">
      <Form.Label className="d-none">Confirm Password</Form.Label>
      <Form.Control
      type="password"
      placeholder="Confirm your password that You wont remeber anyway"
      name="password2" 
      value={password2}
      onChange={handleChange}
      />
      </Form.Group>
      
    <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
    🦇Sign Up🦇
    </Button>
    </Form>
            
    </Container>


        <Container className={`mt-3 ${appStyles.Content}`}>
        <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in then!!</span>
        </Link>
        </Container>

      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src=
          "https://res.cloudinary.com/kolle1993/image/upload/v1666079374/ab6761610000e5eb38d63710f714dae7fc30757d_no1zwo.jpg"
          alt='chester from linking park'
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;