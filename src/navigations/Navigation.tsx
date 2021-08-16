import React from 'react'
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantsStack } from './RestaurantsStack';
import { AccountStack } from './AccountStack';
import { FavoritesStack } from './FavoritesStack';
import { SearchStack } from './SearchStack';
import { TopRestaurantsStack } from './TopRestaurantsStack';
import { PrimaryColor, SecondaryColor } from '../theme/globalStyles';
import { TabText } from '../components/TabText';
import { TabIcon } from '../components/TabIcon';

const Tab = createBottomTabNavigator();

const Navigation = () => {

    return (
        <NavigationContainer >
            <Tab.Navigator 
                sceneContainerStyle={{
                    backgroundColor: 'white'
                }}
                screenOptions={{                    
                    headerShown: false,
                    tabBarActiveTintColor: PrimaryColor,
                    tabBarInactiveTintColor: SecondaryColor,
                    //tabBarActiveBackgroundColor: '#a98ac2',
                    //tabBarActiveBackgroundColor: '#d5c7ed',
                    tabBarLabelStyle:{
                        marginBottom: Platform.OS === 'ios' ? 0 : 10,
                    },
                    tabBarStyle:{
                        position: 'absolute',
                        backgroundColor: 'rgba(255, 255, 255, 1 )',
                        borderWidth: 0,
                        borderTopWidth: 0,
                        elevation: 0,
                        height: Platform.OS === 'ios' ? 80 : 60 
                    },
                  }}
                
                initialRouteName='Restaurants'                
            >
                <Tab.Screen
                    name='RestaurantsStack'
                    component={ RestaurantsStack }
                    options={{  
                        tabBarLabel:  ({ focused }) => <TabText focused={ focused } title='Restaurantes' /> ,
                        tabBarIcon: ({ focused }) => <TabIcon focused={ focused } name='compass-outline' />,
                        tabBarBadge : 2,                         
                    }}
                    
                />                
                <Tab.Screen
                    name='FavoritesStack'
                    component={ FavoritesStack }
                    options={{ 
                        tabBarLabel:  ({ focused }) => <TabText focused={ focused } title='Favoritos' /> ,
                        tabBarIcon: ({ focused }) => <TabIcon focused={ focused } name='heart-outline' />,
                    }}
                />
                <Tab.Screen
                    name='TopRestaurantsStack'
                    component={ TopRestaurantsStack }
                    options={{ 
                        tabBarLabel:  ({ focused }) => <TabText focused={ focused } title='Tops' /> ,
                        tabBarIcon: ({ focused }) => <TabIcon focused={ focused } name='star-outline' />,
                    }}
                />
                <Tab.Screen
                    name='SearchStack'
                    component={ SearchStack }
                    options={{
                        tabBarLabel:  ({ focused }) => <TabText focused={ focused } title='Buscar' /> ,
                        tabBarIcon: ({ focused }) => <TabIcon focused={ focused } name='magnify' />,
                    }}
                />
                <Tab.Screen
                    name='AccountStack'
                    component={ AccountStack }
                    options={{
                        tabBarLabel:  ({ focused }) => <TabText focused={ focused } title='Cuenta' /> ,
                        tabBarIcon: ({ focused }) => <TabIcon focused={ focused } name='home-outline' />, 
                        tabBarBadge : 5,  
                    }}                    
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
