import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'

import CategoryScreen from '../screens/CategoryScreen';
import ProductsScreen from '../screens/ProductsByCategoryScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {



  return (
      <Stack.Navigator
        initialRouteName='Categorias'
        screenOptions={
          ({navigation, route}) => ({
            header: () => <Header title={route.name == 'Productos' ? route.params.category : route.name} navigation={navigation} />
          })
        }
      >
        <Stack.Screen 
          name='Categorias'
          component={CategoryScreen}
        />
        <Stack.Screen 
          name='Productos'
          component={ProductsScreen}
          options={({ route }) => ({ title: route.params.category })}
        />
        <Stack.Screen 
          name='Detalle de Producto'
          component={ProductDetailScreen}
        />
      </Stack.Navigator>



  )
}
export default ShopNavigator


const styles = StyleSheet.create({


})