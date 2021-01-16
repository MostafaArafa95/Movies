import React from 'react'
import { FlatList } from 'react-native'
import MovieCard from "./MovieCard";

const MoviesList = (props) => {
    const renderSingleMovie = ({ item }) => <MovieCard {...item} />
    return (
        <FlatList
            {...props}
            renderItem={renderSingleMovie}
            keyExtractor={item => item.id.toString() + item.title}
            onEndReachedThreshold={0.7}
            refreshing={false}
        />
    )
}
export default MoviesList;