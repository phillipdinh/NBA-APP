import styled from "@emotion/styled/macro"

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

function GameListItem2(props) {
	console.log("game:", props.game)
	const startTime = new Date(props.game.date.start)
	const startTimeString = formatAMPM(startTime)
	//
	return (
		<GameListItem2Container>
			<TeamInfo>
				<LeftTeam>
					<TeamName>{props.game.teams.home.name}</TeamName>
					<IconWrapper>
						<TeamLogoImage src={props.game.teams.home.logo} />
					</IconWrapper>
				</LeftTeam>

				<VS>VS</VS>

				<RightTeam>
					<IconWrapper>
						<TeamLogoImage src={props.game.teams.visitors.logo} />
					</IconWrapper>
					<TeamName>{props.game.teams.visitors.name}</TeamName>
				</RightTeam>
			</TeamInfo>

			<TeamPosition>{startTimeString}</TeamPosition>
		</GameListItem2Container>
	)
}

const GameListItem2Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #dcdcdc;
	border-radius: 40px;
	padding: 18px 0 8px 0;
	width: 90%;
	margin: 2px;
	align-items: center;
`

const TeamInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	align-items: center;
	width: 100%;
`

const LeftTeam = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end; /* Align left team content to the end */
`

const RightTeam = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start; /* Align right team content to the start */
`

const VS = styled.div`
	font-size: 24px;
	font-weight: 500;
	color: black;
	text-align: center; /* Center the "VS" text */
`

const TeamName = styled.div`
	font-weight: 700;
	font-size: 32px;
	margin-right: 20px;
	color: black;
`

const TeamPosition = styled.div`
	font-size: 20px;
	font-weight: 500;
	color: black;
`

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 64px;
	margin-left: 8px;
	margin-right: 8px;
`
const TeamLogoImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`

export default GameListItem2
