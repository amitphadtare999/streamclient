import React from "react";
import {Link} from "react-router-dom";

const StreamShow = () => {
    return (
        <div>
            Stream Show
            <div>
                <Link to="/stream/new" className="ui button primary">Add</Link>
            </div>
        </div>
    );
};

export default StreamShow;