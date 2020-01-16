import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signout } from "../../actions/index";

class Signout extends Component {
    componentDidUpdate() {
        this.props.signout()
    }
    render() {
        return (
            <div>
                ...
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signout: dispatch(signout())
    }
};

export default connect(null, mapDispatchToProps)(Signout);