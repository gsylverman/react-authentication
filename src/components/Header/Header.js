import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
    const ulStyle = { padding: "0", display: "flex", justifyContent: "flex-start", listStyle: "none" };
    const liStyle = { padding: "10px", border: "1px solid black", margin: "2px" }

    const renderRoutes = () => {
        if (props.auth) {
            return (
                <>
                    <li style={liStyle}>
                        <Link to="/">Home</Link>
                    </li>

                    <li style={liStyle}>
                        <Link to="/feature">Feature</Link>
                    </li>
                    <li style={liStyle}>
                        <Link to="/signOut">Sign Out</Link>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li style={liStyle}>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li style={liStyle}>
                        <Link to="/signin">Sign In</Link>
                    </li>
                </>
            );
        }
    }
    return (
        <ul style={ulStyle} >
            {renderRoutes()}
        </ul>
    );
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth.authenticated
    };
};
export default connect(mapStateToProps)(Header);