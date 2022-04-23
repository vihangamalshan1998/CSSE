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
        backgroundColor: "#eeeeee",
        width: '90%',
        height: '60%',
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginLeft: '10%',
        marginRight: '10%',
        alignItems: "center",
        marginTop: '2%',
        marginBottom: 20

    },
    container3:{
        backgroundColor: "white",
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
        marginLeft: 1
    },
    image: {
        marginTop: 1,
        marginLeft: 8,
        height: 150,
        width: 220,
        marginBottom: 10,
        borderRadius: 70

    },
    inputView: {
        backgroundColor: "#eeeeee",
        borderRadius: 25,
        width: "100%",
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
        width: "100%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#FFBA01",
    },
    rechargeBtn:{
        width: "100%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#339966",
    },
    receiptText: {
        color: 'white',
        fontWeight: '700',
        alignItems: "center"
    },
    nextPageIcon: {
        marginTop: 10,
        marginLeft: '80%',
        color: 'red'
    },

});

export default styles;