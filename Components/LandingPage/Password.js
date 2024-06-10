import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Password() {
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
     const history = useHistory();

    async function login(event) {
        event.preventDefault();
        try {
            if (!otp || !password || !confirmPassword) {
                setError("otp, password, and confirm password are required.");
                return;
              }
              if (password !== confirmPassword) {
                setError("Password and confirm password do not match.");
                return;
              }

            const response = await axios.put("http://localhost:8082/register/password", {
                otp: otp,
                password: password,
            });

            const data = response.data;

            if (data.message === "OTP is incorrect ") {
                setError(" incorrect OTP .");
            } else if (data.message === "Password reset Success full") {
                // Redirect to the desired page upon successful login
                setSuccess("Reset Password success Please Login ");
                // window.location.reload();
                 history.push("/LoginForm");
                
            } else {
                setError("Incorrect otp  ");
                window.location.reload();
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div >
            <div  >
              

            <Link to="/Reset">
            <button className="buttonBack">Back</button></Link>
        <div className="card" style={{marginTop:"10%",marginRight:"25%",marginLeft:"25%"}}>
            <h2 className="card-header" style={{ textAlign: "center" ,color:"blue"}}>Reset Password</h2>
            <form className="form">
                <label style={{ marginLeft: "100px",fontSize:'20px' }}>Confirm OTP </label>
                <input
                    type="text"
                    className="form-control"
                    id="otp"
                    placeholder="Enter otp"
                    style={{width:"300px",marginLeft:"110px"}}
                    value={otp}
                    onChange={(event) => {
                        setOtp(event.target.value);
                        setError("");
                    }}
                    required
                />

                <label style={{ marginLeft: "100px",fontSize:"20px" }}>New Password</label>
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
                  <label style={{ marginLeft: "100px",fontSize:"20px" }}>ConfirmPassword</label>
                <input
                    type="password"
                    className="form-control"
                    id=" conform password"
                    placeholder="Enter Password"
                    style={{width:"300px",marginLeft:"110px"}}
                    value={confirmPassword}
                    onChange={(event) => {
                        setConfirmPassword(event.target.value);
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
                    <strong>Reset Password</strong>
                </button>
                <p className="error" style={{color:"green",marginLeft:"130px"}}>{success}</p>
                

                {/* <Link
                    to="/login"
                    // className="btn btn btn-primary border "
                    style={{marginLeft:"360px",color:"blue"}}
                    
                >
                    Login
                </Link> */}

               
                <br></br><br></br>
            </form>

        </div>
        </div>
        </div>
    );
}

export default Password;
