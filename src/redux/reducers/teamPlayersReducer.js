const { SET_TEAM_PLAYERS, SET_TEAM_PLAYERS_LOADING, SET_TEAM_PLAYERS_ERROR } = require('../actions')

function teamsReducer(state = { players: {}, loading: true, error: "" }, action) {
    switch (action.type) {
        case SET_TEAM_PLAYERS:
            return {
                players: {
                    [action.id]: action.players,
                    ...state.players
                },
                loading: false,
                error: ""
            }
        case SET_TEAM_PLAYERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_TEAM_PLAYERS_ERROR:
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