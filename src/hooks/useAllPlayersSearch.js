import { useEffect } from "react"
import { useDispatch } from "react-redux"

import {
	toggleSearchResultsLoading,
	setSearchResults,
	setSearchResultsError
} from "../redux/actions"

import api from "../api"

function useAllPlayersSearch(fetched, name) {
	const dispatch = useDispatch()

	useEffect(() => {
		const getAllPlayers = async () => {
			dispatch(toggleSearchResultsLoading(true))
			let search = []
			if (name !== "") {
				try {
					console.log(`Searching for player with last name: ${name}`)
					const resp = await api.get(`players?search=${name}`)
					search = resp.data.response
					console.log(search)
					if (resp.status === 200) {
						dispatch(setSearchResults(search))
					} else {
						dispatch(setSearchResultsError(resp.data.errors[0]))
					}
				} catch (e) {
					dispatch(setSearchResultsError(e.message))
					console.log("Error: ", e)
				}
			}
		}
		if (!fetched) {
			getAllPlayers()
		}
	}, [name])
}

export default useAllPlayersSearch
