// import React from 'react'
// import {NavLink} from 'react-router-dom'
// export default function MainNavBar() {
//   return (
//     <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <NavLink className="navbar-brand"  to="/home">Navbar</NavLink>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="/table">Table</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="/form">Form</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="/list">List</NavLink>
//       </li>
      
//     </ul>
    
//   </div>
// </nav>
//     </div>
//   )
// }

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Image, Button  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Header.css'; // Import the same CSS file used for Header

export default function MainNavBar() {
    const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Navbar.Brand style={{ marginLeft: '3%' }} >
          <Image src='/Images/MerchantHub.png' width="70" height="60" className="d-inline-block align-top" alt="Logo" />
          <span className="ml-2 p-4" >MerchantHub</span> 
        </Navbar.Brand>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newmerchant">NewMarchant</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/allmerchant">AllMerchant</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/list">List</NavLink>
            </li>
          </ul>
        </div>

        
        <Button className="btn btn-light"  style={{ marginRight: '3%' }} onClick={() => navigate("/login")}>Logout</Button>

      </nav>
    </div>
  );
}
