import React, { useState, useEffect } from 'react'
import { TextInput, View, Text, StyleSheet, TouchableWithoutFeedback, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from "../../modules/Utils";

const MovieForm = (props) => {

    const [movieData, setMovieData] = useState({ title: "", overview: "", release_date: new Date(), poster_path: "" })
    const [showDatePicker, setShowDatePicker] = useState(false)
    const { onSave = () => { } } = props;
    const formattedDate = formatDate(movieData.release_date);
    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={styles.section}>
                <Text style={styles.title}>Title</Text>
                <TextInput style={styles.textInput} onChangeText={(text) => setMovieData({ ...movieData, title: text })} value={movieData.title} />
            </View>
            {/* Release date */}
            <View style={styles.section}>
                <Text style={styles.title}>Release date</Text>
                <TouchableWithoutFeedback onPress={() => { setShowDatePicker(true) }}>
                    <View>
                        <TextInput style={styles.textInput} value={formattedDate} editable={false} />
                    </View>
                </TouchableWithoutFeedback>

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
                    }}
                />}
            </View>
            {/* overview */}
            <View style={styles.section}>
                <Text style={styles.title}>Overview</Text>
                {/** text start */}
                <TextInput style={styles.textInput} numberOfLines={4} multiline={true} onChangeText={(text) => setMovieData({ ...movieData, overview: text })} value={movieData.overview} />
            </View>
            {/* poster */}
            <View style={styles.section}>
                <Text style={styles.title}>Poster</Text>
            </View>
            {/* save button */}
            <View style={[styles.section, { alignContent: "flex-end" }]}>
                <Button title="Save" onPress={() => {
                    onSave({ ...movieData, release_date: formattedDate })
                }} />

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: "80%",
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