import React, { Component } from 'react'
import CustomerService from './CustomerService';
import {Link} from 'react-router-dom';

class ListCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(customerId){
        CustomerService.deleteCustomer(customerId).then( res => {
            this.setState({customers: this.state.customers.filter(customer => customer.customerId !== customerId)});
        });
    }
    viewCustomer(customerId){
        this.props.history.push(`/view-customer/${customerId}`);
    }
    editCustomer(customerId){
        this.props.history.push(`/add-customer/${customerId}`);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
        });
    }

    addCustomer(){
        this.props.history.push('/add-customer/_add');
    }

    render() {
        return (
            <div>
            <Link to="/Sidebar">
            <button className="buttonBack">Back</button>
          </Link>
                 <h2 className="text-center">Customers List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCustomer}> Add Customer</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Customer Name</th>
                                    <th>Email Id</th>
                                    <th> Mobile Number</th>
                                    <th> Password</th>
                                    <th> Address</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer=> 
                                        <tr key = {customer.customerId}>
                                             <td> { customer.customerName} </td>   
                                             <td> {customer.emailId}</td>
                                             <td> {customer.mobileNumber}</td>
                                             <td>***********</td>
                                             <td> {customer.address}</td>
                                             <td>
                                                {/* <button onClick={ () => this.editCustomer(customer.customerId)} className="btn btn-info">Update </button>*/}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.customerId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCustomer(customer.customerId)} className="btn btn-primary">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCustomerComponent
