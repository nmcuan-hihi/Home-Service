import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';




WebBrowser.maybeCompleteAuthSession();
export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);


    return (
        <View style={{ alignItems: 'center' }}> 
            <Image source={require('../../../assets/image/login.png')}
                style={styles.loginimg}
            />
            <View style={styles.boxlogin} >


                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Login to my app</Text>
                <TouchableOpacity style={styles.buttonlogin} onPress={onPress}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Let's started</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    loginimg: {
        width: 280,
        height: 530,
        marginTop: 50,
        borderWidth: 4,
        borderColor: 'blue',

        borderRadius: 15,
    },
    boxlogin: {
        width: '100%',
        height: "40%",
        backgroundColor: 'black',
        marginTop: -10,
        padding: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    buttonlogin: {


        marginTop:30,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 99,
    }
})