import React from "react";
import { connect } from "react-redux";
import { deleteStream } from "../../actions";


class StreamDelete extends React.Component {

    onDeleteClock = () => {
        this.props.deleteStream(this.props.match.params.id);
    };

    render() {
        return (
            <div>
                <h2>Delete Stream</h2>
                <button
                    className={`ui button negative`}
                    onClick={this.onDeleteClock}
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default connect(null, {deleteStream}) (StreamDelete);