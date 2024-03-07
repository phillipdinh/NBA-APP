import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
    setPlayerStatsLoading,
    setPlayerStats,
    setPlayerStatsError
} from "../redux/actions"
import api from "../api"

function usePlayerStatsSearch(fetched, id) {
    const dispatch = useDispatch()

    useEffect(() => {
        const getPlayerStats = async () => {
            dispatch(setPlayerStatsLoading(true))
            let info = []
            try {
                console.log(`Making request for player ${id} stats`)
                const resp = await api.get(
                    `players/statistics?id=${id}&season=2022`
                )
                info = resp.data.response
                if (resp.status === 200) {
                    dispatch(setPlayerStats(info))
                } else {
                    dispatch(setPlayerStatsError(resp.data.errors[0]))
                }
            } catch (e) {
                dispatch(setPlayerStatsError(e.message))
                console.log("Error: ", e)
            }
        }
        if (!fetched) {
            getPlayerStats()
        }
    }, [])
}

export default usePlayerStatsSearch
