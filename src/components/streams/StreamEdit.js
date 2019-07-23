import React, { Component } from "react";
import { connect } from "react-redux";
import { editStream } from "../../actions"

class StreamEdit extends Component {

    render() {
        console.log(this.props);
        return <div>Stream Edit</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {editStream}) (StreamEdit);