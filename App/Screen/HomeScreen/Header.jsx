import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FontAwesome } from '@expo/vector-icons';




export default function Header() {
    const { user, isLoading } = useUser();
   
    return user && (
        <View style={styles.container}>
            <View  style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }}
                        style={styles.userImg}
                    />
                    <View>
                        <Text style={{ color: 'white' }}>Welcome,</Text>
                        <Text style={{ color: 'white', fontSize: 20,fontFamily: 'IBMPBold' }}>{user?.fullName}</Text>
                    </View>
                </View>
                <FontAwesome name="bookmark" size={30} color={'black'} />
            </View>

            {/* thanh tim kiếm */}
            <View style={styles.searchContainer}>

                <TextInput placeholder='Search'
                   style={styles.textInput}
                />
                <FontAwesome style={styles.searchbtn} name="search" size={24} color="black" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'blue',
        paddingLeft: 20,
        padding: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    profileContainer: {
        alignItems: 'center', // căn giữa
        
        display: 'flex',
        flexDirection: 'row',
        gap: 10, // khoảng cách giữa các item
    },
    textInput:{

        marginTop: 10,
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '85%',
        fontSize: 16,
        fontFamily: 'IBMPBold'
    },
    searchContainer:{
        alignItems: 'center', // căn giữa    
        display: 'flex',
        flexDirection: 'row',
        gap: 10, // khoảng cách giữa các item
    },
    profileMainContainer: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'// ở cuối 
    },
    userImg: {

        width: 45,
        height: 45,
        borderRadius: 99,
    },
    searchbtn: {
        marginTop: 10,
       padding:10,
       backgroundColor: 'white',
        borderRadius: 8,
    }
})