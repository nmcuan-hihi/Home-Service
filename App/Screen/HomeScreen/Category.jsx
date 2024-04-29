import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GApi from '../../Utils/GApi';
import Heading from '../../Components/Heading';
import { useNavigation } from '@react-navigation/native';

export default function Category() {

    const [category, setCategory] = useState();
    const nav = useNavigation();
    useEffect(() => {
        getCategory();
    }, [])
    const getCategory = () => {
        GApi.getCategory().then(resp => {
            console.log("resp", resp.sliders);
            setCategory(resp?.categories);
        })
    }
    
    return (
        <View style={{ marginTop: 10 }}>
            
          <Heading text={'Category'} isViewAll={true}/>
            <FlatList
                data={category}
                numColumns={4}

                renderItem={({ item, index }) =>index<=3&&(
                    <TouchableOpacity style={styles.container}
                    onPress={()=>nav.push('info', {category:item.name})}
                    >
                        <View style={styles.iconcontainer}>
                            <Image
                                source={{ uri: item?.icon?.url }}
                                style={styles.iconIMG}
                            />
                        </View>
                        <Text style={{fontFamily: 'IBMPBold'}}>{item?.name}</Text>
                    </TouchableOpacity>
                )
                }
            />
        </View >
    )
}
const styles = StyleSheet.create({
    heading: {

        fontSize: 20,
        fontFamily: 'IBMPBold',
        marginBottom: 10
    },
    iconIMG: {
        width: 40,
        height: 40,
        borderRadius: 99,
    },
    iconcontainer: {
        backgroundColor: 'white',
        padding: 17,
        borderRadius: 99,
    },
    container:{

        flex:1,
        alignItems: 'center'
    }
})