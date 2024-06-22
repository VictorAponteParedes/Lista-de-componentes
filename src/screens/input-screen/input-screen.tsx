import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Button} from 'react-native';
import {useForm} from 'react-hook-form';
import {InputCustomComponent} from '../../components/input-custome/input-customer';

export const InputCustomScreen = () => {
  const {control, handleSubmit} = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <InputCustomComponent
        name="firstName"
        control={control}
        placeholderText="Escribe tu nombre"
      />
      <InputCustomComponent
        name="lastName"
        control={control}
        placeholderText="Escribe tu apellido"
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <View style={{backgroundColor: 'grey', width: 300, borderRadius: 8}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Continuar
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
