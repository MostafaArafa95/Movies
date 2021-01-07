import 'react-native-gesture-handler';

import React, { Component } from 'react'
//TODO: Remove useless pages files
import AllMovies from "./components/pages/AllMovies";
import MyMovies from "./components/pages/MyMovies";
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
                                case 'My Movies': iconName = "movie-filter"; break;
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
                    <Tab.Screen name="All Movies" component={AllMovies} />
                    <Tab.Screen name="My Movies" component={MyMovies} />

                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export default Root;
