import { TouchableOpacity, View, Text, StyleSheet } from "react-native";


export const ComponentListScreen = ({ navigation }) => {


    return (
        <TouchableOpacity onPress={() => {

            navigation.navigate("ModalScreen")
        }}>
            <View style={estiloModalScreen.container}>
                <Text style={estiloModalScreen.title}>Componente Modal</Text>
            </View>
        </TouchableOpacity>
    )
}

const estiloModalScreen = StyleSheet.create({
    container: {
        backgroundColor: "#33cadd",
        paddingVertical: 25,
        marginHorizontal: 20,
        borderRadius: 20
    },
    title: {
        textAlign: "center",
        color: "#000",
        fontSize: 17
    }
})