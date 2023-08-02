import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, userId, title, isCompleted } = location?.state;
  const [userIdCard, setUserIdCard] = useState(userId || "");
  const [titleText, setTitleText] = useState(title || "");
  const [completed, setCompleted] = useState(isCompleted || false);
  const [errortext, setErrorText] = useState("");

  const updateRecord = async (event) => {
    event.preventDefault();
    let updateRecord = {
      userId: userIdCard,
      title: titleText,
      completed: completed,
    };

    await axios
      .put(`http://localhost:3001/todos/${id}`,updateRecord)
      .then((response) => {
        if (response?.status === 200) {
          setErrorText("");
          navigate("/projects");
        }
      })
      .catch((error) => {
        setErrorText(error.message);
      });
    //  console.log(response);
  };
  return (
    <Form
      onSubmit={updateRecord}
      style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "40%" }}
    >
      <Form.Group className="mb-3" controlId="formBasicUserId">
        <Form.Label>UserID</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter UserID"
          name="userId"
          value={userIdCard}
          onChange={(event) => setUserIdCard(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTodo">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Todo"
          name="title"
          value={titleText}
          onChange={(event) => setTitleText(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Is Completed"
          name="isCompleted"
          checked={completed}
          onChange={(event) => setCompleted(event.target.checked)}
        />
      </Form.Group>
      <Button variant="warning" type="submit">
        Update
      </Button>
      {errortext && <h1 style={{ color: "red" }}>{errortext}</h1>}
    </Form>
  );
};

export default EditUser;
