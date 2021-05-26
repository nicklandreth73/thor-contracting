import React from "react";
import Form from "react-bootstrap/Form";
import { Card, Button } from "react-bootstrap";

export default function ContactForm() {
  return (
    <Card className="contact-card" style={{ width: "100rem" }}>
      <Card.Body>
        <h1 className="form-title">How can we help you?</h1>
        <Form className="form">
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="you@gmail.com"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="phone"
              placeholder="1-555-555-5555"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea"></Form.Control>
          </Form.Group>
          <Button
            type="submit"
            variant="danger"
            className="contact-button"
            size="lg"
            block
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
