import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GApi from '../../Utils/GApi';

export default function List() {
    const [list, setList] = useState([]);
    useEffect(() => {
        getList();
    }, [])
    const getList = () => {
        GApi.getList().then(resp => {
            // console.log("resp", resp.sliders);
            setList(resp?.lists);
        })
    }
  return (
    <View>
      <Heading text={"List"} isViewAll={true}/>
      <FlatList data={list}
      horizontal={true}
      renderItem={({ item, index }) =>index<=3&&(
        <View style={styles.container}>
            <View style={styles.iconcontainer}>
            <View>
                <Image
                    source={{uri:item?.images[0]?.url}}
                    style={styles.iconIMG}
                    />
                   
                </View>
            <Text style={{fontFamily: 'IBMPBold'}}>{item?.name}</Text>
            <Text style={{fontFamily: 'IBMPBold'}}>{item?.email}</Text>
            <Text style={{fontFamily: 'IBMPBold'}}>{item?.contact}</Text>
            <Text style={{fontFamily: 'IBMPBold'}}>{item?.address}</Text>
            <Text style={{fontFamily: 'IBMPBold', backgroundColor: 'purple', padding:5, alignSelf: 'flex-start' }}>{item?.category.name}</Text>

            </View>
        </View>
    )
    }
      
      />
        
     
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
        width: 220,
        height: 100,
        resizeMode: 'contain',
      
       
    },
    iconcontainer: {
        height: 250,
        backgroundColor: 'white',
        padding: 17,
        borderWidth: 2,
        borderColor: 'blue',
        marginRight: 10,
        display:'flex',
        flexDirection: 'column',
        borderRadius: 9,

    },
    container:{
        display: 'flex',
        
    }
})
