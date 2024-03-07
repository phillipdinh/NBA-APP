const {
    SET_PLAYER_STATS,
    SET_PLAYER_STATS_LOADING,
    SET_PLAYER_STATS_ERROR
} = require("../actions")

function playerStatsReducer(
    state = { info: [], loading: true, error: "" },
    action
) {
    switch (action.type) {
        case SET_PLAYER_STATS:
            return {
                info: action.info,
                loading: false,
                error: ""
            }
        case SET_PLAYER_STATS_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_PLAYER_STATS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default playerStatsReducer
