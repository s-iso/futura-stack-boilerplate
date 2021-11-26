export const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY"

//Data Actions
export const DATA_TESTDATA_REQUESTED = "DATA_TESTDATA_REQUESTED"
export const DATA_TESTDATA_RESPONDED = "DATA_TESTDATA_RESPONDED"

export const toggleVisibility = () => ({ type: TOGGLE_VISIBILITY })

//API PoC
export const dataTestdataRequested = () => ({ type: DATA_TESTDATA_REQUESTED })
export const dataTestdataResponded = (payload) => ({
    type: DATA_TESTDATA_RESPONDED,
    payload
})
