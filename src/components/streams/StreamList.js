import React from "react";
import {connect} from "react-redux";
import { fetchStreams, deleteStream } from "../../actions";
import {Link} from "react-router-dom";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    onDeleteClick = (props) => {
        console.log(props);
        console.log(this.props);
        // this.props.deleteStream(props.match.params.id);
    };

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/stream/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <button
                        className={`ui button negative`}
                        streamId={stream.id}
                        onClick={this.onDeleteClick}
                    >
                        Delete
                    </button>
                    {/*<Link to={`/stream/delete/${stream.id}`} className="ui button negative">Delete</Link>*/}
                </div>
            );
        }

    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>

                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div className="ui right floated main menu">
                    <Link to="/stream/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }

    }

    render() {
        return (
            <div>
                <h2>Streams
                    {this.renderCreate()}
                </h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {fetchStreams, deleteStream})(StreamList);