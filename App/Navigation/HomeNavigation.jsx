import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home, {HomeScreen} from '../Screen/HomeScreen/Home'
import Info from '../Screen/InfoScreen/Info';
import InfoDetail from '../Screen/InfoScreen/InfoDetail';

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return ( 
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}
    // screenOptions={({ route }) => ({
    //     headerShown: route.name !== 'home',
    //   })}
    >
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='info' component={Info}/>
        <Stack.Screen name='infodetail' component={InfoDetail}/>
    </Stack.Navigator>
  )
}