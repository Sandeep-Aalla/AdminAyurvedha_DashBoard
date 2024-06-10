import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


function LoginForm() {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();
    const win=window.sessionStorage;
    const handleSubmit=(e)=>{
      e.preventDefault();
      win.clear();
      setEmailId('');
      setPassword('');
    }
    useEffect(()=>{
      if(win.getItem('emailId'))
      setEmailId(win.getItem('emailId'))
      if(win.getItem('password'))
      setPassword(win.getItem('password'))
    
    },[])
    useEffect(()=>
    {
      win.setItem('emailId',emailId);
      win.setItem('password',password);
    },[emailId,password])
    

    async function login(event) {
        event.preventDefault();
        try {
            if (!emailId || !password) {
                setError("Email and password are required.");
                return;
            }

            const response = await axios.post("http://localhost:8082/register/customer/login", {
                emailId: emailId,
                password: password,
            });

            const data = response.data;
           
         
            if (data.message === "Email not exists") {
                setError("Email not exists.");
            } else if (data.message === "Login Success") {
                // Redirect to the desired page upon successful login
                history.push("/CustomerMedicine");
            } else {
                setError("Incorrect email and password ");
                window.location.reload();
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            
        <Link to="/Landpage">
        <button className="buttonBack">Back</button></Link>
        <div className="card" style={{marginTop:"10%",marginLeft:"20%",marginRight:"10%"}}>
            <h2  className="card-header"style={{ textAlign: "center" }}>Login</h2>
            <form className="form">
                <label style={{ marginLeft: "110px",fontSize:'20px' }}> Email </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    style={{width:"300px",marginLeft:"110px"}}
                    value={emailId}
                    onChange={(event) => {
                        setEmailId(event.target.value);
                        setError("");
                    }}
                    required
                />

                <label style={{ marginLeft: "110px",fontSize:"20px" }}>Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    style={{width:"300px",marginLeft:"110px"}}
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                        setError("");
                    }}
                    required
                />

                <p className="error" style={{color:"red",marginLeft:"130px"}}>{error}</p>
                  <br></br>
                <button 
                    type="submit"
                    className="btn btn-success "
                    onClick={login}
                    style={{marginLeft:"110px",width:"300px"}}
                ><Link to="/CustomerMedicine"></Link>
                    <strong>Login</strong>
                </button>

                <br /><br />

                <Link
                    to="/RegistrationForm"
                    className="btn btn btn-primary border "
                    style={{ marginLeft: "110px", marginBottom: "10px",width:"300px" }}
                >
                    Create Account
                </Link>
                    <br></br>
                <Link
                    to="/reset"
                    // className="btn btn btn-primary border "
                    style={{marginLeft:"180px",color:"blue"}}
                    
                >
                    forgot password
                </Link>
                <br></br><br></br>
            </form>

        </div>
        </div>
    );
}

export default LoginForm;
