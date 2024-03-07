import styled from "@emotion/styled/macro"

function PlayerStats(props) {
    const playerAverages = getAverages(props.stats)

    const statsItems = Object.entries(playerAverages).map(([key, value]) => {
        return (
            <StatsItem key={key}>
                <p>{key}</p>
                <b>{value}</b>
            </StatsItem>
        )
    })
    return <StatsDiv>{statsItems}</StatsDiv>
}

function getAverages(stats) {
    const gamesPlayed = stats.length
    const avgs = {
        PPG: 0,
        RPG: 0,
        APG: 0,
        BPG: 0,
        SPG: 0
    }
    stats.forEach((game) => {
        avgs.PPG += game.points
        avgs.RPG += game.totReb
        avgs.APG += game.assists
        avgs.BPG += game.blocks
        avgs.SPG += game.steals
    })
    avgs.PPG = (parseFloat(avgs.PPG) / gamesPlayed).toFixed(1)
    avgs.RPG = (parseFloat(avgs.RPG) / gamesPlayed).toFixed(1)
    avgs.APG = (parseFloat(avgs.APG) / gamesPlayed).toFixed(1)
    avgs.BPG = (parseFloat(avgs.BPG) / gamesPlayed).toFixed(1)
    avgs.SPG = (parseFloat(avgs.SPG) / gamesPlayed).toFixed(1)
    return avgs
}

const StatsDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    justify-content: space-around;
    width: 80%;
    margin-top: 1em;
    padding: 1em;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
`
const StatsItem = styled.div`
    font-weight: 300;
    * {
        margin: 0;
    }
    p {
        font-size: 24px;
    }

    b {
        font-size: 28px;
    }
`

export default PlayerStats
