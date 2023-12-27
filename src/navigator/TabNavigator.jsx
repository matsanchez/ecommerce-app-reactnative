import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GLOBALcolors } from '../global/colors.js'

import { NavigationContainer } from '@react-navigation/native';

import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';
import OrderNavigator from './OrderNavigator.jsx';

import { FontAwesome, MaterialCommunityIcons , FontAwesome5 } from '@expo/vector-icons';

const TabNavigator = () => {

  const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen 
          name='Shop'
          component={ShopNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome name="shopping-bag" size={24} color={focused ? GLOBALcolors.primary : GLOBALcolors.gray} />
            )
          }}
        />
        <Tab.Screen 
          name='Cart'
          component={CartNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome5 name="shopping-cart" size={24} color={focused ? GLOBALcolors.primary : GLOBALcolors.gray} />
            )
          }}
        />
        <Tab.Screen
          name='Orders'
          component={OrderNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons  name="clipboard-text" size={30} color={focused ? GLOBALcolors.primary : GLOBALcolors.gray} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  )
}


export default TabNavigator