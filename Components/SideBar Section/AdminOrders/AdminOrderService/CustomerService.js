import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:9091/api/v1/scustomer";
const CUSTOMER_lOGIN_API_BASE_URL = "http://localhost:9091/api/v1/login";

class CustomerService {
  getAllCustomer() {
    return axios.get(CUSTOMER_API_BASE_URL);
  }


  upsert(customer) {
    return axios.post(CUSTOMER_API_BASE_URL, customer);
  }

  loginCustomer(loginDetails) {
    return axios.post(CUSTOMER_lOGIN_API_BASE_URL, loginDetails);
  }
}
export default new CustomerService();
