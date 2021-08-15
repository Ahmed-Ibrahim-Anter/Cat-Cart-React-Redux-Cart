import React from 'react';
import { Link, NavLink, } from 'react-router-dom';
import { useSelector } from 'react-redux'
const NavBar = () => {
    const count = useSelector((state) => state.quantity.count)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Cat Store</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
                        </li>

                    </ul>
                    <div className="col align-self-end mx-5  d-flex sticky-right me-2">
                       < Link  to="/cart">
                    <button type="button" className="btn btn-primary">
                    <i className="fas fa-shopping-cart"></i><span className="badge bg-danger">{count}</span>
                    </button>
                    </Link>
                    </div>
                   
                </div>
            </div>
        </nav>

    );
}

export default NavBar;