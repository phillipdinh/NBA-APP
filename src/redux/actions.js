/*
    TEAMS STORE ACTIONS
*/

export const SET_TEAMS = "SET_TEAMS"
export const TOGGLE_TEAMS_LOADING = "TOGGLE_TEAMS_LOADING"
export const SET_TEAMS_ERROR = "SET_TEAMS_ERROR"

export function setTeams(teams) {
    return { type: SET_TEAMS, teams }
}

export function toggleTeamsLoading() {
    return { type: TOGGLE_TEAMS_LOADING }
}

export function setTeamsError(error) {
    return { type: SET_TEAMS_ERROR, error }
}

/*
    TEAM PLAYERS STORE ACTIONS
*/

export const SET_TEAM_PLAYERS = "SET_TEAM_PLAYERS"
export const SET_TEAM_PLAYERS_LOADING = "SET_TEAM_PLAYERS_LOADING"
export const SET_TEAM_PLAYERS_ERROR = "SET_TEAM_PLAYERS_ERROR"

export function setTeamPlayers(id, players) {
    return { type: SET_TEAM_PLAYERS, id, players }
}

export function setTeamPlayersLoading() {
    return { type: SET_TEAM_PLAYERS_LOADING }
}

export function setTeamPlayersError(error) {
    return { type: SET_TEAM_PLAYERS_ERROR, error }
}

/*
	PLAYER STATS ACTIONS
*/

export const SET_PLAYER_STATS = "SET_PLAYER_STATS"
export const SET_PLAYER_STATS_LOADING = "SET_PLAYER_STATS_LOADING"
export const SET_PLAYER_STATS_ERROR = "SET_PLAYER_STATS_ERROR"

export function setPlayerStats(info) {
    return { type: SET_PLAYER_STATS, info }
}

export function setPlayerStatsLoading() {
    return { type: SET_PLAYER_STATS_LOADING }
}

export function setPlayerStatsError(error) {
    return { type: SET_PLAYER_STATS_ERROR, error }
}

/*
	PLAYER BIO ACTIONS
*/

export const SET_PLAYER_BIO = "SET_PLAYER_BIO"
export const SET_PLAYER_BIO_LOADING = "SET_PLAYER_BIO_LOADING"
export const SET_PLAYER_BIO_ERROR = "SET_PLAYER_BIO_ERROR"

export function setPlayerBio(info) {
    return { type: SET_PLAYER_BIO, info }
}

export function setPlayerBioLoading() {
    return { type: SET_PLAYER_BIO_LOADING }
}

export function setPlayerBioError(error) {
    return { type: SET_PLAYER_BIO_ERROR, error }
}

/*
	SEARCH RESULTS ACTIONS
*/

export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS"
export const TOGGLE_SEARCH_RESULTS_LOADING = "TOGGLE_SEARCH_RESULTS_LOADING"
export const SET_SEARCH_RESULTS_ERROR = "SET_SEARCH_RESULTS_ERROR"

export function setSearchResults(players) {
    return { type: SET_SEARCH_RESULTS, players }
}

export function toggleSearchResultsLoading() {
    return { type: TOGGLE_SEARCH_RESULTS_LOADING }
}

export function setSearchResultsError(error) {
    return { type: SET_SEARCH_RESULTS_ERROR, error }
}

/*
	SET GAMES ACTION
*/

export const SET_GAMES = "SET_GAMES"
export const SET_GAMES_LOADING = "SET_GAMES_LOADING"
export const SET_ALL_GAMES = "SET_ALL_GAMES"

export function setGames(liveGames, finishedGames, notStartedGames) {
    return { type: SET_GAMES, liveGames, finishedGames, notStartedGames }
}

export function setGamesLoading(gamesLoading) {
    return { type: SET_GAMES_LOADING, gamesLoading }
}

export function setAllGames(allGames) {
    return { type: SET_ALL_GAMES, allGames }
}

/*
    TEAM SCHEDULES STORE ACTIONS
*/

export const SET_TEAM_SCHEDULE = "SET_TEAM_SCHEDULE"
export const SET_TEAM_SCHEDULE_LOADING = "SET_TEAM_SCHEDULE_LOADING"
export const SET_TEAM_SCHEDULE_ERROR = "SET_TEAM_SCHEDULE_ERROR"

export function setTeamSchedule(id, schedule) {
    return { type: SET_TEAM_SCHEDULE, id, schedule }
}

export function setTeamScheduleLoading() {
    return { type: SET_TEAM_SCHEDULE_LOADING }
}

export function setTeamScheduleError(error) {
    return { type: SET_TEAM_SCHEDULE_ERROR, error }
}
