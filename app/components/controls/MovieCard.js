import React, { memo } from 'react'
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native'
const PLACEHOLDER_IMAGE_PATH = "../../assets/images/film-poster-placeholder.png";
const MovieCard = (props) => {
    const { title = "", overview = "", posterPath = "", release_date = "", isLoading = false } = props;
    const imageSource = posterPath ? { uri: posterPath } : require(PLACEHOLDER_IMAGE_PATH);
    return (
        <View
            style={styles.movieCard}
        >
            {isLoading ?
                <ActivityIndicator style={[styles.moviePoster, styles.loadingPoster]} size="large" color="tomato" />
                : <Image
                    style={styles.moviePoster}
                    source={imageSource}
                />}

            {isLoading ? <View style={styles.textContainer} >
                <ActivityIndicator style={{ flex: 1 }} size="large" color="tomato" />
            </View> :
                <View style={styles.textContainer}>
                    <View style={{ marginBottom: 12 }}>
                        <Text style={styles.title}>{title}</Text>
                        <Text>{release_date}</Text>
                    </View>
                    <View style={{ flex: 1, }}>
                        {/**TODO: handle too big text */}
                        <Text style={styles.overview} ellipsizeMode="tail">{overview}</Text>
                    </View>
                </View>}

        </View>
    )
}
const styles = StyleSheet.create({
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
    },
    loadingPoster: {
        backgroundColor: "grey"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 3
    },
    overview: {
        flex: 1,
        flexWrap: 'wrap',
        flexShrink: 1,

    },
    textContainer: {
        flex: 1,
        height: 200,
        marginStart: 10
    }
});
export default memo(MovieCard);