import React from 'react'
import {NavLink, Link} from 'react-router-dom'

export default function Layout({children}) {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-1">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Cool Site</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" exact>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link" exact>Users</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container">
        <div className="p-4 bg-light rounded">
          {children}
        </div>
      </main>
    </>
  )
}
