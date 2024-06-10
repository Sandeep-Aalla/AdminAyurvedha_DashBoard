import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

export class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Reset: false, // Initialize Reset state to false
    };
    this.password = ''; // Initialize password and password_confirm
    this.password_confirm = '';
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      token: this.props.match.params.id,
      password: this.password,
      password_confirm: this.password_confirm,
    };

    axios
      .post('Reset', data)
      .then((res) => {
        console.log(res);
        this.setState({
          Reset: true, // Update the Reset state to true
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.Reset) {
      return <Redirect to={'/CustomerLogin'} />;
    }
    return (
      <form onSubmit={this.handleSubmit} className="a">
        <div
          className="card"
          style={{
            borderStyle: 'solid',
            borderRadius: '10px',
            width: '80vh',
            marginLeft: '35%',
            marginTop: '5%',
            textAlign: 'center',
          }}
        >
          <h1>Reset Password</h1>
          <div className="from-group">
            <label>Password</label>
            <input
              type="password" // Use type 'password' for password input
              className="form-control"
              placeholder="Enter the password"
              onChange={(e) => (this.password = e.target.value)} // Update this.password
              required
            />
          </div>
          <br></br>
          <div className="from-group">
            <label>Confirm Password</label> {/* Fixed the typo in the label */}
            <input
              type="password" // Use type 'password' for password confirmation input
              className="form-control"
              placeholder="Enter the confirm password"
              onChange={(e) => (this.password_confirm = e.target.value)} // Update this.password_confirm
              required
            />
          </div>
          <br></br>
          <button className="btn btn-primary btn-block">Submit</button>
        </div>
      </form>
    );
  }
}
