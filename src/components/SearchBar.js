import React, { useState } from "react"
import styled from "@emotion/styled/macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { blueColor } from "../colors"
function SearchBar(props) {
	const [query, setQuery] = useState("")

	function handleInputChange(event) {
		setQuery(event.target.value)
	}

	function handleSubmit(event) {
		event.preventDefault()
		props.onSearch(query)
	}

	// Create an event listener for the form when the enter key is pressed
	// and call the handleSubmit function
	// https://stackoverflow.com/questions/23202678/react-js-onkeypress-event-listener

	return (
		<SearchContainer>
			<SearchForm onSubmit={handleSubmit}>
				<SearchInput
					type="text"
					value={query}
					onChange={handleInputChange}
					placeholder="Search by Last Name"
				/>
				<SearchBtn type="submit">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</SearchBtn>
			</SearchForm>
		</SearchContainer>
	)
}

const SearchContainer = styled.div`
	background-color: white;
	padding: 10px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
	border-radius: 2px;
`
const SearchForm = styled.form`
	display: flex;
	flex-direction: row;

	* {
		font-size: 20px;
		//padding top and down 10px
		padding: 4px;
		border: none;
	}
`
const SearchInput = styled.input`
	padding-left: 10px;
	// Make the back-ground color less opacity
	//
	background-color: rgba(240, 240, 240);
	box-shadow: inset 0 1px 6px rgba(0, 0, 0, 0.4);
	// on Focus clear placeholder
	&:focus {
		// clear placeholder
		&::placeholder {
			opacity: 0;
		}
		outline: none;
	}
`
const SearchBtn = styled.button`
	background-color: ${blueColor};
	color: white;
	border: none;
`
export default SearchBar
