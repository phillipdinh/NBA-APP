import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTeamsLoading, setTeams, setTeamsError } from '../redux/actions';
import api from '../api'

function useTeamsSearch(fetched) {
    const dispatch = useDispatch()

    useEffect(() => {
        const getTeams = async () => {
            dispatch(toggleTeamsLoading(true))
            let teams = []
            try {
                console.log("Making request for teams")
                const resp = await api.get('teams')
                teams = resp.data.response
                if (resp.status === 200) {
                    dispatch(setTeams(teams))
                }
                else {
                    dispatch(setTeamsError(resp.data.errors[0]))
                }
            }
            catch (e) {
                dispatch(setTeamsError(e.message))
                console.log("Error: ", e)
            }
        }
        if (!fetched) {
            getTeams()
        }
    }, [])
}

export default useTeamsSearch