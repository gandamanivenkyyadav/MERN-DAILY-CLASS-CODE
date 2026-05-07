import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';


function Login() {
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
    otp :"",
  });

  const handlelogin = (e) => {
    e.preventDefault();
    console.log(loginDetails);
    toast.success("Login successfully!")
    setloginDetails({
      email: "",
      password: "",
      otp: "",
    })
  }
   const handleReset =()=> {
    setloginDetails({
      email: "",
      password: "",
      otp:'',
    })
  }

   const handleChange = (e) => {
    setloginDetails({ ...loginDetails, [e.target.name]: e.target.value })
  }
 const generateOtp = ()=> {
  let generatedOtp = Math.floor(Math.random()*1000000);
  emailjs.sendForm("service_sd04c06","template_ns7o1nh",{ email:loginDetails.email},"OSTQ9lsyYuXZBzW2H")
    
  toast.success("OTP send to your mail successfully")


 let time = new Data();
  let expairedTime = '${time.getHours()}:${time.getMinutes()}:00'
 // console.log(expairedTime);
  
 }

  return (
    <div id='form-container'>
            <Form onSubmit={handlelogin}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"  placeholder="Enter Email" required name="email" onChange={handleChange} value={loginDetails.email}/>
          </Form.Group>
        </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"  placeholder="Enter password" required name="password" onChange={handleChange} value={loginDetails.password}/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
       <Col><Button type='button' onClick={generateOtp}>Generate Otp</Button></Col>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="number"  placeholder="Enter otp"  required name="otp" onChange={handleChange} value={loginDetails.otp} className='otp-in'/>
          </Form.Group>
        </Row>
       
        <Form.Group className="mb-3">
          <span>If you don't have an account? <b><a href="/register">Register</a></b></span>
        </Form.Group>

        <Button variant="primary" type="submit" style={{margin : "10px 30px"}}>
          Submit
        </Button>
        <Button variant="danger" type="reset" onClick={handleReset}>Cancle</Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Login;
//npm install react-toastify