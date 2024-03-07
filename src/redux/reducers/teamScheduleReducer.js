const { SET_TEAM_SCHEDULE, SET_TEAM_SCHEDULE_LOADING, SET_TEAM_SCHEDULE_ERROR } = require('../actions')

function teamsReducer(state = { schedules: {}, loading: true, error: "" }, action) {
    switch (action.type) {
        case SET_TEAM_SCHEDULE:
            return {
                schedules: {
                    [action.id]: action.schedule,
                    ...state.schedules
                },
                loading: false,
                error: ""
            }
        case SET_TEAM_SCHEDULE_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_TEAM_SCHEDULE_ERROR:
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