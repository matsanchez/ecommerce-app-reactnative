import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'

import Header from '../components/Header';
import CartScreen from '../screens/CartScreen';


const Stack = createNativeStackNavigator();

const CartNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName='Carrito'
      screenOptions={
        ({navigation, route}) => ({
          header: () => <Header title={route.name} navigation={navigation}/>
        })
      }
    >
      <Stack.Screen 
        name='Tu Carrito'
        component={CartScreen}
      />
    </Stack.Navigator>
  )
}


export default CartNavigator

const styles = StyleSheet.create({
  
})