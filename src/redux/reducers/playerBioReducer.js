const {
    SET_PLAYER_BIO,
    SET_PLAYER_BIO_LOADING,
    SET_PLAYER_BIO_ERROR
} = require("../actions")

function playerBioReducer(
    state = { info: [], loading: true, error: "" },
    action
) {
    switch (action.type) {
        case SET_PLAYER_BIO:
            return {
                info: action.info,
                loading: false,
                error: ""
            }
        case SET_PLAYER_BIO_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_PLAYER_BIO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default playerBioReducer
