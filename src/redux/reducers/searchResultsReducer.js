const {
    SET_SEARCH_RESULTS,
    TOGGLE_SEARCH_RESULTS_LOADING,
    SET_SEARCH_RESULTS_ERROR
} = require("../actions")

function searchResultsReducer(
    state = { players: [], loading: false, error: "" },
    action
) {
    switch (action.type) {
        case SET_SEARCH_RESULTS:
            return {
                players: action.players,
                loading: false,
                error: ""
            }
        case TOGGLE_SEARCH_RESULTS_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case SET_SEARCH_RESULTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default searchResultsReducer
