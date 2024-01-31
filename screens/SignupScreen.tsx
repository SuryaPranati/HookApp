import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import logo from '../assets/images/applogo.png';
import { SafeAreaView, } from 'react-native-safe-area-context'
import { GLobalStyles } from '../GlobalStyles';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
    const navigation = useNavigation();
    
    return (
        <>
            <SafeAreaView />
            <StatusBar style='auto' />
            <View style={GLobalStyles.container}>
                <View style={GLobalStyles.topLogo}>
                    <Image
                        style={GLobalStyles.applogotopbar}
                        source={logo} />
                </View>
                <View style={GLobalStyles.contentview}>
                    <Text style={GLobalStyles.LoginTitle}>Sign UP</Text>
                    <Text style={GLobalStyles.LoginTitleDesc}>Create a new account</Text>

                    <TextInput style={GLobalStyles.authinput} placeholder='Username' />

                    <TextInput style={GLobalStyles.authinput} secureTextEntry placeholder='Password' />

                    <TextInput style={GLobalStyles.authinput} keyboardType="numeric" placeholder='Mobile No' />

                    <TouchableOpacity style={GLobalStyles.primarybtn}>
                        <Text style={GLobalStyles.primarybtntitle}>Signup</Text>
                    </TouchableOpacity>

                    <Text style={GLobalStyles.rulerwithtext}> ────  or  ────</Text>

                    <TouchableOpacity style={GLobalStyles.secondarybtn}>
                        <Text style={GLobalStyles.secondarybtntitle}>Signup with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={GLobalStyles.secondarybtn}>
                        <Text style={GLobalStyles.secondarybtntitle}>Signup with Google</Text>
                    </TouchableOpacity>

                    <Text style={GLobalStyles.linkabletext}>Already have an account? <Text style={GLobalStyles.textlink} onPress={() => navigation.navigate('Login')}>Login </Text>here</Text>
                </View>
            </View>
        </>
    )
}
