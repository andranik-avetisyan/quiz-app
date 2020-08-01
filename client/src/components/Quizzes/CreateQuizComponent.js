import React, { useState } from 'react';
import axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap';

export const CreateQuiz = () => {
  const [quiz, setQuiz] = useState('');
  const [status, setStatus] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/quizzes/', { quiz, status })
      .then((response) => {
        console.log(response.data.status)
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleQuizChange = (e) => {
    setQuiz(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Form>
      <Form.Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Quiz
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Quiz name"
            onChange={handleQuizChange}
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" srOnly>
            Status
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Status"
            onChange={handleStatusChange}
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2" onClick={handleClick}>
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default CreateQuiz;
