/*
    TEAMS STORE SELECTORS
*/

export function getTeams(state) {
    return state.teams.teams
}

export function getLoadingTeams(state) {
    return state.teams.loading
}

export function getTeamsError(state) {
    return state.teams.error
}

/*
    TEAM PLAYERS SELECTORS
*/

export function getTeamPlayers(state) {
    return state.teamPlayers.players
}

export function getLoadingTeamPlayers(state) {
    return state.teamPlayers.loading
}

export function getTeamPlayersError(state) {
    return state.teamPlayers.error
}

/*
	PLAYER STATS SELECTOR
*/
export function getPlayerStats(state) {
    return state.playerStats.info
}

export function getLoadingPlayerStats(state) {
    return state.playerStats.loading
}

export function getPlayerStatsError(state) {
    return state.playerStats.error
}

/*
	PLAYER Bio SELECTOR
*/
export function getPlayerBio(state) {
    return state.playerBio.info
}

export function getLoadingPlayerBio(state) {
    return state.playerBio.loading
}

export function getPlayerBioError(state) {
    return state.playerBio.error
}

/*
	SEARCH RESULTS SELECTOR
*/
export function getSearchResults(state) {
    return state.searchResults.players
}

export function getLoadingSearchResults(state) {
    return state.searchResults.loading
}

export function getSearchResultsError(state) {
    return state.searchResults.error
}

/*
	GAMES SELECTOR
*/

export function getLiveGames(state) {
    return state.games.liveGames
}

export function getFinishedGames(state) {
    return state.games.finishedGames
}

export function getNotStartedGames(state) {
    return state.games.notStartedGames
}


export function getGamesLoading(state) {
    return state.games.gamesLoading
}

export function getAllGames(state) {
    return state.games.allGames
}


/*
    TEAM SCHEDULE SELECTORS
*/

export function getTeamSchedules(state) {
    return state.teamSchedules.schedules
}

export function getLoadingTeamSchedules(state) {
    return state.teamSchedules.loading
}

export function getTeamSchedulesError(state) {
    return state.teamSchedules.error
}
