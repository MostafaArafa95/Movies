import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MovieForm from "../controls/MovieForm";
import MoviesList from "../controls/MoviesList";
import ResponsiveModal from "../controls/ResponsiveModal";

const MyMovies = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [moviesList, setMovies] = useState([]);
    //TODO: add string file
    //TODO: fix this UI
    const renderEmpty = () => (<Text>Your list is empty</Text>)
    return (
        <>
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
                    ListEmptyComponent={renderEmpty} />
            </View>
            <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
                <View style={styles.floatingButton}>
                    <Icon name={"plus-circle"} size={60} color={"tomato"} />
                </View>
            </TouchableWithoutFeedback>
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