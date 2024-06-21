import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

export const InputCustomComponent = ({ name, control }) => {
    const { control: formControl } = useForm();

    return (
        <View style={styles.container}>
            <Controller
                control={control || formControl}
                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: 300,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
});
