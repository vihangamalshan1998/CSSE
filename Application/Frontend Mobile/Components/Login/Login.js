import * as React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "./StyleSheet"
import {useState} from "react";

export default function Login({navigation}){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [ID, setID] = useState('');
    const login = async () => {
        //Empty Field validation
        if(ID != ''){
            try {
                //login functionality
                const response = await fetch('http://10.0.2.2:9900/smartCard/checkSmartCardId/'+ID);
                const data = await response.json();
                console.log(JSON.stringify(data))
                setData(data);
                if(JSON.stringify(data) == 'true'){
                    navigation.navigate('Route',{
                        cardId:ID
                    })
                }else{
                    //Alert box when the card ID is incorrect
                    alert('Incorrect Card ID')
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }else{
            alert('Please Enter a Card ID')
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/images/Untitled-2.png")} />
            <View style={styles.container2}>
                <Text style={styles.title}>
                    Login to your account
                </Text>
                <View style={styles.container3}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Card ID"
                            placeholderTextColor="#003f5c"
                            onChangeText={setID}
                            value={ID}/>
                    </View>
                    {/*Login Button*/}
                    <TouchableOpacity onPress={() => login()} style={styles.loginBtn}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <Image style={styles.footer} source={require("../../assets/images/footer.png")} />
            </View>
        </View>

        );

}
