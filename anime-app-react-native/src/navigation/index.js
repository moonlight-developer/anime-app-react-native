import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import LikedScreen from '../screens/LikedScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {HomeIcon} from "react-native-heroicons/outline"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation(){

    function HomeStack(){

        return(
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}
                initialRouteName="Welcome"
            >
                <Stack.Screen name="HomeTab" component={HomeTabs} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
            </Stack.Navigator>
        )
    }

    function HomeTabs(){

        return(
            <Tab.Navigator>
                <Tab.Screen name="Home"  component={HomeScreen}/>
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Liked" component={LikedScreen} />
                <Tab.Screen name="Porfile" component={ProfileScreen} />
            </Tab.Navigator>
        );
    }

    return(
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    );
}