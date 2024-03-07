import React from "react"
import styled from "@emotion/styled/macro"
import useGamesByDate from "../hooks/useGamesByDate"
import Spinner from "../components/Spinner"
import GameListItem from "../components/GameListItem"
import { useSelector } from 'react-redux';
import { getFinishedGames, getGamesLoading, getLiveGames, getNotStartedGames } from "../redux/selectors"

function Home(props) {
    // the lines of code to get the date in YYYY-MM-DD format is from https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
    let currentDate = new Date()
    currentDate.setHours(currentDate.getHours() - 7)
    let tomorrowDate = new Date(currentDate)
    tomorrowDate.setDate(tomorrowDate.getDate() + 1)
    const currentDateString = currentDate.toISOString().split('T')[0]
    const tomorrowDateString = tomorrowDate.toISOString().split('T')[0]

    const liveGames = useSelector(getLiveGames)
    const finishedGames = useSelector(getFinishedGames)
    const notStartedGames = useSelector(getNotStartedGames)
    const loading = useSelector(getGamesLoading)
    const fetched = liveGames.length != 0 || finishedGames.length != 0 || notStartedGames.length != 0

    useGamesByDate(currentDateString, tomorrowDateString, fetched)

    return (
        <div>
            <LiveGamesTitle>Live</LiveGamesTitle>
            <FinishedGamesTitle>Finished</FinishedGamesTitle>
            <NotStartedGamesTitle>Later Today</NotStartedGamesTitle>
            <LiveGamesContainer>
                {(loading) ? <Spinner /> : liveGames.map((game) => <GameListItem key={game.id} game={game}/>)}
                {(liveGames.length === 0) ? <EmptyMessage>No live games</EmptyMessage> : <></>}
            </LiveGamesContainer>
            <FinishedGamesContainer>
                {(loading) ? <></> : finishedGames.map((game) => <GameListItem key={game.id} game={game}/>)}
                {(finishedGames.length === 0) ? <EmptyMessage>No finished games</EmptyMessage> : <></>}
            </FinishedGamesContainer>
            <NotStartedGamesContainer>
                {(loading) ? <></> : notStartedGames.map((game) => <GameListItem key={game.id} game={game}/>)}
                {(notStartedGames.length === 0) ? <EmptyMessage>No games that haven't started yet</EmptyMessage> : <></>}
            </NotStartedGamesContainer>
        </div>
    )
}

const EmptyMessage = styled.p`
    font-size: 22px;
    font-weight: 600;
`

const LiveGamesTitle = styled.h1`
    position: absolute;
    top: 11%;
    left: 15%;
    width: 15%;
    display: flex;
    flex-direction: row
`

const NotStartedGamesTitle = styled.h1`
    position: absolute;
    top: 11%;
    left: 75%;
    width: 15%;
`

const FinishedGamesTitle = styled.h1`
    position: absolute;
    top: 11%;
    left: 45%;
    width: 15%;
`

const LiveGamesContainer = styled.div`
    position: absolute;
    top: 25%;
    left: 10%;
    width: 25%;
`

const NotStartedGamesContainer = styled.div`
    position: absolute;
    top: 25%;
    left: 68%;
    width: 25%;
`

const FinishedGamesContainer = styled.div`
    position: absolute;
    top: 25%;
    left: 37%;
    width: 25%;
`

export default Home