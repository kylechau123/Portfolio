import React from 'react';

function Navigation(props) {
    return (
        <div class="navbar-end">
            <a class="navbar-item"
                onClick={() => {
                    props.setCurrentPage("About")
                }}
            >
                About
            </a>

            <a class="navbar-item"
                onClick={() => {
                    props.setCurrentPage("Portfolio")
                }}
            >
                Portfolio
            </a>

            <a class="navbar-item"
                onClick={() => {
                    props.setCurrentPage("Contact")
                }}
            >
                Contact
            </a>

            <a class="navbar-item"
                onClick={() => {
                    props.setCurrentPage("Resume")
                }}
            >
                Resume
            </a>
        </div>
    );
}

export default Navigation;