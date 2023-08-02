import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarFunc from "../src/Functional compo/Navbar"
import Home from "./Functional compo/pages/Home";
import About from "./Functional compo/pages/About";
import Contact from "./Functional compo/pages/Contact";
import Projects from "./Functional compo/pages/Projects";
import AddTodo from "./Functional compo/pages/AddTodo";
import EditUser from "./Functional compo/pages/EditLIst";
import CounterComp from "./Functional compo/redux/CounterComp";


function App() {
  return (
    <div>
      <NavbarFunc/><br/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/About" element ={<About/>} />
      <Route path="/Contact" element ={<Contact/>}/>
      <Route path="/Projects" element ={<Projects/>}/>
      <Route path="/addTodo"  element ={<AddTodo/>}/>
      <Route path="/editTodo/:id" element={<EditUser />} />
      <Route path ="reduxcomp"    element ={<CounterComp/>}/>
      
    
    </Routes>
    </div>
  )
}

export default App;
