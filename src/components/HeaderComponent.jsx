import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <a href="" className="navbar-brand brand-name">Sardor Rasulov</a>
                </div>
                    <a href="" className="nav-link">Home</a>
                    <a href="" className="nav-link">Product</a>
                    <a href="" className="nav-link">Some Product</a>
            </nav>
        </header>
        );
    }
}

export default HeaderComponent;