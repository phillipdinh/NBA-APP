import { useParams } from "react-router-dom"
import styled from "@emotion/styled/macro"
import { useSelector } from "react-redux"
import {
	getLoadingTeamPlayers,
	getTeamPlayersError,
	getTeamPlayers,
	getTeams,
	getTeamsError,
	getLoadingTeams,
	getTeamSchedulesError,
	getLoadingTeamSchedules
} from "../redux/selectors"
import useTeamPlayersSearch from "../hooks/useTeamPlayersSearch"
import useTeamsSearch from "../hooks/useTeamsSearch"
import useScheduleSearch from "../hooks/useScheduleSearch"
import Spinner from "../components/Spinner"
import PlayerListItem from "../components/PlayerListItem"
import Notice from "../components/Notice"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import React from "react"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

function Team(props) {
	const { id } = useParams()
	const teamPlayers = useSelector(getTeamPlayers)
	const teams = useSelector(getTeams)
	const loadingTeams = useSelector(getLoadingTeams)
	const teamPlayersError = useSelector(getTeamPlayersError)
	const teamsError = useSelector(getTeamsError)
	const loadingTeamPlayers = useSelector(getLoadingTeamPlayers)
	useTeamPlayersSearch(teamPlayers[id] !== null, id)
	useTeamsSearch(teams.length !== 0)
	const schedule = useScheduleSearch()
	const scheduleError = useSelector(getTeamSchedulesError)
	const scheduleLoading = useSelector(getLoadingTeamSchedules)
	const team = findTeam()

	return (
		<>
			{loadingTeams || loadingTeamPlayers || scheduleLoading ? (
				<Spinner />
			) : (
				<TeamContainer>
					<TeamName>
						{teamsError !== "" ? (
							<Notice message={teamsError} error={true} />
						) : (
							team.name || ""
						)}
					</TeamName>
					<Divider>
						<PlayersContainer>
							<PlayersTitle>Roster</PlayersTitle>
							{teamPlayersError !== "" ? (
								<Notice message={teamPlayersError} error={true} />
							) : (
								<PlayersList>
									{(teamPlayers[id] || []).map((player) => {
										if (hasPlayerData(player))
											return (
												<PlayerListItem
													key={player.id}
													player={player}
												/>
											)
									})}
								</PlayersList>
							)}
						</PlayersContainer>
						<ScheduleContainer>
							{scheduleError !== "" ? (
								<Notice message={scheduleError} error={true} />
							) : (
								<div>
									<Calendar
										localizer={localizer}
										events={schedule}
										startAccessor="start"
										endAccessor="end"
										style={{ height: 500 }}
										views={{ month: true }}
									/>
								</div>
							)}
						</ScheduleContainer>
					</Divider>
				</TeamContainer>
			)}
		</>
	)

	function findTeam() {
		let foundTeam = null
		teams.forEach((team) => {
			if (team.id === id) {
				foundTeam = team
			}
		})
		return foundTeam
	}
}

function hasPlayerData(player) {
	return (
		player.leagues.standard.jersey &&
		player.leagues.standard.pos &&
		player.firstname &&
		player.lastname &&
		player.leagues.standard.active
	)
}

const TeamContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const TeamName = styled.h2`
	font-weight: 700;
	font-size: 50px;
`

const Divider = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`

const PlayersContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const PlayersTitle = styled.div`
	font-size: 40px;
	font-weight: 800;
`

const PlayersList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 600px;
`

const ScheduleContainer = styled.div`
	flex: 1;
`

export default Team
