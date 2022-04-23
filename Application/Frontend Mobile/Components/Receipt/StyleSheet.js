import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#339966",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',

    },
    container2:{
        backgroundColor: "white",
        width: '90%',
        height: '80%',
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginLeft: '10%',
        marginRight: '10%',
        alignItems: "center",
        marginBottom: 20

    },
    container3:{
        backgroundColor: "#eeeeee",
        width: '100%',
        height: '80%',
        marginTop: '8%',
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: "flex-start",
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10

    },
    title: {
        paddingTop: 20,
        fontSize:20,
        fontWeight: '700',
        alignContent: 'flex-start',
        marginLeft: 70,
        marginBottom: 20
    },
    image: {
        marginTop: 40,
        marginLeft: 8,
        height: 150,
        width: 220,
        marginBottom: 30,
        borderRadius: 70

    },
    inputView: {
        backgroundColor: "#eeeeee",
        borderRadius: 25,
        width: "80%",
        height: 45,
        marginBottom: 5,
        marginTop: 25,
        alignItems: "center",

    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        width: "80%",
    },

    forgot_button: {
        height: 30,
        marginBottom: 2,
    },

    headline: {
        width: "90%",
        borderRadius: 25,
        height: 50,
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#62BD69",
        borderWidth: 3
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    headlineText: {
        color: 'white',
        fontWeight: '700',
        paddingLeft: 10
    },
    receiptBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#FFBA01",
    },
    receiptText: {
        color: 'white',
        fontWeight: '700',
        alignItems: "center"
    },
    DataRetrive: {
        marginLeft: 100
    },
    PayNowBtn: {
        width: "100%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#339966"
    },
    PaynowText: {
        color: 'white',
        fontWeight: '700',
        alignItems: "center"
    },
    StartLocation: {
        fontWeight: '700',
        marginLeft: 60,
        fontSize:20,
    },
    Distance: {
        fontWeight: '700',
        marginLeft: 95
    },
    Amount: {
        fontWeight: '700',
        marginLeft: 95,
        fontSize:20,
    },
    Thank: {
        marginTop: 10,
        fontSize:20,
        fontWeight: '700',
        alignContent: 'flex-start',
        marginLeft: 100
    },
    sltb: {
        fontSize:20,
        fontWeight: '700',
        alignContent: 'flex-start',
        marginLeft: 70,
        marginBottom: 5
    },
    routeStyle: {
        fontSize:20,
        fontWeight: '700',
        alignContent: 'flex-start',
        marginLeft: 90,
        marginBottom: 2
    },
    contact: {
        marginTop: 10,
        fontSize:20,
        fontWeight: '700',
        alignContent: 'flex-start',
        marginLeft: 30
    },
    nextPageIcon: {
        marginTop: 1,
        marginLeft: '70%',
        color: 'black'
    },
    cardNumber: {
        color: 'black',
        fontSize:15,
        fontWeight: '700',
        alignContent: 'flex-start',
        marginLeft: 100
    },

});

export default styles;