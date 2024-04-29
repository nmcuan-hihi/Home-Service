import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons, Entypo } from '@expo/vector-icons';
import Heading from '../../Components/Heading';

export default function InfoDetail() {
    const nav = useNavigation();
    const param = useRoute().params;
    const [info, setInfo] = useState(param?.info)
    const [readmore, setReadMore] = useState(false)
    useEffect(() => {
        // console.log(param?.info)
    })
    return (
        <View >
            <TouchableOpacity style={styles.btnBackContainer}
                onPress={() => nav.goBack()}
            >
                <Ionicons name="arrow-back-circle-outline" size={35} color="black" />
                {/* <Text style={{ fontFamily: 'IBMPBold', fontSize: 24 }}>BACK</Text> */}
            </TouchableOpacity>
            <Image source={{ uri: info.images[0].url }} resizeMode="cover"
                style={{ width: "100%", height: 300 }}
            />
            <View style={styles.infocontainer}>
                <Text style={{ fontFamily: 'IBMPBold', fontSize: 25 }}>{info.name}</Text>
                <View style={styles.boxInfo}>
                    <Text style={{ fontFamily: 'IBMPMedium', color: 'purple' }}>{info.contact}</Text>
                    <Text style={{ color: 'purple', backgroundColor: '#df81f0', padding: 2, borderRadius: 3, fontSize: 12 }}>{info.category.name}</Text>

                </View>
                <Text style={{ fontFamily: 'IBMPBold' }}>
                    <Entypo name="location" size={24} color="purple" />{info?.address}
                </Text>
                <View style={styles.line} />
                <Heading text={"About me"} />
                <ScrollView style={{height: '26.5%'}} >
                <Text style={{ fontSize: 16 }} numberOfLines={readmore?15:5}>{info.about}</Text>
                <TouchableOpacity
                onPress={()=>{setReadMore(!readmore)}}
                >
                    <Text style={{ color: 'purple', fontSize: 16 }}>{readmore? "Read less" : "Read more..."}</Text>
                </TouchableOpacity>
                </ScrollView>
               
            </View>
            <View style={{display: 'flex', flexDirection: 'row', margin: 8, gap: 8}}>
                <TouchableOpacity style={styles.btnMes}>
                    <Text style={{textAlign:'center', fontFamily: 'IBMPBold', color: 'blue'}}>Massage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnBooking}>
                    <Text style={{textAlign:'center', fontFamily: 'IBMPBold', color: 'white'}}>Booking</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    btnBackContainer: {
        // display: 'flex', 
        // flexDirection: 'row', 

        // gap: 10, 
        // alignItems: 'center',
        // marginBottom: 20 
        position: 'absolute',
        zIndex: 1,
        padding: 20
    },
    infocontainer: {

        padding: 20,
        display: 'flex',
        gap: 7,
    },
    line: {
        width: '100%',
        height: 1,

        backgroundColor: 'black',
        marginVertical: 10,
    },
    boxInfo: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    btnMes:{
        padding: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'purple',
        borderRadius: 99,
        textAlign: 'center',
        flex: 1,
    },
    btnBooking:{
        padding: 10,
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 99,
        textAlign: 'center',
        backgroundColor: 'purple',

        flex: 1,
    }
})