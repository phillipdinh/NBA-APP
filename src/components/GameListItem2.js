import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom'
import { redColor, blueColor } from '../colors'


// This function was obtained from https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
function formatAMPM(date24Hr) {
    var hours = date24Hr.getHours();
    var minutes = date24Hr.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }


function GameListItem2(props) {
	console.log("game:", props.game)
	const startTime = new Date(props.game.date.start)
	const startTimeString = formatAMPM(startTime)
	// 

    return <GameListItem2Container to={`//${props.game.id}`}>
			
				<PlayerInfo>

					<PlayerName>{props.game.teams.home.name} (Home)   </PlayerName>
					<IconWrapper> <TeamLogoImage src={props.game.teams.home.logo} /> </IconWrapper>

					<PlayerName> &nbsp;&nbsp;&nbsp; VS    </PlayerName>

					<IconWrapper> <TeamLogoImage src={props.game.teams.visitors.logo} /> </IconWrapper>
					<PlayerName> &nbsp;&nbsp;&nbsp; {props.game.teams.visitors.name} (Away)   </PlayerName>
				</PlayerInfo>

				<PlayerPosition>{startTimeString}</PlayerPosition>
				

				
				
			
            

        </GameListItem2Container>
    
}

 /*
    Name
    Number
    Position
 */
//    text-align: center; /* Add this line to center the contents */


const GameListItem2Container = styled(NavLink)`
    display: flex;
    flex-direction: row;
    background-color: #DCDCDC;
    border-radius: 40px;
    padding: 18px;
    width: 90%;
    justify-content: space-between;
    margin: 2px;

	align-items: center; /* Add this line to center the contents vertically */
    text-align: center; /* Add this line to center the contents horizontally */

    &:nth-child(odd) {
        background-color: #DCDCDC;
    }


`

const PlayerInfo = styled.div`
    display: flex;
    flex-direction: row;
`

const PlayerName = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-right: 20px;
    color: black;
`

const PlayerNumber = styled.div`
    font-size: 25px;
    color: black;
`

const PlayerPosition = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: black;
`

const IconWrapper = styled.div`
    width: 70px;
    height: 50px;
    margin: 2px;
    display: block;
    float: left;
`

const TeamLogoImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`



export default GameListItem2