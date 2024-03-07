import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setGamesLoading, setAllGames } from "../redux/actions"
import api from "../api"

function getNextWeekGames(dateString, currentDate, next7Days) {
	const date = new Date(dateString)
	date.setHours(date.getHours() - 7)

	if (date >= currentDate && date <= next7Days) {
		return true
	} else {
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
				const resp = await api.get(`games?season=2023&league=standard`)
				games = resp.data.response
				console.log("games in useEffect:", games)

				//filter game, date is greater than TODAY but less than TODAY+7
				const currentDate = new Date(date)
				const next7Days = new Date(date)
				next7Days.setDate(next7Days.getDate() + 7)

				const nextWeekGames = games.filter((game) =>
					getNextWeekGames(game.date.start, currentDate, next7Days)
				)

				console.log("nextWeekGames:", nextWeekGames)

				if (resp.status === 200) {
					dispatch(setAllGames(nextWeekGames))
				} else {
					console.log(resp.data.errors[0])
				}
				dispatch(setGamesLoading(false))
			} catch (e) {
				console.log("Error: ", e)
			}
		}
		if (!fetched) {
			getGames()
		}
	}, [])
}

export default useGamesByDate2
