const { SET_TEAMS, TOGGLE_TEAMS_LOADING, SET_TEAMS_ERROR } = require('../actions')

function teamsReducer(state = { teams: [], loading: true, error: "" }, action) {
    switch (action.type) {
        case SET_TEAMS:
            return {
                teams: action.teams,
                loading: false,
                error: "",
            }
        case TOGGLE_TEAMS_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case SET_TEAMS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default teamsReducer