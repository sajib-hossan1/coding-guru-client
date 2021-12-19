import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-bg navbar-dark">
                <div className="container">
                    <a className="navbar-brand brand-title" href="#home"><Link style={{color: 'white'}} className="text-decoration-none" to="/">Coding <span className="brand-secondary-color">Guru</span></Link></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav nav-links ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/courses">Courses</Link>
                            <Link className="nav-link" to="/aboutUs">About Us</Link>
                            { user.displayName && <Link className="nav-link" to="/dashboard">Dashboard</Link>}
                        </div>
                        <div className="mb-1">
                            {
                                user.displayName ? <Link to="/login"><button onClick={logOut} className="login-btn-header">Log Out</button></Link> :
                                <Link to="/login"><button className="login-btn-header">Login</button></Link>
                            }
                        </div>
                        <div className="user-info mt-1">
                            { user.displayName && <img className="avatar-img" src={user.photoURL} alt="Avatar" />}
                            <p className="m-0">{user.displayName}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;