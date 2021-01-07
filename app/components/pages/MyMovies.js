import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MoviesList from "../controls/MoviesList";
import MovieForm from "../controls/MovieForm";
import ResponsiveModal from "../controls/ResponsiveModal";

const MyMovies = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [moviesList, setMovies] = useState([]);
    //TODO: add string file
    const renderEmpty = () => (<Text>Your list is empty</Text>)
    console.log({ moviesList })
    return (
        <>
            <TouchableWithoutFeedback style={{ backgroundColor: "green" }} onPress={() => setIsModalVisible(true)}>
                <View style={[styles.floatingButton, { backgroundColor: "red" }]}>
                    <Icon name={"plus-circle"} size={60} color={"tomato"} />
                </View>
            </TouchableWithoutFeedback>
            <View>
                <ResponsiveModal visible={isModalVisible} onDismiss={() => setIsModalVisible(false)}>
                    <MovieForm onSave={(movie) => {
                        const newMovies = [{ ...movie, id: moviesList.length }, ...moviesList];
                        setIsModalVisible(false);
                        setMovies(newMovies);

                    }} />
                </ResponsiveModal>
                <MoviesList
                    data={moviesList}
                    // ListFooterComponent={renderFooter}
                    ListEmptyComponent={renderEmpty}
                // onEndReached={() => { loadMovies(movies.page + 1) }}
                // onRefresh={() => loadMovies(1, true)}
                />
            </View>
        </>
    )
}
const styles = StyleSheet.create(
    {
        floatingButton: {
            width: 60,
            height: 60,
            borderRadius: 30,
            position: 'absolute',
            bottom: 10,
            right: 10,
        }
    }
)


export default MyMovies;