import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
	setTeamSchedule,
	setTeamScheduleLoading,
	setTeamScheduleError
} from "../redux/actions"
import { getTeamSchedules } from "../redux/selectors"
import api from "../api"
import moment from "moment"

function useScheduleSearch() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const teamSchedules = useSelector(getTeamSchedules)

	useEffect(() => {
		async function getTeamSchedule() {
			dispatch(setTeamScheduleLoading())
			let response
			try {
				response = await api.get(`games?team=${id}&season=2023&league=standard`)
				if (response.status === 200) {
					console.log(response)
					const games = response.data.response.map((game) => {
						const title =
							game.teams.visitors.id === parseInt(id)
								? `@${game.teams.home.name}`
								: `${game.teams.visitors.name}`
						return {
							id: game.id,
							title: title,
							start: moment(game.date.start),
							end:
								game.date.end != null
									? moment(game.date.end)
									: moment(game.date.start).add(2, "h")
						}
					})
					dispatch(setTeamSchedule(id, games))
				} else {
					dispatch(setTeamScheduleError(response.data.errors[0]))
				}
			} catch (e) {
				dispatch(setTeamScheduleError(e.message))
			}
		}

		if (!teamSchedules[id]) {
			getTeamSchedule()
		}
	}, [])

	return teamSchedules[id]
}

export default useScheduleSearch
