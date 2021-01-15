import axios from 'axios';
import { API_URLS, API_KEY } from "../../../config/APIConfig"

export const getMovies = (page = 1) => {
    const url = API_URLS.baseURL + API_URLS.movies;
    return axios.get(url, {
        params: {
            api_key: API_KEY,
            page
        }
    })

}
