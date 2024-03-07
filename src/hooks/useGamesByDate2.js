import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setGames, setGamesLoading, setAllGames } from '../redux/actions'
import api from '../api'

function checkIfGameWasToday(dateToCheck) {
    const date = new Date(dateToCheck);
    const hour = date.getUTCHours()
    return hour >= 7
}

function getNextWeekGames(dateString, currentDate, next7Days){
	const date = new Date(dateString)
	date.setHours(date.getHours() - 7)

	if (date >= currentDate && date <= next7Days){
		return true
	} else{
		return false
	}
}

function useGamesByDate2(date, fetched) {
    const dispatch = useDispatch()

    useEffect(() => {
        const getGames = async () => {

            let games = []
            try {
                console.log("Making request for games")
                dispatch(setGamesLoading(true))
                const resp = await api.get(`games?season=2022&league=standard`);
                games = resp.data.response
                //console.log("games in useEffect:", games)

				
				//filter game, date is greater than TODAY but less than TODAY+7
				const currentDate = new Date(date)
				const next7Days = new Date(date) 
				next7Days.setDate(next7Days.getDate()+7)

				const nextWeekGames = games.filter((game) => getNextWeekGames(game.date.start, currentDate, next7Days))

				console.log("nextWeekGames:", nextWeekGames)

                //let liveGames = games.filter((game) => game.status.short === 2 && checkIfGameWasToday(game.date.start))
                //let finishedGames = games.filter((game) => game.status.short === 3 && checkIfGameWasToday(game.date.start))
                //let notStartedGames = games.filter((game) => game.status.short === 1 && checkIfGameWasToday(game.date.start))
				
				//console.log("live, finished, notStarted in useEffect:", liveGames, finishedGames, notStartedGames)

				//games = liveGames.concat(finishedGames)
				//games = games.concat(notStartedGames)
				//console.log("after concat:", games)

                if (resp.status === 200) {
					dispatch(setAllGames(nextWeekGames))
                }
                else {
                    console.log(resp.data.errors[0])
                }
                dispatch(setGamesLoading(false))
            }
            catch (e) {
                console.log("Error: ", e)
            }
        }
        if (!fetched) {
            getGames()
        }
    }, [])
}

export default useGamesByDate2