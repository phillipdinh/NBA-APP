import React from "react"
import styled from "@emotion/styled/macro"
import { redColor, blueColor } from "../colors"

// This function was obtained from https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
function formatAMPM(date24Hr) {
	var hours = date24Hr.getHours()
	var minutes = date24Hr.getMinutes()
	var ampm = hours >= 12 ? "PM" : "AM"
	hours = hours % 12
	hours = hours ? hours : 12 // the hour '0' should be '12'
	minutes = minutes < 10 ? "0" + minutes : minutes
	var strTime = hours + ":" + minutes + " " + ampm
	return strTime
}

function GameListItem(props) {
	const game = props.game
	const startTime = new Date(game.date.start)
	startTime.setHours(
		startTime.getUTCHours() >= 7
			? startTime.getUTCHours() - 7
			: startTime.getUTCHours() - 7 + 24
	)
	const startTimeString = formatAMPM(startTime)
	return (
		<GameListItemContainer>
			<LogoDiv>
				<IconWrapper>
					<TeamLogoImage src={game.teams.visitors.logo} />
				</IconWrapper>
				<IconWrapper>
					<TeamLogoImage src={game.teams.home.logo} />
				</IconWrapper>
			</LogoDiv>
			<ScoresTimeDiv>
				{game.status.short === 2 ? (
					<ScoreP>{game.scores.visitors.points}</ScoreP>
				) : (
					<></>
				)}
				{game.status.short === 3 ? (
					<ScoreP>{game.scores.visitors.points}</ScoreP>
				) : (
					<></>
				)}
				<TimePeriodDiv>
					{game.status.short === 2 && game.periods.current !== 0 ? (
						<TimeP>Q{game.periods.current}</TimeP>
					) : (
						<></>
					)}
					{game.status.short === 2 && game.status.clock != null ? (
						<TimeP>{game.status.clock}</TimeP>
					) : (
						<></>
					)}
					{game.status.short === 1 ? <TimeP>{startTimeString}</TimeP> : <></>}
					{game.status.short === 3 ? <TimeP>Final</TimeP> : <></>}
				</TimePeriodDiv>
				{game.status.short === 2 ? (
					<ScoreP>{game.scores.home.points}</ScoreP>
				) : (
					<></>
				)}
				{game.status.short === 3 ? (
					<ScoreP>{game.scores.home.points}</ScoreP>
				) : (
					<></>
				)}
			</ScoresTimeDiv>
		</GameListItemContainer>
	)
}

const TimePeriodDiv = styled.div`
	display: flex;
	flex-direction: column;
`

const ScoreP = styled.p`
	font-size: 20px;
	font-weight: 400;
	color: white;
`

const TimeP = styled.p`
	font-size: 20px;
	font-weight: 100;
	margin: auto;
	color: white;
`

const IconWrapper = styled.div`
	width: 100px;
	height: 100px;
	margin: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const TeamLogoImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`

const LogoDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
`

const ScoresTimeDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
`

const GameListItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	border: 3px solid ${redColor};
	border-radius: 20px;
	justify-content: space-between;
	background-color: ${blueColor};
	margin: 15px;
	padding: 10px;
`

export default GameListItem
