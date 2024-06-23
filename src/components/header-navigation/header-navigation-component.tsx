import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IconComponent} from '../icon-custom/icon-component';
import {FontAwesomeIcon, IoniconsIcon} from '../icon-custom/icon-component';

type headerTypes = {
  title?: string;
  imagenIzq?: any;
  imagenDer?: any;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
};

export const HeaderNavigateComponent = (props: headerTypes) => {
  const {imagenIzq, imagenDer, title, iconName, iconColor, iconSize} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {iconName ? (
          <IoniconsIcon name={iconName} size={iconSize} color={iconColor} />
        ) : (
          <Image source={imagenIzq} style={styles.image} />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{title ? title : 'Header componente'}</Text>
      <Image source={imagenDer} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    borderRadius: 5,
    width: 45,
    height: 45,
  },
  title: {
    color: '#000',
    fontSize: 17,
    alignSelf: 'center',
  },
});
