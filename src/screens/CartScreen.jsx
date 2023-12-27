import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import cartData from "../data/cart-data.json";
import CartItem from "../components/Cartitem";
import { useEffect, useState } from "react";
import { GLOBALcolors } from "../global/colors";

const CartScreen = () => {
  const [total, setTotal] = useState();

  useEffect(() => {
    const totalCart = cartData.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    );
    setTotal(totalCart);
  }, []);

  const renderCartItem = ({ item }) => <CartItem item={item} />;

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartData}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: USD {total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={null}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: 'WorkSans-Bold'
  },
  confirmButton:{
    backgroundColor: GLOBALcolors.secondary,
    padding:10,
    borderRadius:10,
  },
  textConfirm:{
    fontFamily:'WorkSans-Bold',
    fontSize:16,
    color: '#fff'
  }  
})
