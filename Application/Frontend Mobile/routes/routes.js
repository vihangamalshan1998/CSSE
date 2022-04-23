import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import recharger from '../Components/recharge/recharge'
import Login from "../Components/Login/Login";
import Route from "../Components/Routes/Route";
import Receipt from "../Components/Receipt/Receipt";
import paypalRechrge from '../Components/paypal/paypalrecharch'
import visaRechrge from '../Components/visa/Visarecharge'
import easyRechrge from '../Components/Eazycash/eazycash'
import successRechrge from '../Components/success/success'

const screens = {
  //Login
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Public Transport',
    },
  },
  //Route
  Route: {
    screen: Route,
    navigationOptions: {
      title: 'Public Transport',
    },
  },
  //Receipt
  Receipt: {
    screen: Receipt,
    navigationOptions: {
      title: 'Public Transport',
    },
  },
  //Recharge
  Recharger: {
    screen: recharger,
    navigationOptions: {
      title: 'Public Transport',
    },
  },
  //Easy Reacharge
  EasyRecharge: {
    screen: easyRechrge,
    navigationOptions: {
      title: 'Public Transport',
    },
  },
  //Visa Recharge
  VisaRecharge: {
    screen: visaRechrge,
    navigationOptions: {
      title: 'Public Transport',
    },
  },
  //Paypal Recharge
  PaypalREcharge: {
    screen: paypalRechrge,
    navigationOptions: {
      title: 'Public Transport',
    },
  },
  //Success Page
  Success: {
    screen: successRechrge,
    navigationOptions: {
      title: 'Public Transport',
    },
  },
}

// home stack navigator screens
const RouteStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#024F85' },
  },
})

export default createAppContainer(RouteStack)
