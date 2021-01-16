import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View, SafeAreaView } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MovieForm from "../controls/MovieForm";
import MoviesList from "../controls/MoviesList";
import ResponsiveModal from "../controls/ResponsiveModal";
const EmptyList = () => {
    return (
        <View style={styles.emptyList}>
            <Icon name={"tablet-android"} size={100} color={"tomato"} />
            <Text style={styles.title}>Nothing</Text >
            <Text>Your collection list is empty</Text>

        </View>
    )
}
const MyMovies = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [moviesList, setMovies] = useState([]);
    return (
        <>
            <View style={{ flex: 1 }}>
                <ResponsiveModal visible={isModalVisible} onDismiss={() => setIsModalVisible(false)}>
                    <MovieForm onSave={(movie) => {
                        const newMovies = [{ ...movie, id: moviesList.length }, ...moviesList];
                        setIsModalVisible(false);
                        setMovies(newMovies);

                    }} />
                </ResponsiveModal>
                <SafeAreaView style={{ flex: 1 }}>
                    <MoviesList
                        data={moviesList}
                        ListEmptyComponent={EmptyList}
                        contentContainerStyle={{ flexGrow: 1 }} />
                </SafeAreaView>
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
        },
        emptyList: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: "100%"

        },
        title: {
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 10,
            marginBottom: 8
        },
        subTitle: {
            fontSize: 10,
            marginTop: 10,
            marginBottom: 8

        }
    },

)


export default MyMovies;