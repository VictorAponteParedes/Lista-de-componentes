import * as React from 'react';
import { View, Text } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//NAVIGATIONS
import { NavigationTabs } from "./src/navigation/navigation-tab";
import { MyNavigationStack } from "./src/navigation/navigations-screen";


import { HomeScreen } from './src/screens/home/home-screen';
import { ProfileScreen } from './src/screens/profile/profile-screen';



const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <MyNavigationStack />
  );
};


export default App;
