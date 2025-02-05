import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { updateSeminar } from "../api";

const EditSeminarForm = ({ currSeminar, setCurrSeminar, setSeminars, setIsLoading }) => {
  let [description, setDescription] = useState(currSeminar.description);
  let [title, setTitle] = useState(currSeminar.title);

  const handleUpdate = () => {
    setIsLoading(true);
    let newSeminar = {
      ...currSeminar,
      description,
      title,
    };
    updateSeminar(newSeminar).then(() => {
      setSeminars((prev) => prev.map((s) => (s.id === newSeminar.id ? newSeminar : s)));
      setCurrSeminar(null);
      setIsLoading(false);
    });
  };

  return (
    <Modal show={!!currSeminar} onHide={() => setCurrSeminar(null)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleUpdate}>
          Update Item
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditSeminarForm;
