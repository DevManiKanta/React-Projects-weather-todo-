import React,{useState,useEffect} from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const  Projects = () => {
let [result, setResult] = useState([]);
const navigate = useNavigate();
    useEffect( ()=>{
        getTododata();
    },[]);

 const getTododata = async()=>{
        let resp =await axios.get("http://localhost:3001/todos");
       setResult(resp.data);
          
    } 

    const deleteRecord = async (todoId) => {
      let response = await axios.delete(`http://localhost:3001/todos/${todoId}`);
      //console.log(response);
      if(response.status===200){
        getTododata();
      }
    };
  return (
    
    <div>
      <Button variant="success" onClick={()=>{navigate("/addTodo");}}>Add Data</Button><br/>
      
        <Table striped bordered hover variant="info">
      <thead>
        <tr>
          <th>Sno</th>
          <th>User Id</th>
          <td>Todo Title name</td>
          <th >Is Completed</th>
          <th colSpan={4} style={{textAlign:'center'}}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
           result.length>0 ?
            (result.map((eachtodo)=>(
                <tr key ={eachtodo.index}>
                    <td>{eachtodo.id}</td>
                    <td>{eachtodo.Userid}</td>
                    <td>{eachtodo.title}</td>
                    <td>{eachtodo.completed? 'yes':'NO'}</td>
                    <td><Button variant="warning" 
                    onClick={() =>
                      navigate(`/edittodo/${eachtodo.id}`, {
                        state: {
                          id: eachtodo.id,
                          userId: eachtodo.userId,
                          title: eachtodo.title,
                          isCompleted: eachtodo.completed,
                        },
                      })
                    } 
                    >Update</Button></td>
                    <td><Button variant="danger" 
                    onClick={() =>deleteRecord(eachtodo.id)}>Delete</Button></td>
                    <td><Button variant="dark">Strike-Off</Button></td>
                </tr>)   
            )):(<tr><td>Data Not available</td></tr>)

        
             
        }
       
      </tbody>
    </Table>
    </div>
  )
}
export default Projects;
