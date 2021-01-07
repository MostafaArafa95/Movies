import 'react-native-gesture-handler';

import React, { Component } from 'react'
import { Text, View } from 'react-native'
//TODO: Remove useless pages files
import MoviesList from "./components/pages/MoviesList";
import { NavigationContainer } from '@react-navigation/native';
//TODO: uninstall '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
export class Root extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            switch (route.name) {
                                case 'All Movies': iconName = "movie-search"; break;
                                case 'My Movies': console.log("hi"); iconName = "movie-filter"; break;
                                default:
                                    break;
                            }
                            return <Icon name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        //TODO: make themes file
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="All Movies" component={MoviesList} />
                    <Tab.Screen name="My Movies" component={MoviesList} />

                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export default Root;
