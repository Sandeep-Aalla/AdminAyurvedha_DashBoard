import React, { Component } from 'react'
import CustomerService from './CustomerService';
import {Link} from 'react-router-dom';

class ViewCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerId: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.customerId).then( res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
            <Link to="/Sidebar">
            <button className="buttonBack">Back</button>
          </Link>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Customer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Customer Name: { this.state.customer.customerName }  </label>
                        </div>
            
                        <div className = "row">
                            <label>  Email ID: { this.state.customer.emailId }</label>
                        </div>

                        <div className = "row">
                            <label> Mobile Number: { this.state.customer.mobileNumber }</label>
                        </div>
                        
                        <div className = "row">
                            <label> Password: *******</label>
                        </div>

                        <div className = "row">
                            <label> Address: { this.state.customer.address }</label>
                        </div>

                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCustomerComponent
