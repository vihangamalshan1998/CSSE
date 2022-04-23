import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";
import styles from './StyleSheet';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Route({navigation}) {
    var params = navigation.state.params.cardId;
    const [CheckIn, setCheckIn] = React.useState('')
    const [CheckOut, setCheckOut] = React.useState('')
    //Navigate to next page
        const nextPage = () =>{
        if(CheckIn != '' && CheckOut != ''){
            navigation.navigate('Receipt',{
                cardId:params
            })
        }else{
            alert('Please Do not leave Empty Fields')
        }
    };
    //Logout
    const logout = () =>{
        navigation.navigate('Login',{
            cardId:params
        })
    };
    //Recharge button
    const recharge = () =>{
        navigation.navigate('Recharger',{
            cardId:params
        })
    };
        return (
            <View style={styles.container}>
                <Icon onPress={logout} name="arrow-circle-right" size={40} style={styles.nextPageIcon}/>
                <Image style={styles.image} source={require("../../assets/images/bus1.jpg")} />
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.headline}>
                        <Text style={styles.headlineText}>Welcome, SmartCardHolder: {params}</Text>
                    </TouchableOpacity>
                    <View style={styles.container3}>
                        <Text style={styles.title}>Now..</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                value={CheckIn}
                                onChangeText={(CheckIn) => setCheckIn(CheckIn)}
                                style={styles.TextInput}
                                placeholder="Checked in from"
                                placeholderTextColor="#003f5c"
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                value={CheckOut}
                                onChangeText={(CheckOut) => setCheckOut(CheckOut)}
                                style={styles.TextInput}
                                placeholder="Checked out from"
                                placeholderTextColor="#003f5c"
                            />
                        </View>
                        {/*Get Receipt*/}
                        <TouchableOpacity onPress={nextPage} style={styles.receiptBtn}>
                            <Text style={styles.receiptText}>Get Receipt</Text>
                        </TouchableOpacity>
                        {/*Recharge*/}
                        <TouchableOpacity onPress={recharge} style={styles.rechargeBtn}>
                            <Text style={styles.receiptText}>Recharge</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );

}

