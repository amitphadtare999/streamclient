import React, {Component, Fragment} from "react";
import Modal from "../Modal";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../actions";
import history from "../../history";

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onDismiss = () => {
        history.push('/');
    };

    onDeleteClick = () => {
        this.props.deleteStream(this.props.match.params.id);
        history.push('/');
    };

    renderActions() {
        return (
            <Fragment>
                <button
                    className={`ui button primary`}
                    onClick={this.onDeleteClick}
                >
                    Delete
                </button>
                <button
                    className={`ui button`}
                    onClick={this.onDismiss}
                >
                    Cancel
                </button>
            </Fragment>
        );
    }

    renderMessage() {
        if (!this.props.stream) {
            return `Are you sure you want delete this stream?`;
        }
        return `Are you sure you want delete this stream with title: ${this.props.stream.title}`;
        ;
    }

    render() {
        return (
            <Modal
                title={`Delete Stream`}
                message={this.renderMessage()}
                actions={this.renderActions()}
                onDismiss={this.onDismiss}
            />
        );
    }
}

const mapStateToProps = state => {
    return {stream: state.stream};
};

export default connect(
    mapStateToProps,
    {fetchStream, deleteStream}
)(StreamDelete);