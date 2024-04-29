import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons, Entypo } from '@expo/vector-icons';
import GApi from '../../Utils/GApi';

export default function Info() {
    const param = useRoute().params;
    const nav = useNavigation();
    useEffect(() => {

    })
    const [info, setInfo] = useState([]);
    useEffect(() => {
        getInfo();
    }, [])
    const getInfo = () => {
        GApi.getListByCategory(param.category).then(resp => {
         
            setInfo(resp?.lists);
        })
    }
    return (
        <View style={{ padding: 20, paddingTop: 30 }}>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 20 }}
                onPress={() => nav.goBack()}
            >
                <Ionicons name="arrow-back-circle-outline" size={35} color="black" />
                <Text style={{ fontFamily: 'IBMPBold', fontSize: 24 }}>{param?.category}</Text>
            </TouchableOpacity>

            {info.length > 0 ?
            <FlatList data={info}
                horizontal={true}
                renderItem={({ item, index }) => index <= 3 && (
                    <TouchableOpacity style={styles.container}
                    
                    onPress={()=> nav.push('infodetail', {info:item})}>
                        
                        <Image
                            source={{ uri: item?.images[0]?.url }}
                            style={styles.iconIMG}
                        />
                        <View style={{ width: 240, paddingLeft: 30 }}>
                            <Text style={{ fontFamily: 'IBMPBold' }}>{item?.name}</Text>
                            <Text style={{ fontFamily: 'IBMPBold' }}>{item?.email}</Text>
                            <Text style={{ fontFamily: 'IBMPBold' }}>{item?.contact}</Text>
                            <Text style={{ fontFamily: 'IBMPBold' }}>
                                <Entypo name="location" size={24} color="purple" />{item?.address}
                            </Text>
                            {/* <Text style={{ fontFamily: 'IBMPBold', backgroundColor: 'purple', padding: 5, alignSelf: 'flex-start' }}>{item?.category.name}</Text> */}
                        </View>
                    </TouchableOpacity>
                )
                }
            /> 
            : 
            <Text style={{ fontFamily: 'IBMPBold', fontSize: 25, textAlign: 'center', marginTop: 20, color: 'blue' }}>Not List Found</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {

        fontSize: 20,
        fontFamily: 'IBMPBold',
        marginBottom: 10
    },
    iconIMG: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },

    container: {


        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,

    }
})
