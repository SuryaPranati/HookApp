import { StyleSheet } from "react-native";

export const GLobalStyles = StyleSheet.create({

    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    topLogo: {
        height: '25%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    LoginTitle: {
        fontSize: 35,
        color: '#000082',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontFamily: 'Archivo-Black-Regular'
    },

    contentview: {
        width: '100%',
        height: '75%',
        paddingHorizontal: '6%',
        display: 'flex',
        alignItems: 'center',
    },

    applogotopbar: {
        width: 80,
        height: 80,
        margin: 20
    },

    authinput: {
        width: '100%',
        height: 45,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#DEDEDE',
        borderWidth: 1.5,
        fontSize: 20,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 10,
        // shadowColor: '#171717',
        // shadowOffset: { width: 2, height: 4 },
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
        // elevation: 15,
    },

    primarybtn: {
        width: '100%',
        height: 45,
        backgroundColor: '#0d6efd',
        borderRadius: 7,
        marginVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    primarybtntitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    secondarybtn: {
        width: '100%',
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 7,
        marginVertical: 10,
        display: 'flex',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#DEDEDE',
        borderWidth: 1.5,
        justifyContent: 'center'
    },

    secondarybtntitle: {
        color: '#C0C0C0',
        fontSize: 20,
        fontWeight: '600',
    },

    rulerwithtext: {
        color: '#DDDDDD',
        fontSize: 20
    },

    linkabletext: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: '400'
    },

    textlink: {
        color: '#0d6efd',
    }
});
