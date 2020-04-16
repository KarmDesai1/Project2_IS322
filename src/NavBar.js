import React from "react";
import Prop from "prop"

function NavBar(props) {
    const { onClick, Toggle} = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <nav className="navbar is-dark is-fixed-bottom" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a href="#/" className="navbar-item" onClick={onClick}>
                        <i className="fas fa-2x fa-list" />
                    </a>

                    <a href="#/" className="navbar-burger" onClick={Toggle}>
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start" />
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a href="#/" className="button" onClick={Toggle}><strong>Create Task</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            );
        }
        {/*    NavBar.propTypes = {*/}
        {/*    onClick: PropTypes.func,*/}
        {/*    modalToggle: PropTypes.func,*/}
        {/*};*/}

        {/*    NavBar.defaultProps = {*/}
        {/*    onClick: () => { },*/}
        {/*    modalToggle: () => { },*/}
        {/*};*/}

        {/*    export default NavBar;*/}





