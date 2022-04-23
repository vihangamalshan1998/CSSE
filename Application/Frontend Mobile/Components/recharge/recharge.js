import React, { Component, useEffect } from 'react'
import axios from 'axios'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native'
import { Avatar, TextInput, RadioButton, Button } from 'react-native-paper'

const LeftContent = (props) => <Avatar.Icon {...props} icon="camera" />

export default function recharge({ navigation }) {
  var ID = navigation.state.params.cardId;
  const [Balance, setBalance] = React.useState(0)
  const [card, setcard] = React.useState('')
  const [amount, setamount] = React.useState('')
  const [checked, setChecked] = React.useState('first')

  useEffect(() => {
    fetch('http://10.0.2.2:9900/smartCard/checkSmartCard/' + ID)
      .then((response) => response.json())
      .then((json) => {
        setBalance(json.cardAmount)
      })
      .catch((error) => {
        console.error(error)
      })
  })

  const got = () => {
    //Empty Field validation
    if(amount != ''){
      if (checked == 'first') {
        navigation.navigate('PaypalREcharge', {
          Payamount: amount,
          id: ID,
        })
      } else if (checked == 'Second') {
        navigation.navigate('VisaRecharge', {
          Payamount: amount,
          id: ID,
        })
      } else if (checked == 'third') {
        navigation.navigate('EasyRecharge', {
          Payamount: amount,
          id: ID,
        })
      }
    }else {
      alert('please enter an Amount')
    }

  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            color: '#000',
          }}
        >
          RECHARGE
        </Text>
      </View>
      <View style={styles.around}>
        <View style={styles.balance}>
          <TextInput
            label="Account Balance"
            value={'Rs.' + Balance + '.00'}
            disabled
          />
        </View>
        <View style={styles.card}>
          <TextInput
            keyboardType="numeric"
            label="Card Number"
            value={ID}
            onChangeText={(card) => setcard(card)}
            disabled
          />
        </View>

        <View style={styles.checkbox}>
          <View>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Avatar.Image size={79} source={require('../../download.jpg')} />
          </View>
          <View>
            <RadioButton
              value="Second"
              status={checked === 'Second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Second')}
            />
            <Avatar.Image size={79} source={require('../../download2.jpg')} />
          </View>
          <View>
            <RadioButton
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('third')}
            />
            <Avatar.Image size={79} source={require('../../unnamed.png')} />
          </View>
        </View>
        <View style={styles.card}>
          <TextInput
            keyboardType="numeric"
            label="Payment Amount"
            value={amount}
            onChangeText={(amount) => setamount(amount)}
          />
        </View>

        <View style={styles.button}>
          <Button icon="arrow-right" mode="contained" onPress={got}>
            Recharge
          </Button>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#339966',
  },
  around: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    marginRight: '2%',
    marginLeft: '2%',
    borderRadius: 30,
  },
  header: {
    flex: 0.2,
    marginTop: 10,
    height: '0%',
    marginRight: '10%',
    marginLeft: '10%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  balance: {
    flex: 0.15,
    marginTop: 40,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: '5%',
    marginLeft: '5%',
  },
  card: {
    flex: 0.15,
    marginTop: 45,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: '5%',
    marginLeft: '5%',
  },
  checkbox: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 10,
    marginRight: '10%',
    marginLeft: '10%',
  },
  button: {
    flex: 0.15,
    marginTop: 50,
    marginBottom: 30,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: '15%',
    marginLeft: '15%',
  },
})
