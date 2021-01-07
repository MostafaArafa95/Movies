import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { getMovies } from "../../modules/API/APICalls/Movies";
import MovieCard from "../controls/MovieCard";

//TODO: add comments
const pickMoviesKeys = (movies) => {
    return movies.map(({ title, id, overview, release_date, poster_path }) =>
        ({ title, id, overview, release_date, posterPath: poster_path }));
}
const ITEMS_LIMIT = 40;
const AllMovies = () => {
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState({ moviesList: [], page: 1 })
    const [currentPage, setPage] = useState(1);

    const { moviesList = [] } = movies;

    const renderSingleMovie = ({ item }) => <MovieCard {...item} />

    const loadMovies = (page) => {
        console.log("loading page" + page);
        getMovies(page).then((response) => {
            //TODO: handle errors here
            const results = response.data?.results || [];
            const pickedResults = pickMoviesKeys(results);
            let newMoviesList = [...moviesList, ...pickedResults];
            // if (newMoviesList.length > ITEMS_LIMIT) {
            //     newMoviesList.splice(0, newMoviesList.length - ITEMS_LIMIT);
            // }
            setMovies({ moviesList: newMoviesList, page: page })
        }
        ).catch(err => console.log(err.message))//TODO: handle error messages
    }

    useEffect(() => {
        return loadMovies(movies.page);
    }, []);
    console.log({ length: moviesList.length });
    return (
        <View style={styles.page}>
            <FlatList
                //TODO:implement refresh
                data={moviesList}
                renderItem={renderSingleMovie}
                keyExtractor={item => item.id.toString() + item.title}
                ListFooterComponent={<Text>The end</Text>}
                onEndReached={() => { loadMovies(movies.page + 1) }}
                onEndReachedThreshold={0.7}
            />
        </View>
    )
}
//TODO: remove unused styles
const styles = StyleSheet.create({
    page: {
        // paddingHorizontal: 10,
        // paddingVertical: 5,
    },
    movieCard: {
        flexDirection: "row",
        alignContent: "center",
        backgroundColor: "white",
        shadowRadius: 10,
        elevation: 3,
        paddingVertical: 10,
        paddingHorizontal: 10,

        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10
    },
    moviePoster: {
        width: 150,
        height: 200,
    }
});

export default AllMovies;
