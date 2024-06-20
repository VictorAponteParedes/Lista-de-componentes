import { View } from "react-native";
import React from "react";

import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export {
    EntypoIcon,
    AntDesign,
    FontAwesomeIcon
}

import { IconTypes } from "../../types/types-projecs";


export const IconComponent = (props: IconTypes) => {
    const { name, size, color } = props
    return (
        <>
            <EntypoIcon name={name} size={size} color={color} />
        </>
    )
}