import React from 'react'
// import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import CredContext from './context/Credentials/credContext'

const Navbar = () => {
  const Logoutfunc = async () => {

  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            </ul>
            <form className="d-flex w-50" role="search">
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success mx-2 " type="submit">Search</button>
            </form>
            <Link to="/login"><button className="btn btn-primary mx-2" type="submit" >Login</button></Link>
            <Link to="/usersignup"><button className="btn  btn-primary mx-2" type="submit">Signup</button></Link>
            <Link to="/"><button className="btn btn-primary mx-2" type="submit" onClick={Logoutfunc}>Logout</button></Link>
            <Link to="/usersignup"><button className="btn  btn-primary mx-2" type="submit">Profile</button></Link>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
