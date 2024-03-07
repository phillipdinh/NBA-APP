import axios from "axios"

const api = axios.create({
    baseURL: `https://${process.env.REACT_APP_API_URL}/`,
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_URL,
        "Content-Type": "application/json"
    }
})

export default api
