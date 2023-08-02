import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './About.css';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';


const About = () => {
  return (
    <div>
    <div className="About">
      <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="https://media.licdn.com/dms/image/D5635AQE16EQ44kdMuw/profile-framedphoto-shrink_400_400/0/1683905532145?e=1686722400&v=beta&t=F5Rxw7bgIXAk1EhrDkiYMdvo3Tf7vf9XeG4V4rJHzsY" />
      <Card.Body>
        <Card.Title><h3>Dev.Manikanta</h3></Card.Title>
        <Card.Text>
          <p>Hii,This is Manikanta iam a  React Native  developer and undergone many of internships and projects in frontend development</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><h5>Desg : React Native Developer</h5></ListGroup.Item>
        <ListGroup.Item><h5>Phone :9866755883</h5></ListGroup.Item>
        <ListGroup.Item><h5>Email : Dmk.mani321@gmail.com</h5></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href=""><img src ='https://img.icons8.com/?size=1x&id=xuvGCOXi8Wyg&format=png'/>LinkedIn</Card.Link>
        <Card.Link href="">< img src ='https://img.icons8.com/?size=1x&id=63777&format=png'/>GitHub</Card.Link>
        <h6>If u want to see more details plz go through the below Accordian</h6>
      </Card.Body>
    </Card> 
    </div><br/><br/>
    <div className="About2">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h3>Educational Details</h3></Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover variant="info">
      <thead>
        <tr>
          
          <th>Qualificaton</th>
          <th>Institute</th>
          <td>Branch</td>
          <th>Year </th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>B.tech</td>
          <td>Avanthi scientific technology & research acadamy</td>
          <td>Mechatronics</td>
          <td>2019</td>

        </tr>
        <tr>
          
          <td>Diploma</td>
          <td>Tkr College of Engg & Tech</td>
          <td>Diploma in mechanical Designing</td>
          <td>2016</td>
        </tr>
        <tr>
          
          <td>SSC</td>
          <td>Satgyan Nethaji school</td>
          <td>---</td>
          <td>2013</td>
        </tr>
      </tbody>
    </Table>

          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h3>Technical SKills</h3></Accordion.Header>
        <Accordion.Body>
        <Card border="info" style={{ width: '40rem' }}>
        <Card.Header><h3>Technical SKills</h3></Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <h3>Html</h3>
            <h3>Css</h3>
            <h3>Javascript</h3>
            <h3>React.js</h3>
            <h3>React-Native</h3>
            <h3>Node</h3>
          </Card.Text>
        </Card.Body>
      </Card>
          
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

    

    </div>
  )
}
export default About;
