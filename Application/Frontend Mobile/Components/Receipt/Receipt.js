import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './StyleSheet';
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Receipt({navigation}){
    var params = navigation.state.params.cardId;
    console.log(params);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [RouteId, setRouteId] = React.useState('')

    //get Route
    const getRoute = async () => {
        //Empty Field Validation
        if(RouteId != ''){
            try {
                const response = await fetch('http://10.0.2.2:9900/route/getReceipt/'+RouteId);
                const data = await response.json();
                console.log(JSON.stringify(data))
                setData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }else{
            //Error handling when the Route ID is incorrect
            alert('Please enter a Route ID')
        }

    }
    //Make PAyment
    const makePayment = async () => {
        try {
            let data1 = {"cardId":params,"paymentType":"debit","paymentAmount":data.totalAmount}
            const response = axios.post('http://10.0.2.2:9900/payment/add',data1);
            alert('Payment Success');
            navigation.navigate('Route');
        } catch (error) {
            //Error handling
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.inputView}>
                    <TextInput  value={RouteId} onChangeText={(RouteId) => setRouteId(RouteId)}style={styles.TextInput} placeholder="Enter the Route ID"
                    />
                </View>
                {/*Get Route*/}
                <TouchableOpacity onPress={() => getRoute()} style={styles.receiptBtn}>
                    <Text style={styles.receiptText}>Get Receipt</Text>
                </TouchableOpacity>
                <View style={styles.container3}>
                    <Text style={styles.title}>Payment Receipt</Text>

                    <View>
                        <Text style={styles.sltb}>SLTB - Kaduwela </Text>
                        <Text style={styles.cardNumber}>Card No - {params}</Text>
                        <Text style={styles.routeStyle}>Route {RouteId}</Text>
                        <Text style={styles.StartLocation}><Icon name="map-marker" size={40} style={styles.nextPageIcon}/>{data.startLocation}{"-"}{data.endLocation}</Text>
                        <Text style={styles.Distance}>Journey: {data.amountOfKM} KM</Text>
                        <Text style={styles.Amount}>Total Rs. {data.totalAmount}</Text>
                        <Text style={styles.Thank}>Thank You</Text>
                        <Text style={styles.contact}><Icon name="phone" size={40} style={styles.nextPageIcon}/> Contact 011 2 12 34 56</Text>

                    </View>
                    {/*Make Payment*/}
                    <TouchableOpacity onPress={() => makePayment()} style={styles.PayNowBtn}>
                        <Text style={styles.PaynowText}>Pay Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};

