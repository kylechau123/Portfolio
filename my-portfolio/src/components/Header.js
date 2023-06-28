import React from 'react';

function Header(props) {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">

                </div>

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
            </div>
        </nav>
    );
}

export default Header;