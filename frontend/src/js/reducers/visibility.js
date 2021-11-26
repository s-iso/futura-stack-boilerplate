import {TOGGLE_VISIBILITY} from "../actions/actions";

export default function(state = true, action) {
    switch (action.type) {
        case TOGGLE_VISIBILITY:
            return !state
        default:
            return state
    }
}
