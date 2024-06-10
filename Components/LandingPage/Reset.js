import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


function Reset() {
    const [emailId, setEmailId] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
     const history = useHistory();

    async function login(event) {
        event.preventDefault();
        try {
            if (!emailId ) {
                setError("Email  are required.");
                return;
              }
            //   if (password !== confirmPassword) {
            //     setError("Password and confirm password do not match.");
            //     return;
            //   }

            const response = await axios.put("http://localhost:8082/register/customer/reset", {
                emailId: emailId,
                // password: password,
            });

            const data = response.data;

            if (data.message === "mail is not exists") {
                setError("Email not exists.");
            } else if (data.message === "Otp Send mail check it") {
                // Redirect to the desired page upon successful login
                //setSuccess("Rest Password success Please Login ");
                // window.location.reload();
                 history.push("/password");
                
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
        <Link to="/LoginForm">
        <button className="buttonBack">Back</button></Link>
            <div className="card" style={{marginTop:"10%",marginLeft:"30%",marginRight:"20%"}}>

    
        <div className="log">
            <h2 className="card-header" style={{ textAlign: "center" ,color:"blue"}}>Reset Password</h2>
            <form className="form">
                <label style={{ marginLeft: "100px",fontSize:'20px' }}>Confirm Email </label>
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

              

                <p className="error" style={{color:"red",marginLeft:"1px"}}>{error}</p>
                  <br></br>
                <button
                    type="submit"
                    className="btn btn-success "
                    onClick={login}
                    style={{marginLeft:"110px",width:"300px"}}
                >
                    <strong>Check A Mail</strong>
                </button>
                <p className="error" style={{marginLeft:"130px"}}>{success}</p>
                
                <br></br><br></br>
            </form>

        </div>
        </div>
        </div>
    );
}

export default Reset;
