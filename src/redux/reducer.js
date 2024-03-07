import { combineReducers } from "redux"

import teamsReducer from "./reducers/teamsReducer"
import teamPlayersReducer from "./reducers/teamPlayersReducer"
import playerStatsReducer from "./reducers/playerStatsReducer"
import playerBioReducer from "./reducers/playerBioReducer"
import searchResultsReducer from "./reducers/searchResultsReducer"
import gamesReducer from "./reducers/gamesReducer"
import teamScheduleReducer from './reducers/teamScheduleReducer'

const rootReducer = combineReducers({
    teams: teamsReducer,
    teamPlayers: teamPlayersReducer,
    playerStats: playerStatsReducer,
    playerBio: playerBioReducer,
    searchResults: searchResultsReducer,
    games: gamesReducer,
    teamSchedules: teamScheduleReducer
})

export default rootReducer
