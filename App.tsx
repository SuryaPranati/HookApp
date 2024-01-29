import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, ViewBase, TouchableOpacity } from 'react-native';
import { GLobalStyles } from './GlobalStyles';
import logo from './assets/images/applogo.png'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
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

          <Text style={GLobalStyles.linkabletext}>Don't have an account? <Text style={GLobalStyles.textlink}>Signup </Text>here</Text>
        </View>
      </View>
    </>
  );
}