import { getLoadingTeams, getTeamsError, getTeams } from "../redux/selectors"
import Notice from "../components/Notice"
import { useSelector } from "react-redux"
import useTeamsSearch from "../hooks/useTeamsSearch"
import Spinner from "../components/Spinner"
import styled from "@emotion/styled/macro"
import TeamIcon from "../components/TeamIcon"

function Teams(props) {
	const loading = useSelector(getLoadingTeams)
	const error = useSelector(getTeamsError)
	const teams = useSelector(getTeams)
	useTeamsSearch(teams.length !== 0)

	return (
		<>
			{error !== "" && <Notice error={true} message={error} />}
			{loading ? (
				<Spinner />
			) : (
				<TeamsContainer>
					{teams.map((team) => {
						if (team.nbaFranchise && !team.allStar) {
							return <TeamIcon key={team.id} team={team} />
						}
						return null // Ensure a value is returned for all code paths
					})}
				</TeamsContainer>
			)}
		</>
	)
}

const TeamsContainer = styled.div`
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
`

export default Teams
