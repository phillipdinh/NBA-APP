const { SET_GAMES, SET_GAMES_LOADING, SET_ALL_GAMES } = require('../actions')

function gamesReducer(state = { liveGames: [], finishedGames: [], notStartedGames: [], gamesLoading: false , allGames: []}, action) {
    switch (action.type) {
        case SET_GAMES:
            return {
                ...state,
                liveGames: action.liveGames,
                finishedGames: action.finishedGames,
                notStartedGames: action.notStartedGames,
                gamesLoading: state.gamesLoading
            }
        case SET_GAMES_LOADING:
            return {
                ...state,
                gamesLoading: action.gamesLoading
            }
		case SET_ALL_GAMES:
			return {
				...state,
				allGames: action.allGames,
				gamesLoading: state.gamesLoading
			}
        default:
            return state
    }
}

export default gamesReducer