import react from 'react';
import './Landpage.css';
import Logo from './Logo.png';

function Landpage(){
    return(
    <div id='bg'>
            <header className='header'>
            <img src={Logo} alt="" />
             <a href="/LoginForm">Customer Login</a>
            <a href="/Login"> Admin Login</a>
            <a href="/Contactme">Contact Us</a>
             </header>
             <div className='bg'>
                <nav>
                    <b>Welcome to ayurveda</b>
                    <h1>Care Yourself With <br /> Nature's Touch</h1>
                    
                    <button>Discover more</button>
                </nav>
            </div>
            </div>
    
    )
};

export default Landpage;
