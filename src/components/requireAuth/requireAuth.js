import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposeComp extends Component {
        componentDidMount() {
            this.redirect();
        }
        componentDidUpdate() {
            this.redirect();
        }
        redirect() {
            if (!this.props.auth) {
                this.props.history.push("/");
            }
        }
        render() {
            return (
                <ChildComponent {...this.props} />
            );
        }
    }
    const mapStateToProps = (state) => {
        return {
            auth: state.auth.authenticated
        };
    };
    return connect(mapStateToProps)(ComposeComp);
}