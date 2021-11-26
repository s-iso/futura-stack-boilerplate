import fetch from 'cross-fetch';
import apiUrl from '../apiUrl';
import {dataTestdataRequested, dataTestdataResponded} from "../../../actions";

export function getTestData() {
    return function (dispatch) {
        dispatch(dataTestdataRequested());

        return fetch(apiUrl() + "/testData")
            .then(response => response.json())
            .then(json => dispatch(dataTestdataResponded(json)))
    }
}
