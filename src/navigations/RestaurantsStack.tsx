import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import { Restaurants } from '../screens/Restaurants';

const Stack = createStackNavigator();

export const RestaurantsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                //headerShown: false,
            }}
        >
            <Stack.Screen
                name='Restaurats'
                component={ Restaurants }
                options={{  title: 'Restaurantes' }}
            />
        </Stack.Navigator>
    )
}
