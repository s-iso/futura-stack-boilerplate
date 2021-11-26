import {DATA_TESTDATA_ERROR, DATA_TESTDATA_REQUESTED, DATA_TESTDATA_RESPONDED} from "../actions/actions";

const defaultState = {
    isFetching: false,
    data: ""
}

export default function(state = defaultState, action) {
    switch (action.type) {
        case DATA_TESTDATA_REQUESTED:
            return Object.assign({}, state, {
                isFetching: true
            });

        case DATA_TESTDATA_RESPONDED:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload
            });

        default:
            return state;
    }
}
