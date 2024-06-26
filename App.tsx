import * as React from 'react';
import { View, Text } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { HomeScreen } from './src/screens/home/home-screen';
import { ProfileScreen } from './src/screens/profile/profile-screen';

const Stack = createNativeStackNavigator();







const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
