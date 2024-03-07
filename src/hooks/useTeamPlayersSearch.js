import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
	setTeamPlayersLoading,
	setTeamPlayers,
	setTeamPlayersError
} from "../redux/actions"
import api from "../api"

function useTeamPlayersSearch(fetched, id) {
	const dispatch = useDispatch()

	useEffect(() => {
		const getTeamPlayers = async () => {
			dispatch(setTeamPlayersLoading())
			let teamPlayers = null
			try {
				console.log(`Making request for team: ${id}`)
				const resp = await api.get(`players?team=${id}&season=2023`)
				teamPlayers = resp.data.response
				console.log(teamPlayers)
				if (resp.status === 200) {
					dispatch(setTeamPlayers(id, teamPlayers))
				} else {
					dispatch(setTeamPlayersError(resp.data.errors[0]))
				}
			} catch (e) {
				dispatch(setTeamPlayersError(e.message))
				console.log("Error: ", e)
			}
		}
		if (!fetched) {
			getTeamPlayers()
		}
	}, [])
}

export default useTeamPlayersSearch
