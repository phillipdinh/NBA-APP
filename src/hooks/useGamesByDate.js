import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setGames, setGamesLoading } from '../redux/actions'
import api from '../api'

function checkIfGameWasToday(dateToCheck) {
    const date = new Date(dateToCheck);
    const hour = date.getUTCHours()
    return hour >= 7
}


function useGamesByDate(date, tomorrow, fetched) {
    const dispatch = useDispatch()

    useEffect(() => {
        const getGames = async () => {

            let games = []
            let gamesTomorrow = []
            try {
                console.log("Making request for games")
                dispatch(setGamesLoading(true))
                const resp = await api.get(`games?date=${date}`);
                games = resp.data.response
                console.log(games)
                let liveGames = games.filter((game) => game.status.short === 2)
                let finishedGames = games.filter((game) => game.status.short === 3 && checkIfGameWasToday(game.date.start))
                let notStartedGames = games.filter((game) => game.status.short === 1)
                if (resp.status === 200) {
                    const respTomorrow = await api.get(`games?date=${tomorrow}`);
                    gamesTomorrow = respTomorrow.data.response
                    console.log(gamesTomorrow)
                    notStartedGames = notStartedGames.concat(gamesTomorrow.filter((game) => game.status.short === 1 && !checkIfGameWasToday(game.date.start)))
                    finishedGames = finishedGames.concat(gamesTomorrow.filter((game) => game.status.short === 3 && !checkIfGameWasToday(game.date.start)))
                    if (resp.status === 200) {
                        dispatch(setGames(liveGames, finishedGames, notStartedGames))
                    }
                    else {
                        console.log(resp.data.errors[0])
                    }
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

export default useGamesByDate