import React, { useEffect, useState } from 'react'

import MovieCard from "../controls/MovieCard";
import MoviesList from "../controls/MoviesList";
import { Text } from 'react-native'
import { getMovies } from "../../modules/API/APICalls/Movies";
import { API_URLS } from "../../config/APIConfig"

//TODO: add comments
const pickMoviesKeys = (movies) => {
    return movies.map(({ title, id, overview, release_date, poster_path }) =>
    ({
        title,
        id,
        overview,
        release_date,
        posterPath: API_URLS.imagesBaseURl + poster_path
    }));
}


const AllMovies = () => {
    const [fetchError, setFetchError] = useState(null);
    const [movies, setMovies] = useState({ moviesList: [], page: 1 })

    const { moviesList = [] } = movies;


    const renderErrorPage = () => {
        if (fetchError) {
            return (
                <Text style={{ textAlign: 'center' }} >
                    { 'Error loading movies \n Pull to refresh'}
                </Text >)
        }
        else return null;
    }
    const renderFooter = () => (!fetchError ? <MovieCard isLoading={true} /> : null)


    const loadMovies = (page, reset = false) => {
        console.log("loading page" + page);
        getMovies(page).then((response) => {
            //TODO: handle errors here
            const results = response.data?.results || [];
            const pickedResults = pickMoviesKeys(results);
            let newMoviesList = [...moviesList, ...pickedResults];
            if (reset) {
                newMoviesList = pickedResults;
            } else {
                newMoviesList = [...moviesList, ...pickedResults];
            }

            setMovies({ moviesList: newMoviesList, page: page })
            setFetchError(null);
        }
        ).catch(err => {
            console.log(err.message)
            setFetchError(err);
        })
    }

    useEffect(() => {
        return loadMovies(movies.page);
    }, []);
    return (
        <MoviesList
            data={moviesList}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={renderErrorPage}
            onEndReached={() => { loadMovies(movies.page + 1) }}
            onRefresh={() => loadMovies(1, true)}
        />
    )

}


export default AllMovies;
