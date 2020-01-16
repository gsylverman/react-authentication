import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { signUser } from "../../actions/index";
import { bindActionCreators } from 'redux';

const Signin = (props) => {
    const renderField = ({ input, type }) => {
        return (
            <input {...input} type={type} />
        );
    };

    const getFormValues = (values) => {
        props.sign(values, () => {
            props.history.push("/feature");
        });
        props.reset();
    };

    return (
        <form onSubmit={props.handleSubmit(getFormValues)}>
            <label htmlFor="email">Email:</label><br />
            <Field
                name="email"
                type="text"
                component={renderField}
            /><br />
            <label htmlFor="email">Password:</label><br />
            <Field
                name="password"
                type="password"
                component={renderField}
            /><br />

            <div>{props.err}</div>
            <button>Sign In</button>
        </form>
    );
};
const mapStateToProps = (state) => {
    return {
        err: state.auth.errorMessage
    };
}
const dispatchStateToProps = (dispatch) => {
    return bindActionCreators({
        sign: signUser,
        reset: reset("userForm")
    }, dispatch)
};

export default reduxForm({
    form: "signIn"
})(connect(mapStateToProps, dispatchStateToProps)(Signin));