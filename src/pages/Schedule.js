import { Children } from "react"
import { useSelector } from "react-redux"
import styled from "@emotion/styled/macro"

import Spinner from "../components/Spinner"

import GameListItem2 from "../components/GameListItem2"
import useGamesByDate2 from "../hooks/useGamesByDate2"

import { getAllGames } from "../redux/selectors"

import { getLoadingSearchResults } from "../redux/selectors"

//TODO: Fix alignment

// inspired from: https://stackoverflow.com/questions/72180403/how-to-filter-array-of-objects-on-date
function getDesiredGames(desiredDate, game) {
	console.log("game:::::", game)
	// convert the game's date to a Date object in PST time zone
	const gameDate = new Date(game.date.start)
	const gameDatePST = new Date(
		gameDate.getTime() - gameDate.getTimezoneOffset() * 60000 - 8 * 3600000
	)

	// compare the game's date to the desired date
	return gameDatePST.toDateString() === desiredDate.toDateString()
}

function Schedule(props) {
	// today
	let currentDate = new Date()
	currentDate.setHours(currentDate.getHours() - 7)
	let currentDateToDisplay = currentDate.toDateString()
	const currentDateString = currentDate.toISOString().split("T")[0]

	// tomorrow
	let tomorrowDate = new Date(currentDate)
	tomorrowDate.setDate(tomorrowDate.getDate() + 1)
	let tomorrowDateToDisplay = tomorrowDate.toDateString()

	// day3
	let day3Date = new Date(currentDate)
	day3Date.setDate(day3Date.getDate() + 2)
	let day3DateToDisplay = day3Date.toDateString()

	// day4
	let day4Date = new Date(currentDate)
	day4Date.setDate(day4Date.getDate() + 3)
	let day4DateToDisplay = day4Date.toDateString()

	// day5
	let day5Date = new Date(currentDate)
	day5Date.setDate(day5Date.getDate() + 4)
	let day5DateToDisplay = day5Date.toDateString()

	// day6
	let day6Date = new Date(currentDate)
	day6Date.setDate(day6Date.getDate() + 5)
	let day6DateToDisplay = day6Date.toDateString()

	// day7
	let day7Date = new Date(currentDate)
	day7Date.setDate(day7Date.getDate() + 6)
	let day7DateToDisplay = day7Date.toDateString()

	// useSelector()
	const allGames = useSelector(getAllGames)
	const loading = useSelector(getLoadingSearchResults)

	const fetched = allGames.length !== 0

	const gamesForToday = allGames.filter((game) => getDesiredGames(currentDate, game))
	const gamesForTomorrow = allGames.filter((game) =>
		getDesiredGames(tomorrowDate, game)
	)
	const gamesForDay3 = allGames.filter((game) => getDesiredGames(day3Date, game))
	const gamesForDay4 = allGames.filter((game) => getDesiredGames(day4Date, game))
	const gamesForDay5 = allGames.filter((game) => getDesiredGames(day5Date, game))
	const gamesForDay6 = allGames.filter((game) => getDesiredGames(day6Date, game))
	const gamesForDay7 = allGames.filter((game) => getDesiredGames(day7Date, game))

	useGamesByDate2(currentDateString, fetched)

	return (
		<>
			<PageContainer>
				{loading ? (
					<Spinner />
				) : (
					<>
						{
							<>
								<h1>NBA schedule for next 7 days</h1>
								<GameContainer>
									<h3>{currentDateToDisplay} (Today)</h3>
									{loading ? (
										<></>
									) : (
										gamesForToday.map((game) => (
											<GameListItem2 key={game.id} game={game} />
										))
									)}
									{gamesForToday.length === 0 ? (
										<EmptyMessage>No games</EmptyMessage>
									) : (
										<></>
									)}
								</GameContainer>

								<GameContainer>
									<h3>{tomorrowDateToDisplay} (Tomorrow)</h3>
									{loading ? (
										<></>
									) : (
										gamesForTomorrow.map((game) => (
											<GameListItem2 key={game.id} game={game} />
										))
									)}
									{gamesForTomorrow.length === 0 ? (
										<EmptyMessage>No games</EmptyMessage>
									) : (
										<></>
									)}
								</GameContainer>

								<GameContainer>
									<h3>{day3DateToDisplay}</h3>
									{loading ? (
										<></>
									) : (
										gamesForDay3.map((game) => (
											<GameListItem2 key={game.id} game={game} />
										))
									)}
									{gamesForDay3.length === 0 ? (
										<EmptyMessage>No games</EmptyMessage>
									) : (
										<></>
									)}
								</GameContainer>

								<GameContainer>
									<h3>{day4DateToDisplay}</h3>
									{loading ? (
										<></>
									) : (
										gamesForDay4.map((game) => (
											<GameListItem2 key={game.id} game={game} />
										))
									)}
									{gamesForDay4.length === 0 ? (
										<EmptyMessage>No games</EmptyMessage>
									) : (
										<></>
									)}
								</GameContainer>

								<GameContainer>
									<h3>{day5DateToDisplay}</h3>
									{loading ? (
										<></>
									) : (
										gamesForDay5.map((game) => (
											<GameListItem2 key={game.id} game={game} />
										))
									)}
									{gamesForDay5.length === 0 ? (
										<EmptyMessage>No games</EmptyMessage>
									) : (
										<></>
									)}
								</GameContainer>

								<GameContainer>
									<h3>{day6DateToDisplay}</h3>
									{loading ? (
										<></>
									) : (
										gamesForDay6.map((game) => (
											<GameListItem2 key={game.id} game={game} />
										))
									)}
									{gamesForDay6.length === 0 ? (
										<EmptyMessage>No games</EmptyMessage>
									) : (
										<></>
									)}
								</GameContainer>

								<GameContainer>
									<h3>{day7DateToDisplay}</h3>
									{loading ? (
										<></>
									) : (
										gamesForDay7.map((game) => (
											<GameListItem2 key={game.id} game={game} />
										))
									)}
									{gamesForDay7.length === 0 ? (
										<EmptyMessage>No games</EmptyMessage>
									) : (
										<></>
									)}
								</GameContainer>
							</>
						}
					</>
				)}
			</PageContainer>
		</>
	)
}

function GameContainer(props) {
	const hasChildren = Children.count(props.children) > 0
	return (
		<Container>{hasChildren ? props.children : <h2>No search results</h2>}</Container>
	)
}

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	background-color: white;
	width: 80%;
	padding: 20px;
	align-items: center;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
	border-radius: 4px;
`

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	gap: 1em;
`

const EmptyMessage = styled.p`
	font-size: 22px;
	font-weight: 600;
`

export default Schedule
