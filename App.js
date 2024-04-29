import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screen/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './App/Navigation/TabNav';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'IBMPBold': require('./assets/fonts/IBMPlexMono-Bold.ttf'),
    'IBMPMedium': require('./assets/fonts/IBMPlexMono-Medium.ttf'),
    'IBMPRegular': require('./assets/fonts/IBMPlexMono-Regular.ttf'),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <ClerkProvider publishableKey='pk_test_bWFpbi1maWxseS05My5jbGVyay5hY2NvdW50cy5kZXYk'>
      <View style={styles.container}>
      
         <SignedIn>
         <NavigationContainer>
          <TabNav/>
         </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <Login/>
        </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
});
