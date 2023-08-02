
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import  "./Contact.css"

 const Contact = () => {
  const [todo,setTodo] = useState([]);
  const [newtodo, setNewTodo] = useState("");
  const [editId,setEditId]=useState(0);

  function submitinput(e){
    setNewTodo(e.target.value);
  }
  function Addtodo(){
    setTodo([...todo,newtodo]);
    
  }
  function DelTodo(index){
     var x =[...todo];
     x.splice(index,1);
     setTodo([...x])
    todo.value = "";

  }
  const handleEdit = (id) => {
    const editTodo = todo.find((i) => i.id===id);
    setNewTodo(editTodo.newtodo);
    
  };
  


  return (
    <div >
      <h2 style={{color:"green"}}>My-Todo-App</h2>
      <div className='card1'>
        <input type='text' value={newtodo} onChange={submitinput}/> &nbsp;
        <Button variant="primary" onClick={Addtodo}>{editId?"Edit":"submit"}</Button>
        <ul>
          {
            todo.map((t,index)=>(
              
               <li keys={index}>{t}
               <Button className='bttn' variant="primary" onClick={(i)=>{DelTodo(i)}}>Delete</Button>
               <Button className='bttn' variant="info" onClick={()=>handleEdit(t.id)}>Edit</Button>
            
                
               </li>
              
            ))

          }
        </ul>
      
      </div>
    </div>
  )
}
export default Contact;