import React from 'react'
import { GLobalStyles } from '../GlobalStyles';
import logo from '../assets/images/applogo.png'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {

    const navigation = useNavigation();

    const [fontsLoader] = useFonts({
        'Archivo-Black-Regular': require('../assets/fonts/Archivo-Black-Regular.ttf')
    })

    if (!fontsLoader) {
        return undefined;
    }

    return (
        <>
            <StatusBar style='auto' />
            <SafeAreaView />
            <View style={GLobalStyles.container}>
                <View style={GLobalStyles.topLogo}>
                    <Image
                        style={GLobalStyles.applogotopbar}
                        source={logo} />
                </View>
                <View style={GLobalStyles.contentview}>
                    <Text style={GLobalStyles.LoginTitle}>Welcome</Text>
                    <Text style={GLobalStyles.LoginTitle}>back!</Text>

                    <TextInput style={GLobalStyles.authinput} placeholder='Username' />
                    <TextInput style={GLobalStyles.authinput} placeholder='Password' />

                    <TouchableOpacity style={GLobalStyles.primarybtn}>
                        <Text style={GLobalStyles.primarybtntitle}>Login</Text>
                    </TouchableOpacity>

                    <Text style={GLobalStyles.rulerwithtext}> ────  or  ────</Text>

                    <TouchableOpacity style={GLobalStyles.secondarybtn}>
                        <Text style={GLobalStyles.secondarybtntitle}>Continue with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={GLobalStyles.secondarybtn}>
                        <Text style={GLobalStyles.secondarybtntitle}>Continue with Google</Text>
                    </TouchableOpacity>

                    <Text style={GLobalStyles.linkabletext}>Don't have an account? <Text style={GLobalStyles.textlink} onPress={() => navigation.navigate('Signup')}>Signup </Text>here</Text>
                </View>
            </View>
        </>
    )
}
