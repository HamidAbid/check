import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {

  return (
    <nav className="navbar  navbar-expand-lg fixed-top ">
      <div className="container-fluid  justify-content-between ">
        <div className='brand col-auto ps-5 fs-4'> <span className='mt-2'>TRAVEL</span><span className='text-primary fw-bolder fs-2'>.</span>
        </div>
        <button className="navbar-toggler col-auto p-1  mx-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="offcanvas offcanvas-end   " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header ">

            <button type="button" className="btn-close bg-info " data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body fs-6  col  ">
            <ul className="navbar-nav flex-grow-1 justify-content-end ">
              <li className="nav-item px-2">
                <Link to='/' className="nav-link fw-bold  " > Home</Link>
              </li>

              <li className="nav-item px-2">
                <Link to='/contact' className="nav-link fw-bold " > Upcoming Tour</Link>
              </li>
              <li className="nav-item px-2">
                <Link to='/contact' className="nav-link fw-bold " > Contact</Link>
              </li>
              <li className="nav-item px-2">
                <Link to='/contact' className="nav-link fw-bold " > LOGIN/SIGN UP</Link>
              </li>
            </ul>

          </div>
        </div>

      </div>
    </nav>
  )
}
