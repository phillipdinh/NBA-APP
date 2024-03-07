import styled from "@emotion/styled/macro"

function PlayerBio(props) {
	return (
		<BioDiv>
			<Divider>
				<BioItem>
					<b>Team</b>
					<p>{props.team}</p>
				</BioItem>
				<BioItem dim={true}>
					<b>Age</b>
					<p>{calculateAge(props.bio.birth.date)} years</p>
				</BioItem>

				<BioItem>
					<b>Height</b>
					<p>{`${props.bio.height.feets}' ${props.bio.height.inches}"`}</p>
				</BioItem>
				<BioItem dim={true}>
					<b>Weight</b>
					<p>{props.bio.weight.pounds} lbs.</p>
				</BioItem>
			</Divider>
			<Divider>
				<BioItem>
					<b>Joined NBA</b>
					<p>{props.bio.nba.start}</p>
				</BioItem>
				<BioItem dim={true}>
					<>
						<b>College</b>
						{props.bio.college ? (
							<>
								<p>{props.bio.college}</p>
							</>
						) : (
							<p>N/A</p>
						)}
					</>
				</BioItem>
				<BioItem>
					<b>Birthday</b>
					<p>{convertDate(props.bio.birth.date)}</p>
				</BioItem>
				<BioItem dim={true}>
					<b>Birth Country</b>
					<p>{props.bio.birth.country}</p>
				</BioItem>
			</Divider>
		</BioDiv>
	)
}

function convertDate(birthday) {
	const dateObj = new Date(birthday)

	const options = { year: "numeric", month: "long", day: "numeric" }
	return dateObj.toLocaleDateString("en-US", options)
}

function calculateAge(birthday) {
	var birthDate = new Date(birthday)
	var currentDate = new Date()
	var age = currentDate.getFullYear() - birthDate.getFullYear()
	var monthDiff = currentDate.getMonth() - birthDate.getMonth()
	if (
		monthDiff < 0 ||
		(monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
	) {
		age--
	}
	return age
}
const Divider = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 1em 2em;
	box-shadow: 0 0 3px 0 rgba(100, 100, 100, 0.3);
`
const BioDiv = styled.div`
	display: flex;
	flex-direction: row;
	background-color: white;
	justify-content: flex-start;
	margin-top: 1em;
	padding: 1em;
	box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	width: 80%;
`
const BioItem = styled.div`
	margin-top: 0.5em;
	padding-left: 1em;
	background-color: ${(props) => (props.dim ? "rgba(0, 0, 0, 0.2)" : "white")};
	* {
		font-size: 28px;
	}

	p {
		margin: 0.3em 0;
	}
`

export default PlayerBio
