import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useForm } from "react-hook-form";
import { InputCustomComponent } from "../../components/input-custome/input-customer";

export const inputCustomScreen = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Aquí puedes manejar los datos del formulario
    };

    return (
        <View style={styles.container}>
            <Text>Ejemplo de formulario con React Native Hook Form</Text>

            {/* Utilizando el componente personalizado */}
            <InputCustomComponent name="firstName" control={control} />

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
});
