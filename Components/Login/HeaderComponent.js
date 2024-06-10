import React, { Component } from 'react'
 import './Head.css';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <div >
                <header >  <nav className="navbar navbar-expand-md navbar-dark bg-dark"> 

                                       <div className="navbar-brand"> 
                                          <div className='list'>
                                          <h3>Ayurvedha App </h3>
                                            <ul>
                                            {/* <li><a href="/">Home</a></li> */}
                                                <li><a href="/">Admin Login</a></li>
                                                <li><a href="/login">Customer Login</a></li>
                                            </ul>
                                          </div>
                                          
                                     </div>
                     </nav> 
                </header>
                <div ></div>
                </div>
            </div>
        )
    }
}

export default HeaderComponent
