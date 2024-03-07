import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPlayerBioLoading, setPlayerBio, setPlayerBioError } from "../redux/actions"
import api from "../api"

function usePlayerBioSearch(fetched, id) {
	const dispatch = useDispatch()

	useEffect(() => {
		const getPlayerBio = async () => {
			dispatch(setPlayerBioLoading(true))
			let info = []
			try {
				console.log(`Making request for player ${id} bio`)
				const resp = await api.get(`players?id=${id}`)
				info = resp.data.response
				if (resp.status === 200) {
					dispatch(setPlayerBio(info))
				} else {
					dispatch(setPlayerBioError(resp.data.errors[0]))
				}
			} catch (e) {
				dispatch(setPlayerBioError(e.message))
				console.log("Error: ", e)
			}
		}
		if (!fetched) {
			getPlayerBio()
		}
	}, [])
}

export default usePlayerBioSearch
