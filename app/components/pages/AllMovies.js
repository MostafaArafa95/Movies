import React, { useState, useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import { getMovies } from "../../modules/API/APICalls/Movies";
import MovieCard from "../controls/MovieCard";
import MoviesList from "../controls/MoviesList";

//TODO: add comments
const pickMoviesKeys = (movies) => {
    return movies.map(({ title, id, overview, release_date, poster_path }) =>
        ({ title, id, overview, release_date, posterPath: poster_path }));
}


const AllMovies = () => {
    const [fetchError, setFetchError] = useState(null);
    const [movies, setMovies] = useState({ moviesList: [], page: 1 })

    const { moviesList = [] } = movies;

    const renderSingleMovie = ({ item }) => <MovieCard {...item} />

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
        })//TODO: handle error messages
    }

    useEffect(() => {
        return loadMovies(movies.page);
    }, []);
    return (
        <FlatList
            data={moviesList}
            renderItem={renderSingleMovie}
            keyExtractor={item => item.id.toString() + item.title}
            ListFooterComponent={renderFooter}
            onEndReached={() => { loadMovies(movies.page + 1) }}
            onEndReachedThreshold={0.7}
            ListEmptyComponent={renderErrorPage}
            onRefresh={() => loadMovies(1, true)}
            refreshing={false}
        />
    )
}


export default AllMovies;
