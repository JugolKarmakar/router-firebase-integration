import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import useFirebase from "../Hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div className="w-50 mx-auto">
      <h2 className="py-4 text-green-500">Login Please!!</h2>

      <button
        onClick={signInWithGoogle}
        class="rounded-full bg-cyan-500 py-2 px-5 text-white my-3"
      >
        Google Sign In
      </button>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
