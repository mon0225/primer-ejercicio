import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="App">
        <nav>
            <div className="nav-wrapper">
                <Link to='/'><img id="logo" src="./logo/HDE02.svg" alt="logo" width="150px" height="70px"/></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link style={{color: 'black'}} to='/Manual'>NGVD</Link></li>
                    <li><Link style={{color: 'black'}} to='/ManualVC'>VDVC</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default NavBar;


