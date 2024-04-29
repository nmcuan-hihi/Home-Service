import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/HomeScreen/Home';
import Profile from '../Screen/ProfileScreen/Profile';
import Booking from '../Screen/BookingScreen/Booking';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeNavigation from './HomeNavigation';
const Tab = createBottomTabNavigator();
export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'black',
        }}>
            <Tab.Screen name='home' component={HomeNavigation}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Home</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    )
                }}

            />
            <Tab.Screen name='profile' component={Profile} 
            options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Profile</Text>
                ),
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user-circle" size={24} color={color} />
                )
            }}
            />
            <Tab.Screen name='booking' component={Booking}
            options={{
                tabBarLabel: ({ color }) => (
                    <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Booking</Text>
                ),
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="bookmark" size={24} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    )
}