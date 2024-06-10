import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({
    customerId: "",
    customerName: "",
    mobileNo: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [registrationStatus, setRegistrationStatus] = useState(""); // To track registration status

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmpassword) {
      try {
        // Make a POST request to your backend registration API
        await axios.post('http://localhost:2007/addcustomer', formData);

        // If the request is successful, set registration status to success
        console.log("Registration successful");
        setRegistrationStatus("success");
      } catch (error) {
        console.error("Error:", error);
        setRegistrationStatus("error"); // Set registration status to error if there's an error
      }
    }
     else {
      alert("Passwords do not match");
    }
  };

  const { customerId, customerName, mobileNo, email, password, confirmpassword } = formData;

  return (
    <div className="card"  style={{marginTop:"5%"}}>
      <center>
        <form onSubmit={handleSubmit}>
        <h1>Create An Account</h1>
          <label>
            Customer ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="customerId" value={customerId} placeholder="Enter Customer ID" onChange={handleChange} required />
          </label><br/><br/>

          <label>
            Customer Name:
            <input type="text" name="customerName" value={customerName} placeholder="Enter Customer Name" onChange={handleChange} required/>
          </label><br/><br/>

          <label>
            Mobile Number:
            <input type="number" name="mobileNo" value={mobileNo} placeholder="Enter Mobile Number" onChange={handleChange} required/>
          </label><br/><br/>

          <label>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="email" name="email" value={email} placeholder="Enter Email" onChange={handleChange} required/>
          </label><br/><br/>

          <label>
            Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" name="password" value={password} placeholder="Enter Password" onChange={handleChange} required/>
          </label><br/><br/>

          <label>
            Confirm Password:
            <input type="password" name="confirmpassword" value={confirmpassword} placeholder="Confirm Password" onChange={handleChange} required/>
          </label><br/><br/>

          <input type="submit" value="Submit" className="register-button" />
          <br></br>
          <br></br>
          <Link to="/CustomerLogin"><button className='btn btn btn-primary border '>Login</button></Link>
        </form>
        {registrationStatus === "success" && (
          <div className="success-message">Registration successful!</div>
        )}
        {registrationStatus === "error" && (
          <div className="error-message">Registration failed. Please try again.</div>
        )}
      </center>
    </div>
  );
};

export default Register;
