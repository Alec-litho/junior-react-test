import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const SeminarList = ({ seminars, setCurrSeminar }) => {
  return (
    <Container className="my-4">
      <Row>
        {seminars.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Footer>
                  <Button variant="danger" onClick={() => {}}>
                    Delete
                  </Button>
                  <Button variant="primary" onClick={() => setCurrSeminar(item)}>
                    Edit
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SeminarList;
