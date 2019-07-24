import _ from "loadsh";
import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    };

    renderForm() {
        if (!this.props.stream) {
            return (
                <div>
                    Loading...
                </div>
            );
        } else {
            return (
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Edit Stream</h2>
                {this.renderForm()}
            </div>
        );


    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(
    mapStateToProps,
    {editStream, fetchStream}
)(StreamEdit);