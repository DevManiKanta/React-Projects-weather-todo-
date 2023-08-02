import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Navmini.css';

 const NavbarFunc = () => {
  return (
    <div >
        <br/>
        <Nav  justify variant="tabs" defaultActiveKey="">
      <Nav.Item className='navbar1'>
        <Nav.Link href="/"><h3>myweather</h3></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/About"><h3>About</h3></Nav.Link> 
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Contact"><h3>React-Todo Project</h3></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Projects" ><h3>Todolist-Project</h3></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/reduxcomp" ><h3>React-redux Project</h3></Nav.Link>
      </Nav.Item>
      <img src="https://cdn-icons-gif.flaticon.com/9197/9197782.gif" width={100}/><span></span>
    </Nav>
    
    </div>
    
  )
}
export default NavbarFunc;
