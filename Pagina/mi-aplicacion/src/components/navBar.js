import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="App">
        <nav>
            <div className="nav-wrapper push-s5">
                <Link to='/'><img id="logo" src="./logo/HDE02.svg" alt="logo" width="150px" height="70px"/></Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to='/Manual' style={{fontColor:'black'}}>NGVD</Link></li>
                    <li><Link to='/ManualVC'>VDVC</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default NavBar;


