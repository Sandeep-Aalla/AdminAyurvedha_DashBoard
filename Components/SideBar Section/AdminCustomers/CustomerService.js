
import axios from 'axios';

const CUSTUMER_API_BASE_URL = "http://localhost:9092/api-v1/customers";
                              
class CustomerService {

    getCustomers(){
        return axios.get(CUSTUMER_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTUMER_API_BASE_URL, customer);
    }

    getCustomerById(customerId){
        return axios.get(CUSTUMER_API_BASE_URL + '/' + customerId);
    }

    updateCustomer(customer, customerId){
        console.log(customer)
        return axios.put(CUSTUMER_API_BASE_URL + '/' + customerId, customer);
    }

    deleteCustomer(customerId){
        return axios.delete(CUSTUMER_API_BASE_URL + '/' + customerId);
    }
}

export default new CustomerService()