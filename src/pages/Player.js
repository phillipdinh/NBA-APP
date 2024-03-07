import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import styled from "@emotion/styled/macro"
import usePlayerStatsSearch from "../hooks/usePlayerStatsSearch"
import usePlayerBioSearch from "../hooks/usePlayerBioSearch"
import Notice from "../components/Notice"
import Spinner from "../components/Spinner"
import {
    getLoadingPlayerStats,
    getPlayerStatsError,
    getPlayerStats
} from "../redux/selectors"
import {
    getLoadingPlayerBio,
    getPlayerBioError,
    getPlayerBio
} from "../redux/selectors"
import TeamIcon from "../components/TeamIcon"
import PlayerBio from "../components/PlayerBio"
import PlayerStats from "../components/PlayerStats"

function Player(props) {
    const { id } = useParams()

    const loadingStats = useSelector(getLoadingPlayerStats)
    const errorStats = useSelector(getPlayerStatsError)
    const playerStats = useSelector(getPlayerStats)
    usePlayerStatsSearch(playerStats.id == id, id)

    const loadingBio = useSelector(getLoadingPlayerBio)
    const errorBio = useSelector(getPlayerBioError)
    const playerBio = useSelector(getPlayerBio)
    usePlayerBioSearch(playerBio.id == id, id)

    //{id, firstname, lastname}
    //playerStats[0].player

    //{id, name, nickname, code, logo(url)}
    //playerStats[0].team

    return (
        <PageContainer>
            {loadingStats || loadingBio ? (
                <Spinner />
            ) : (
                <>
                    {errorStats !== "" ? (
                        <Notice error={true} message={errorStats} />
                    ) : (
                        <>
                            <HeaderContainer>
                                <PlayerName>
                                    {`${playerBio[0].firstname} ${playerBio[0].lastname}`}
                                </PlayerName>
                                <TeamIcon
                                    key={playerStats[0].team.id}
                                    team={playerStats[0].team}
                                />
                            </HeaderContainer>
                            <PlayerStats stats={playerStats}></PlayerStats>
                        </>
                    )}

                    {errorBio !== "" ? (
                        <Notice error={true} message={errorStats} />
                    ) : (
                        <>
                            <PlayerBio bio={playerBio[0]} team={playerStats[0].team.name}></PlayerBio>
                        </>
                    )}
                </>
            )}
        </PageContainer>
    )
}

const PlayerName = styled.h1`
    font-weight: 700;
    font-size: 50px;
    margin-top: 1em;
`
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
`
const PageContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default Player
