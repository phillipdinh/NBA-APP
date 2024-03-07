import { useState, Children } from "react"
import { useSelector } from "react-redux"
import styled from "@emotion/styled/macro"
import useAllPlayersSearch from "../hooks/useAllPlayersSearch"
import Notice from "../components/Notice"
import Spinner from "../components/Spinner"
import SearchBar from "../components/SearchBar"
import PlayerListItem from "../components/PlayerListItem"
import {
    getLoadingSearchResults,
    getSearchResultsError,
    getSearchResults
} from "../redux/selectors"
import { useDispatch } from "react-redux"
import { setSearchResults } from "../redux/actions"
function Players(props) {
    const dispatch = useDispatch()
    const [searchInput, setSearchInput] = useState("")

    const loading = useSelector(getLoadingSearchResults)
    const error = useSelector(getSearchResultsError)

    const searchResults = useSelector(getSearchResults)
    useAllPlayersSearch(searchResults.length != 0, searchInput)

    return (
        <>
            <PageContainer>
                <SearchBar onSearch={handleSearch} />

                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        {error != "" ? (
                            <Notice message={error} error={true} />
                        ) : (
                            <PlayersContainer>
                                {(searchResults || []).map((player) => {
                                    if (hasPlayerData(player))
                                        return (
                                            <PlayerListItem
                                                key={player.id}
                                                player={player}
                                            />
                                        )
                                })}
                            </PlayersContainer>
                        )}
                    </>
                )}
            </PageContainer>
        </>
    )

    function handleSearch(input) {
        dispatch(setSearchResults([]))
        setSearchInput(input)
    }
}
function hasPlayerData(player) {
    return (
        player.leagues.standard &&
        player.leagues.standard.jersey &&
        player.leagues.standard.pos &&
        player.firstname &&
        player.lastname &&
        player.leagues.standard.active
    )
}

function PlayersContainer(props) {
    const hasChildren = Children.count(props.children) > 0

    return (
        <Container>
            {hasChildren ? props.children : <h2>No search results</h2>}
        </Container>
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

const PageTitle = styled.h1`
    font-size: 40px;
    font-weight: 800;
`
export default Players
