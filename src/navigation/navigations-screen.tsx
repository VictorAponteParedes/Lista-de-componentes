import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { HomeScreen } from '../screens/home/home-screen';
import { ProfileScreen } from '../screens/profile/profile-screen';
import { ModalScreen } from '../screens/modal/modal-screen';



import { NavigationTabs } from './navigation-tab';




const Stack = createNativeStackNavigator();




export const MyNavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Tabs"
                    component={NavigationTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ title: 'Bienvenido' }}
                />
                <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                />
                <Stack.Screen
                    name="ModalScreen"
                    component={ModalScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};