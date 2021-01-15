
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';

const ImagePicker = (props) => {
    const [response, setResponse] = useState(null);
    const { onSave = () => { } } = props;
    const pickImage = () => {
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 1000,
            maxWidth: 1000,
        }, (response) => {
            setResponse(response);
            if (response?.uri) {
                onSave(response.uri)
            }

        })
    }

    return (response?.uri ?
        <View style={styles.image}>
            <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: response.uri }}
            />
        </View> :
        <TouchableOpacity onPress={pickImage}>
            <View>
                <Icon name={"image-area"} size={50} color={"tomato"} />
            </View>
        </TouchableOpacity>

    )


}
const styles = StyleSheet.create({
    image: {
        marginVertical: 24,
        alignItems: 'center',
    }
});
export default ImagePicker;