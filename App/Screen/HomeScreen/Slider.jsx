import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GApi from '../../Utils/GApi';
import Heading from '../../Components/Heading';


export default function Slider() {

    const [slider, setSlider] = useState();
    useEffect(() => {
        getSliders();
    }, [])
    const getSliders = () => {
        GApi.getSlider().then(resp => {
          //  console.log("resp", resp.sliders);
            setSlider(resp?.sliders);
        })
    }
    return (
        <View>
           
            <Heading text={'Offer for you'}/>
            <FlatList
            data={slider}
         
            
            horizontal={true}
            renderItem={({item, index})=>(
                <View>
                    <Image
                    source={{uri:item?.image?.url}}
                    style={styles.sliderIMG}
                    />
                   
                </View>
            )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    heading:{
        
        fontSize: 20,
        fontFamily: 'IBMPBold',
        marginBottom: 10
    },
    sliderIMG:{
    width: 220,
    height: 100,
    marginRight: 20,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 15,
    }
})