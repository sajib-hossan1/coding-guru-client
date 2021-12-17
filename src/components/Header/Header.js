import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-bg navbar-dark">
                <div class="container">
                    <a class="navbar-brand brand-title" href="#home">Coding <span className="brand-secondary-color">Guru</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav nav-links ms-auto">
                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;