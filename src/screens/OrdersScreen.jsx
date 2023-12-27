import { FlatList, StyleSheet } from 'react-native'
import orderData from '../data/orders-data.json'
import OrderItem from '../components/OrderItem'

const OrdersScreen = () => {
  
  const renderOrderItem = ({ item }) => {
    const total = item.items.reduce((acc, item) => (
      acc += item.price * item.quantity
    ), 0)
    return (
      <OrderItem order={item} total={total} />
    )
  }
  
  return (
    <FlatList
      data={orderData}
      renderItem={renderOrderItem}
      key={item => item.id}
    />
  )
}
export default OrdersScreen
const styles = StyleSheet.create({})