import React, { Component } from 'react';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar{" "}
                <span className="btn btn-secondary m-2">{props.totalCounters}</span></a>
            </div>
        </nav>
    );
}
export default Navbar;