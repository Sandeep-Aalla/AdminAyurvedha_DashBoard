import React from 'react'
//import Sidebar from './Components/SideBar Section/Sidebar'
import Body from './Components/Body Section/Body'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
// import HeaderComponent from './components/Login/HeaderComponent';
import Login from './Components/Login/Login';
import Sidebar from './Components/SideBar Section/Sidebar';
//import ContactUs from './Components/ContactUs/ContactUs';
import Landpage from './Components/LandingPage/Landpage';
//import CustomerLogin from './Components/LandingPage/CustomerLogin';
//import Register from './Components/LandingPage/Register';
//import Reset from './Components/LandingPage/Reset';






//import Medicine from './Components/SideBar Section/AdminMedicines/Medicine';
import AddMedicine from './Components/SideBar Section/AdminMedicines/AddMedicine';
import MedicineList from './Components/SideBar Section/AdminMedicines/MedicineList';
import Contactme from './Components/Contactme/Contactme';
import ListCustomerComponent from './Components/SideBar Section/AdminCustomers/ListCustomerComponent';
import CreateCustomerComponent from './Components/SideBar Section/AdminCustomers/CreateCustomerComponent';
import ViewCustomerComponent from './Components/SideBar Section/AdminCustomers/ViewCustomerComponent';
import UpdateCustomerComponent from './Components/SideBar Section/AdminCustomers/UpdateCustomerComponent';
import CustomerMedicine from './Components/LandingPage/CustomerMedicines/CustomerMedicine';
import LoginForm from './Components/LandingPage/LoginForm';
import RegistrationForm from './Components/LandingPage/RegistrationForm';
import Reset from './Components/LandingPage/Reset';
import Password from './Components/LandingPage/Password';
import AddCategory from './Components/SideBar Section/AdminCategoires/AddCategory';
import CategoryList from './Components/SideBar Section/AdminCategoires/CategoryList';
import OrderComponent from './Components/SideBar Section/AdminOrders/AdminOrder/OrderComponent';
import Activity from './Components/Body Section/Activity Section/Activity';
import Top from './Components/Body Section/Top Section/Top';
// import { Forgot } from './Components/LandingPage/Forgot';
// import { Reset } from './Components/LandingPage/Reset';


//import Logout from './Logout';

const App = () => {
  return (
   <div>
  
   <BrowserRouter>
   
  
   <Switch>
   <Route path='/' exact component={Landpage}></Route> 
   <Route path='/LoginForm' exact component={LoginForm}></Route> 
   <Route path='/RegistrationForm' exact component={RegistrationForm}></Route> 
   <Route path='/Reset' exact component={Reset}></Route> 
   <Route path='/Password' exact component={Password}></Route> 
  
<Route path='/sidebar' component={Sidebar}></Route>

 <Route path='/Body' exact component={Body}></Route> 
<Route path='/Login' exact component={Login}></Route> 
<Route path='/AddMedicine' exact component={AddMedicine}></Route> 

<Route path='/MedicineList' exact component={MedicineList}></Route> 
<Route path='/AddCategory' exact component={AddCategory}></Route> 
<Route path='/CategoryList' exact component={CategoryList}></Route> 

<Route path = "/customers" exact component = {ListCustomerComponent}></Route>
<Route path = "/add-customer/:id" exact component = {CreateCustomerComponent}></Route>
<Route path = "/view-customer/:id" exact component = {ViewCustomerComponent}></Route>
<Route path = "/update-customer/:id" exact component = {UpdateCustomerComponent}></Route>

<Route path='/CustomerMedicine' exact component={CustomerMedicine}></Route> 
<Route path='/Landpage' exact component={Landpage}></Route> 


<Route path='/Contactme' exact component={Contactme}></Route> 
<Route path='/OrderComponent' exact component={OrderComponent}></Route> 


 
 
 
{/* <Route path='/ContactUs' exact component={ContactUs}></Route>*/} 






            

</Switch> 
        </BrowserRouter>
    </div>
  )
}

export default App