import React, { Component, useEffect } from 'react'
import axios from 'axios'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Avatar, TextInput, DataTable, Button } from 'react-native-paper'

const LeftContent = (props) => <Avatar.Icon {...props} icon="camera" />

export default function paypalrecharge({ navigation }) {
  var amount = navigation.state.params.Payamount
  var ID = navigation.state.params.id
  const [Email, setEmail] = React.useState('')

  const got = () => {
    if (Email != '') {
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
          PAYPAL RECHARGE
        </Text>
      </View>
      <View style={styles.around}>
        <View style={styles.logo}>
          <Avatar.Image size={150} source={require('../../download.jpg')} />
        </View>
        <View style={styles.balance}>
          <TextInput
            label="Paypal Email"
            value={Email}
            onChangeText={(Email) => setEmail(Email)}
          />
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
    marginTop: 80,
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
    marginTop: 40,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: '5%',
    marginLeft: '5%',
  },
  button: {
    flex: 0.15,
    marginTop: 50,
    marginBottom: 60,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: '15%',
    marginLeft: '15%',
  },
})
