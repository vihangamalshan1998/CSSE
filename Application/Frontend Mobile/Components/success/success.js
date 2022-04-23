import React, { Component, useEffect } from 'react'
import axios from 'axios'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Avatar, TextInput, Button } from 'react-native-paper'

const LeftContent = (props) => <Avatar.Icon {...props} icon="camera" />

export default function Visarecharge({ navigation }) {
  var ID = navigation.state.params.id
  const [Balance, setBalance] = React.useState(0)

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
  //Navigate to Route Page
  const got = () => {
    navigation.navigate('Route')
  }

  return (
    <View style={styles.container}>
      <View style={styles.around}>
        <View style={styles.logo}>
          <Text
            style={{
              fontSize: 25,
              color: '#000',
            }}
          >
            SUCCESS
          </Text>
        </View>
        <View style={styles.indextext}>
          <Text
            style={{
              fontSize: 25,
              color: '#000',
            }}
          >
            You have Successfully
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#000',
            }}
          >
            Reachrge
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#000',
            }}
          >
            Your Account!
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#000',
            }}
          ></Text>
          <Text
            style={{
              fontSize: 25,
              color: '#000',
            }}
          >
            Account Balance:
          </Text>

          <Text
            style={{
              fontSize: 25,
              color: '#000',
            }}
          >
            Rs.{Balance}.00
          </Text>
        </View>

        <View style={styles.button}>
          <Button icon="arrow-right" mode="contained" onPress={got}>
            Go To Home
          </Button>
        </View>
      </View>
    </View>
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
    flex: 0.95,
    marginTop: 20,
    backgroundColor: '#fff',
    marginRight: '2%',
    marginLeft: '2%',
    borderRadius: 30,
  },
  indextext: {
    flex: 0.85,
    alignItems: 'center',
    justifyContent: 'center',
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
