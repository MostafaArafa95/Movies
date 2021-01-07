import React, { useState, useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import MovieCard from "./MovieCard";

const MoviesList = (props) => {
    const { data, ListFooterComponent, onEndReached } = props;
    const renderSingleMovie = ({ item }) => <MovieCard {...item} />
    return (
        <FlatList
            {...props}
            // data={data}
            // ListFooterComponent={ListFooterComponent}
            // onEndReached={() => { loadMovies(movies.page + 1) }}
            // ListEmptyComponent={renderErrorPage}
            // onRefresh={() => loadMovies(1, true)}

            renderItem={renderSingleMovie}
            keyExtractor={item => item.id.toString() + item.title}
            onEndReachedThreshold={0.7}
            refreshing={false}






        />
    )
}
export default MoviesList;