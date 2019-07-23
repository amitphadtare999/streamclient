import streams from "../apis/Stream";
import history from "../history";
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from "./types";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValue => async (dispatch, getState) => {
    const { userId } = getState().auth;

    const response = await streams.post('/streams', { ...formValue, userId })

    dispatch({type: CREATE_STREAM, payload: response.data});

    history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({type: FETCH_STREAMS, payload: response.data});
};

export const fetchStream = streamId => async dispatch => {
    const response = await streams.get(`/streams/${streamId}`);

    dispatch({type: FETCH_STREAM, payload: response.data});
};

export const editStream = (streamId, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${streamId}`, formValues);

    dispatch({type: EDIT_STREAM, payload: response.data});
};

export const deleteStream = streamId => async dispatch => {
    const response = await streams.delete(`/streams/${streamId}`);
    console.log(response);
    dispatch({type: DELETE_STREAM, payload: streamId});
};