import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom'
import { redColor, blueColor } from '../colors'

function PlayerListItem(props) {
    return <PlayerListItemContainer to={`/players/${props.player.id}`}>
            <PlayerInfo>
                <PlayerName>{props.player.firstname + ' ' + props.player.lastname}</PlayerName>
                <PlayerNumber>#{props.player.leagues.standard.jersey}</PlayerNumber>
            </PlayerInfo>
            <PlayerInfo>
                <PlayerPosition>{props.player.leagues.standard.pos}</PlayerPosition>
            </PlayerInfo>
        </PlayerListItemContainer>
    
}

 /*
    Name
    Number
    Position
 */

const PlayerListItemContainer = styled(NavLink)`
    display: flex;
    flex-direction: row;
    background-color: ${blueColor};
    border-radius: 40px;
    padding: 18px;
    width: 90%;
    justify-content: space-between;
    margin: 2px;
    &:nth-child(odd) {
        background-color: ${redColor};
    }
`

const PlayerInfo = styled.div`
    display: flex;
    flex-direction: row;
`

const PlayerName = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-right: 6px;
    color: white;
`

const PlayerNumber = styled.div`
    font-size: 25px;
    color: white;
`

const PlayerPosition = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: white;
`

export default PlayerListItem