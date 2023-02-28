import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showUser, setShowUser] = useState(false);

  const handleSubmit = (e: any) => {
    setShowUser(false);
    e.preventDefault();
    if (validateEmail(email)) {
      setShowUser(true);
      setError("");
      return;
    }
    setError("Email is not valid");
    return false;
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setShowUser(false);
  };

  return (
    <Container>
      <h2>Signup Form</h2>
      {showUser && (
        <Alert data-testid="user" variant="success">
          {email}
        </Alert>
      )}
      {error && (
        <Alert data-testid="error" variant="danger">
          {error}
        </Alert>
      )}
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-left">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button data-testid="submit" variant="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="secondary"
          data-testid="reset"
          onClick={resetForm}
          style={{ marginLeft: "5px" }}
        >
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)) {
    return true;
  }
  return false;
};
export default SignupForm;