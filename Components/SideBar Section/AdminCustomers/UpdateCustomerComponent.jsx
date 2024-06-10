import React, { Component } from 'react'
import CustomerService from './CustomerService';
import {Link} from 'react-router-dom';

class UpdateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            customerId: this.props.match.params.id,
            customerName: '',
              emailId: '',
              mobileNumber:'',
              password:'',
              role:''
        }
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.customerId).then( (res) =>{
            let customer = res.data;
            this.setState({customerId: customer.customerId,
                customerName: customer.customerName,
                emailId : customer.emailId,
                mobileNumber:customer.mobileNumber,
                password:customer.password,
                role:customer.role
            });
        });
    }

    updateCustomer= (e) => {
        e.preventDefault();
        let customer = {customerName: this.state.customerName, emailId: this.state.emailId, mobileNumber: this.state.mobileNumber, password: this.state.password, role: this.state.role};
        console.log('customer => ' + JSON.stringify(customer));
        console.log('customerId => ' + JSON.stringify(this.state.customerId));
        CustomerService.updateCustomer(customer, this.state.customerId).then( res => {
            this.props.history.push('/customers');
        });
    }
    
    changeCustomerNameHandler= (event) => {
        this.setState({customerName: event.target.value});
    }

    changeEmailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeMobileNumberHandler= (event) => {
        this.setState({mobileNumber: event.target.value});
    }
     
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
     
    changeRoleHandler= (event) => {
        this.setState({role: event.target.value});
    }

    
    cancel(){
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
            <Link to="/Sidebar">
            <button className="buttonBack">Back</button>
          </Link>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Customer Name: </label>
                                            <input placeholder="Customer Name" name="customerName" className="form-control" 
                                                value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Mobile Number: </label>
                                            <input placeholder="Mobile Number" name="mobileNumber" className="form-control" 
                                                value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Role: </label>
                                            <input placeholder="role" name="role" className="form-control" 
                                                value={this.state.role} onChange={this.changeRoleHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.updateCustomer}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateCustomerComponent
