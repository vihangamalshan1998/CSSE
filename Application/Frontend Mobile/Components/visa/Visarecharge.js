import React, { Component, useEffect } from 'react'
import axios from 'axios'
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import { Avatar, TextInput, Button } from 'react-native-paper'

const LeftContent = (props) => <Avatar.Icon {...props} icon="camera" />

export default function Visarecharge({ navigation }) {
  var amount = navigation.state.params.Payamount
  var ID = navigation.state.params.id
  const [name, setName] = React.useState('')
  const [Number, setNumber] = React.useState('')
  const [Exper, setExper] = React.useState('')
  const [cvv, setcvv] = React.useState('')


  const got = () => {
    //Empty Field validation
    if (name != '' && Number != '' && Exper != '' && cvv != '') {
      axios
        .post('http://10.0.2.2:9900/smartCard/getCard/' + ID + '/' + amount)
        .then(function (response) {
          // handle success
          navigation.navigate('Success', {
            Payamount: amount,
            id: ID,
          })
        })
        .catch(function (error) {
          // handle error
          alert(error.message)
        })
    } else {
      alert('please enter valid details')
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 25,
            color: '#000',
          }}
        >
          VISA RECHARGE
        </Text>
      </View>
      <View style={styles.around}>
        <View style={styles.logo}>
          <Avatar.Image size={150} source={require('../../download2.jpg')} />
        </View>
        <View style={styles.balance}>
          <TextInput
            label="Holder's Name"
            value={name}
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.balance}>
          <TextInput
            keyboardType="numeric"
            label="Card Number"
            value={Number}
            onChangeText={(Number) => setNumber(Number)}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.rowinput1}>
            <TextInput
              keyboardType="numeric"
              label="Expire Date"
              value={Exper}
              onChangeText={(Exper) => setExper(Exper)}
            />
          </View>
          <View style={styles.rowinput2}>
            <TextInput
              keyboardType="numeric"
              label="CVV"
              value={cvv}
              onChangeText={(cvv) => setcvv(cvv)}
            />
          </View>
        </View>

        <View style={styles.balance}>
          <TextInput
            label="Payment Balance"
            value={'Rs.' + amount + '.00'}
            disabled
          />
        </View>
        <View style={styles.button}>
          <Button icon="arrow-right" mode="contained" onPress={got}>
            Pay now
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
  logo: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  around: {
    flex: 0.88,
    marginTop: 20,
    backgroundColor: '#fff',
    marginRight: '2%',
    marginLeft: '2%',
    borderRadius: 30,
  },
  header: {
    flex: 0.1,
    marginTop: 15,
    marginRight: '15%',
    marginLeft: '15%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  balance: {
    flex: 0.15,
    marginTop: 25,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: '5%',
    marginLeft: '5%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowinput1: {
    marginTop: 25,
    width: 160,
    marginLeft: '5%',
  },
  rowinput2: {
    marginTop: 25,
    width: 140,
    marginRight: '5%',
  },
  button: {
    flex: 0.15,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: '15%',
    marginLeft: '15%',
  },
})
