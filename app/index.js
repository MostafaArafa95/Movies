import 'react-native-gesture-handler';

import { AllMovies, MyMovies } from "./components/pages"
import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
                                case 'My Movies': iconName = "movie-filter"; break;
                                default:
                                    break;
                            }
                            return <Icon name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name="All Movies" component={AllMovies} />
                    <Tab.Screen name="My Movies" component={MyMovies} />

                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export default Root;
