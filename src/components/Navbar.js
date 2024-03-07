import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom'
import { redColor, blueColor } from '../colors'

function Navbar(props) {
    return <NavContainer>
        <NavContent>
            <SiteTitle><NavLink to="/">Mini NBA App</NavLink></SiteTitle>
        </NavContent>
        <NavContent>
            <NavItem><NavLink to="/players">Players</NavLink></NavItem>
            <NavItem><NavLink to="/schedule">Schedule</NavLink></NavItem>
            <NavItem><NavLink to="/teams">Teams</NavLink></NavItem>
        </NavContent>
    </NavContainer>
}

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${blueColor};
    padding: 20px;
    justify-content: space-between;
`
const NavContent = styled.div`
    display: flex;
    flex-direction: row;
`

const SiteTitle = styled.div`
    font-size: 30px;
    color: white;
    font-weight: bold;
`

const NavItem = styled.div`
    font-size: 20px;
    color: white;
    font-weight: 900;
    margin: 10px;
`

export default Navbar