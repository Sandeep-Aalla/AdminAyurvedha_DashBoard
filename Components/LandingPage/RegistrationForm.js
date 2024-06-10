import { useState ,useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './RegistrationForm.css';
function RegistrationForm() {
  
    const [customerName, setCustomerName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const win=window.sessionStorage;
    const handleSubmit=(e)=>{
      e.preventDefault();
      win.clear();
      setCustomerName('');
      setMobileNumber('');
      setEmailId('');
      setPassword('');
     
    }
    useEffect(()=>{
      if(win.getItem('customerName'))
      setCustomerName(win.getItem('customerName'))
      if(win.getItem('mobileNumber'))
      setMobileNumber(win.getItem('mobileNumber'))
      if(win.getItem('emailId'))
      setEmailId(win.getItem('emailId'))
      if(win.getItem('password'))
      setPassword(win.getItem('password'))
    
    },[])
    useEffect(()=>
    {
      win.setItem('customerName',customerName);
      win.setItem('mobileNumber',mobileNumber);
      win.setItem('emailId',emailId);
      win.setItem('password',password);
    },[customerName,mobileNumber,emailId,password])
    

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8082/register/customer", {
            customerName: customerName,
            mobileNumber: mobileNumber,
            emailId: emailId,
            password: password,
          });
          setRegistrationSuccess(true);
          window.location.reload();
        } catch (err) {
          // Handle registration failure
          console.error(err);
        }
      }
  
    return (
      <div className="card" style={{marginTop:"10%",marginLeft:"10%",marginRight:"5%"}}>
       
    
    <div className="logs" >
      <h2 className="card-header"style={{ textAlign: "center" }} > Create An Account</h2>
      {registrationSuccess && <p id="name">Registration success</p>}
      <form className="reg" onSubmit={save}>
        <label>Customer name</label>
        <input
          type="text"
          className="form-control"
          id="customername"
          placeholder="Enter Name"
          value={customerName}
          onChange={(event) => {
            setCustomerName(event.target.value);
          }}
          required
        />
      
        <label>Mobile Number</label>
        <input
          type="text"
          className="form-control"
          id="employeename"
          placeholder="Enter Number"
          pattern="[6-9]{1}[0-9]{9}" 
          value={mobileNumber}
          onChange={(event) => {
            setMobileNumber(event.target.value);
          }}
          required
        />
        
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter Email"
          value={emailId}
          onChange={(event) => {
            setEmailId(event.target.value);
          }}
          required
        />
 
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
         
        <button
          type="submit"
          className="btn btn-success mt-4 w-50"
          style={{marginLeft:"130px"}}
        >
          Register
        </button>
        <br/><br/>
        <Link
          to='/LoginForm'
          className='btn btn-primary border w-50'
          style={{marginLeft:"130px", marginBottom:"20px"}}
        >
          Login
        </Link>
        
      </form>
    </div>
    </div>
  );
}

export default RegistrationForm;
