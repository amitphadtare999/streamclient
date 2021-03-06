import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


class StreamForm extends Component {
    renderError({touched, error}) {
        if (touched && error)
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );

    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                <div>{this.renderError(meta)}</div>
            </div>
        );
    };

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className="ui form error">
                    <Field
                        name="title"
                        component={this.renderInput}
                        label="Enter title"
                    />
                    <Field
                        name="description"
                        component={this.renderInput}
                        label="Enter description"
                    />
                    <button className="ui button primary">Submit</button>
                    <Link to="/" className="ui button red">Cancel</Link>
                </form>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "You must enter a valid title";
    }

    if (!formValues.description) {
        errors.description = "You must enter a valid description";
    }

    return errors;
};

export default reduxForm({
    form: 'StreamForm',
    validate
})(StreamForm);

