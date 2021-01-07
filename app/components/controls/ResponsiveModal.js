import React from 'react';
import { Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import { StyleSheet } from 'react-native';

const ResponsiveModal = ({ visible, onDismiss, children }) => {
    return (
        <Modal visible={visible} transparent>
            <TouchableWithoutFeedback onPress={() => onDismiss()}>
                <View style={style.modal}>
                    <TouchableWithoutFeedback>
                        {children}
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
export const style = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modalInner: {
        height: "80%",
        width: "80%",
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
export default ResponsiveModal;