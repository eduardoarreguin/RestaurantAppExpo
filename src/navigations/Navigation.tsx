import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantsStack } from './RestaurantsStack';
import { AccountStack } from './AccountStack';
import { FavoritesStack } from './FavoritesStack';
import { SearchStack } from './SearchStack';
import { TopRestaurantsStack } from './TopRestaurantsStack';

const Tab = createBottomTabNavigator()
const Navigation = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator 
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name='Restaurants'
                    component={ RestaurantsStack }
                    options={{  title: 'Restaurantes',  }}
                />                
                <Tab.Screen
                    name='Favorites'
                    component={ FavoritesStack }
                    options={{ title: 'Favoritos' }}
                />
                <Tab.Screen
                    name='TopRestaurants'
                    component={ TopRestaurantsStack }
                    options={{ title: 'Top' }}
                />
                <Tab.Screen
                    name='Search'
                    component={ SearchStack }
                    options={{ title: 'Buscar' }}
                />
                <Tab.Screen
                    name='Account'
                    component={ AccountStack }
                    options={{ title: 'Cuenta' }}
                    
                />
            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default Navigation
