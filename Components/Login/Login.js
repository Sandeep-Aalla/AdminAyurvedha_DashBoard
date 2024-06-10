import React, { useEffect, useState } from 'react';
import './Login.css';
//import {Link,useNavigate} from 'react-router-dom';
import logo from './log.png';
import welcomeimg from './ayurveda2.avif';
import{Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

function Login() {
  const [email, setemail] = useState("");
  const [passval, setpassval] = useState("");
  // const navigate = useNavigate();
  const [defaultemail, setEmail] = useState("Admin@gmail.com");
  const [defaultpwd, setPwd] = useState("Mouni");
  const [LoginSuccess,setLoginSuccess]=useState(false);

  const [auth,setAuth] = useState(false);
  const win=window.sessionStorage;
  const handleSubmit=(e)=>{
    e.preventDefault();
    win.clear();
    setemail('');
    setpassval('');
  }
  useEffect(()=>{
    if(win.getItem('email'))
    setemail(win.getItem('email'))
    if(win.getItem('passval'))
    setpassval(win.getItem('passval'))
  
  },[])
  useEffect(()=>
  {
    win.setItem('email',email);
    win.setItem('passval',passval);
  },[email,passval])
  
  if(auth){
    return <Redirect to ='/sidebar'/>
  }
  function login() {
    if(email!= "" && passval != ""){
    let isLogged = checkIfUserIsValid();
    if (isLogged) {
     
      // navigate("/Home");
      // setLoginSuccess(true);
      setAuth(true);

    
    } 
    else {
      // navigate("/Failure");
      //alert("Something went wrong");
      setLoginSuccess(false);
    }
  }
}
  function checkIfUserIsValid() {
  

    return (email === defaultemail && passval === defaultpwd) ;
    
  }
  return (
    <div  className="main-Login">
      
      <div className="login-contain">
        <div className="left">
        {LoginSuccess &&(
          <Alert variant="success"><h6 className='e'>Login Successful</h6></Alert>
        )}
        {LoginSuccess === false && email !== "" && defaultemail!== defaultemail || passval !=="" && passval!== defaultpwd&& (

          <Alert variant="danger"><h6 className='o'>Invalid credentials</h6></Alert>
        )}
          <div className='img'>
            <img src={logo} alt="" style={{height:"100px", width:"100px"}}/>
          </div>
          <form>
            <label for="uname"><h4>Admin Email Id</h4></label>
            <input placeholder="Enter your email id" type="email" value={email} 
            onChange={(e)=>{setemail(e.target.value)}} id="uname" required/>
            <label for="pwd"><h4>Admin Password</h4></label>
            <input placeholder="Enter Password" type="password" value={passval}
             onChange={(e)=>{setpassval(e.target.value)}} id="pwd" required/>
            <button onClick={login} type="submit" id="sub_btn">Login</button><br/>
            
          </form>
         
          <div className='footer1'>
           
          </div>
        </div>
        <div className="right">
          <div className='welcomenote'>
            <h3 >Welcome!</h3>
          </div>
          <div className='welcomeimg'>
            <img src={welcomeimg} id="wel-img-id"/>
          </div>
        </div>
      </div>
    
      </div>
       )
}

export default Login;