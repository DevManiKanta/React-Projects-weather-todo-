import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import './WeatherApp.css';
import Card from 'react-bootstrap/Card';

export const WeatherApp = () => {
 const [city,setCity] = useState("");
 const [data,setData] = useState("");

 const changehandler = (e)=>{
    setCity(e.target.value);
 }

 const submitHandler =(e)=> {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
        response=> response.json()).then(
          data => {
            const kelvin = data.main.temp;
            const celcius = kelvin - 273.15;
            setData("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
          }
        ).catch(error => console.log(error))
        
        }
 
  return (
    <div className ='myweather'>
        <div className='card1'>
        <form onSubmit = {submitHandler} >
        <h1 style={{color:'blue'}}><u>My-WeatherApp</u></h1><br/>
            <input type='text' placeholder='Enter city name' name="city" value={city} onChange ={changehandler}/> &nbsp;
            <Button><img src='https://cdn-icons-gif.flaticon.com/6454/6454035.gif' width={75}/><br/>Search</Button>
        </form>
        </div>
            <div className='card2'>
            <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title><center></center><h4>Result:</h4></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
            <center><img src="https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_1280.jpg" width={250} alt=""/></center>
          <center><h1 style={{ color :"blueviolet"}}>{data}</h1></center>
        </Card.Text>
      </Card.Body>
    </Card>     
 </div>
    </div>

  );
}
export default WeatherApp;
//<center><h1>{data}</h1></center> 