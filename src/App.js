import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Players from "./pages/Players"
import Player from "./pages/Player"
import Schedule from "./pages/Schedule"
import Team from "./pages/Team"
import Teams from "./pages/Teams"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import styled from "@emotion/styled/macro"

function App() {
    return (
        <>
            <Navbar />
            <ContentContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/players">
                        <Route index element={<Players />} />
                        <Route path=":id" element={<Player />} />
                    </Route>
                    <Route path="/teams">
                        <Route index element={<Teams />} />
                        <Route path=":id" element={<Team />} />
                    </Route>
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ContentContainer>
        </>
    )
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: whitesmoke;
    min-height: 60px;
`

export default App
