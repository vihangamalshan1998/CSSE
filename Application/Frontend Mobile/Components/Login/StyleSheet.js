import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#339966",
        alignItems: "center",
        justifyContent: "center",
        width: '100%'

    },
    container2:{
        backgroundColor: "#eeeeee",
        width: '100%',
        height: '75%',
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        alignItems: "center",

    },
    container3:{
        backgroundColor: "white",
        width: '100%',
        height: '55%',
        marginTop: '10%',
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
    },
    title: {
        paddingTop: 20,
        fontSize:20,
        fontWeight: '700'
    },
    image: {
        marginTop: 60,
        marginLeft: 8,
        height: 150,
        width: 250,
        marginBottom: 30
    },
    inputView: {
        backgroundColor: "#eeeeee",
        borderRadius: 25,
        width: "80%",
        height: 50,
        marginBottom: 5,
        marginTop: 40,
        alignItems: "center",

    },
    TextInput: {
        height: 60,
        flex: 1,
        padding: 10,
        width: "80%",
    },

    forgot_button: {
        height: 30,
        marginBottom: 2,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#339966",
    },
    loginText: {
        color: 'white',
        fontWeight: '700',
        alignItems: "center"
    },
    footer: {
        width: '100%',
        height : 80
    },




});

export default styles;