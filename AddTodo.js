import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo =() => {
    const [userId , setUserId] = useState(" ");
    const [title, setTitle] = useState("");
    const [completed,setCompleted] =useState( false);


    const navigate = useNavigate();
    const CreateTodo = async(e)=>{
      e.preventDefault();

      let newRecord = {
        userId : userId,
        title : title,
        Completed: completed
      }
      let Response = await axios.post("http://localhost:3001/todos",newRecord)
        if(Response.status == 201){
            navigate("/Projects");

        }
         
    }
  return (
    <div>
        <Form onSubmit = {CreateTodo} style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "40%" }}>
      <Form.Group className="mb-3" controlId="formBasicUserId" >
        <Form.Label>User-ID</Form.Label>
        <Form.Control type="number" placeholder="Enter UserID" name ="userId" onChange={(e)=>setUserId(e.target.value)}/>

      </Form.Group>
ser
      <Form.Group className="mb-3" controlId="formBasicTodo">
        <Form.Label>Todo-Title name</Form.Label>
        <Form.Control type="text" placeholder = "Enter Todo-name" name ="title"  onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="IsCompleted" name ="completed" onChange={(e)=>setCompleted(e.target.checked)} />
      </Form.Group>
      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
export default AddTodo; 
