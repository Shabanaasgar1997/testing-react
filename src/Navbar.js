import React from "react";
import "./Navbar.css";

import shabana from "./mystyle.module.css";
import Banner from "./Banner";

import {Link,NavLink} from 'react-router-dom'

export default function Navbar() {
  // const Pavan={
  //   width:"250px",
  //   border:"2px solid blue",
  // }

  return (
    <>
      {/* <Banner />
      <div className="container bg-info" style={{border:"5px solid green"}}>
      <Banner />
      </div> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand" href="#">
          
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link to="/" style={{textDecoration:"none"}}>
                  Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/about">
                  About
                  </Link>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Skills
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Technical Skills
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Software Skills
                    </a>
                  </li>
                  
                </ul>
              </li>
   
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>

    // <div classNameName="nav" style={Pavan}>
    //   <ul>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Services</li>
    //     <li>Blogs</li>
    //     <li>Contact</li>
    //   </ul>
    //   <div classNameName="">

    //    <img src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //    alt=""
    //    style={Pavan}
    //    />
    //   </div>
    //   <p style={{color:"red",backgroundColor:"cyan"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus tempore natus eos magni sapiente, mollitia reprehenderit corrupti expedita ea laboriosam suscipit assumenda fugiat provident id sint voluptate tenetur eveniet dignissimos culpa. Doloribus neque ipsa sapiente quisquam sint minima excepturi cumque error, ullam optio, molestiae totam repellendus, incidunt magnam tempora!</p>

    //   <div classNameName="">

    //     <h1 classNameName={shabana.shravani}>Hey shravani how r u???</h1>

    //   </div>
    // </div>
  );
}
