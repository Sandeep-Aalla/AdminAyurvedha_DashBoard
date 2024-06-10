import React, { Component } from 'react'
import CustomerService from './CustomerService';
import {Link} from 'react-router-dom';


class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            customerId: this.props.match.params.id,
            customerName: '',
            emailId: '',
              mobileNumber:'',
              password:'',
              address:''
        }
       
 
  
        // this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        
        
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }
    

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.customerId === '_add'){
            return
        }else{
            CustomerService.getCustomerById(this.state.customerId).then( (res) =>{
                let customer = res.data;
                this.setState({customerId: customer.customerId,
                    customerName: customer.customerName,
                    emailId : customer.emailId,
                    mobileNumber:customer.mobileNumber,
                    password:customer.password,
                    address:customer.address
                });
            });
        }        
    }
    saveOrUpdateCustomer= (e) => {
        e.preventDefault();
        let customer = {customerName: this.state.customerName, emailId: this.state.emailId, mobileNumber: this.state.mobileNumber, password: this.state.password, address: this.state.address};
        console.log('customer => ' + JSON.stringify(customer));

        // step 5
        if(this.state.customerId === '_add'){
            CustomerService.createCustomer(customer).then(res =>{
                this.props.history.push('/customers');
            });
        }else{
            CustomerService.updateCustomer(customer, this.state.customerId).then( res => {
                this.props.history.push('/customers');
            });
        }
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
     
    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    

    cancel(){
        this.props.history.push('/customers');
    }

    getTitle(){
        if(this.state.customerId === '_add'){
            return <h3 className="text-center">Add Customer</h3>
        }else{
            return <h3 className="text-center">Update Customer</h3>
        }
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
                                {
                                    this.getTitle()
                                }
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
                                            <input type="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input  type="text" placeholder="address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Save</button><br></br><br></br>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginRight: "10%",width:"200px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateCustomerComponent
