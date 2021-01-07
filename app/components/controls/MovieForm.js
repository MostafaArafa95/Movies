import React, { useState, useEffect } from 'react'
import { TextInput, View, Text, StyleSheet, TouchableWithoutFeedback, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
const MovieForm = (props) => {

    const [movieData, setMovieData] = useState({ title: "", overview: "", release_date: new Date(), poster_path: "" })
    const [showDatePicker, setShowDatePicker] = useState(false)
    const { onSave = () => { } } = props;
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>Title</Text>
                <TextInput style={styles.textInput} onChangeText={(text) => setMovieData({ ...movieData, title: text })} value={movieData.title} />
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Release date</Text>
                {/* <TouchableWithoutFeedback onPress={() => console.log("hi")}> */}
                <TouchableWithoutFeedback onPress={() => console.log("hi")}>
                    <TextInput style={styles.textInput} value={movieData.release_date.toString()} editable={false} />
                </TouchableWithoutFeedback>
                <Button title="Pick Date" onPress={() => { setShowDatePicker(true) }} />
                {showDatePicker && <DateTimePicker
                    testID="dateTimePicker"
                    value={movieData.release_date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) => {
                        const currentDate = selectedDate || date;
                        setShowDatePicker(false);
                        setMovieData({ ...movieData, release_date: currentDate });
                        //console.log(typeof currentDate);
                        // setDate(currentDate);
                    }}
                />}
                {/* </TouchableWithoutFeedback> */}
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Overview</Text>
                {/** text start */}
                <TextInput style={styles.textInput} numberOfLines={4} multiline={true} onChangeText={(text) => setMovieData({ ...movieData, overview: text })} value={movieData.overview} />
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Poster</Text>

            </View>
            <View style={[styles.section, { alignContent: "flex-end" }]}>
                <Button title="Save" onPress={() => {
                    onSave({ ...movieData, release_date: movieData.release_date.toString() })
                }} />

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "ghostwhite"
    },
    section: {
        marginBottom: 10
    },
    textInput: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "white"
    },
    title: {
        fontSize: 15,
        marginBottom: 3
    },
})
export default MovieForm;