import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom'

function TeamIcon(props) {
    return <NavLink to={`/teams/${props.team.id}`}>
        <IconWrapper>
            <Icon src={props.team.logo}/>
        </IconWrapper>
    </NavLink>
}

const IconWrapper = styled.div`
    width: 150px;
    height: 150px;
    margin: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.img`
    max-width: 100%;
    max-height: 100%;
`

export default TeamIcon