# NBA React Project

Welcome to our NBA React project! This application is designed to provide an immersive NBA experience, offering a range of features powered by the NBA Rapid API.

## Features

### Game Information

Home page displays ongoing, completed, and scheduled games for the day.

### Player Search and Stats

Players page allows searching through current NBA players then access season statistics and personal information.

### Full Schedule View

Schedule page displays the NBA schedule for the current week including location, date, time, and participating teams.

### Team Profiles

Teams page displays all NBA teams and details each team's roster and complete game schedule.

## Technologies Used

-   React
-   React Redux: state management
-   Emotion: styling
-   Axios: connecting to Rapid API and fetching data.
-   Moment: manipulating and displaying date and time.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/phillipdinh/NBA-APP.git
```

2. Install dependencies:

```
npm install
```

3. Run the application:

```
npm start
```

## API Key

To use the NBA Rapid API, you'll need to sign up for an account and obtain an API key. Once you have the API key, create a `.env` file in the root directory of the project and add the following line:

-   REACT_APP_API_URL='api-nba-v1.p.rapidapi.com'
-   REACT_APP_NBA_API_KEY=your_api_key_here

Replace `your_api_key_here` with your actual API key.

## Screenshots

**Home**

<img src="https://github.com/phillipdinh/NBA-APP/assets/64246241/0b3acb84-ea50-491b-bf99-222a6ffc75c6" width="800">

---

**Players Search**

<img src="https://github.com/phillipdinh/NBA-APP/assets/64246241/36b219f0-abaa-490d-b860-3e65c089cb7f" width="800">
<img src="https://github.com/phillipdinh/NBA-APP/assets/64246241/598ef7f0-477c-4ff4-95d5-d41e93b3b513" width="800">
<img src="https://github.com/phillipdinh/NBA-APP/assets/64246241/027b6a02-d4af-49a3-b424-008be7da6e18" width="800">

---

**Schedule**

<img src="https://github.com/phillipdinh/NBA-APP/assets/64246241/20dabc36-7e33-4025-948e-cf40adc6421c" width="800">

---

**Teams**

<img src="https://github.com/phillipdinh/NBA-APP/assets/64246241/ae7302e8-b09c-4795-9fae-1647cf496aa4" width="800">
<img src="https://github.com/phillipdinh/NBA-APP/assets/64246241/e4133679-af3a-4ba0-8eef-b6b3e84e54c4" width="800">

## Acknowledgements

Thanks to [Rapid API](https://rapidapi.com/api-sports/api/api-nba) for providing the NBA data and API.
