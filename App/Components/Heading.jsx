import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text, isViewAll=false}) {
  return (
    <View style={styles.container}>
       <Text style={styles.heading}>{text}</Text>
       {isViewAll? <Text>View All</Text>:null}
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    heading: {
        fontSize: 20,
        fontFamily: 'IBMPBold',
        marginBottom: 10
    },
})