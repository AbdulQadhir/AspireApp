import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import SpendLimitScreen from '../screens/SpendLimitScreen';

const Stack = createNativeStackNavigator();

function MainNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpendLimit" component={SpendLimitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
