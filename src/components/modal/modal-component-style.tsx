import { StyleSheet } from "react-native";



export const estiloModal = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    containerClose: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    containerModal: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: "5%",
        borderRadius: 15,
        position: 'relative'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 16,
        textAlign: 'center'
    }
});