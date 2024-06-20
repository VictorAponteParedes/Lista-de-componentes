import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from 'react';
import { ModalTypes } from "../../types/types-projecs";
import { AntDesign } from '../icon-custom/icon-component';
import { estiloModal } from './modal-component-style';



export const ModalComponent = (props: ModalTypes) => {
    const { title, subTitle, color, titleColor, subTitleColor } = props;

    const [closeModal, setCloseModal] = useState<boolean>(true)

    const closeModalComponent = () => {
        setCloseModal(!closeModal)
    }
    return (
        <>
            {
                closeModal && (
                    <View style={estiloModal.container}>
                        <View style={[estiloModal.containerModal, { backgroundColor: color || '#8b9cc9' }]}>
                            <TouchableOpacity
                                onPress={() => {
                                    closeModalComponent()
                                }}
                                style={estiloModal.containerClose}>
                                <AntDesign name="close" color="#000" size={25} />
                            </TouchableOpacity>
                            <Text style={[estiloModal.title, { color: titleColor || '#000' }]}>{title}</Text>
                            <Text style={[estiloModal.subTitle, { color: subTitleColor || '#000' }]}>{subTitle}</Text>
                        </View>
                    </View>
                )
            }

        </>
    );
}

