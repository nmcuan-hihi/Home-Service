import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Category from './Category'
import List from './List'

export default function Home() {
  return (
    <View>
      <Header/>
      <View style={{padding: 20}}>
      <Slider/>

      <Category/>

      <List/>
      </View>
    </View>
  )
}
