import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignupScreen() {
    return (
        <>
            <SafeAreaView />
            <View style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <Text>Signup Page</Text>
            </View>
        </>
    )
}
