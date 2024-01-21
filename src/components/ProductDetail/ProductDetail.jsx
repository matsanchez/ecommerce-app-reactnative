import { colors } from '../../global/colors'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Carousel from '../Carousel/Carousel'


export default function ProductDetail({ productSelected, isPortrait, onAddToCart }) {

  return (
    <View style={isPortrait ? styles.productDetailScreenPortrait : styles.productDetailScreenLandscape}>
      <Carousel />
      <View style={styles.detailContainer}>
        <Text style={styles.productTitle}>{productSelected.title}</Text>
        <Text style={styles.productDescription}>{productSelected.description}</Text>
        <Text style={styles.productPrice}>U$D {productSelected.price}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={onAddToCart} >
          <Text style={styles.buyButtonText}>Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  carousel: {
    width: 300,
    height: 300,
  },
  productDetailScreenPortrait: {
    marginTop: 20,
    flex: 1,
    padding: 10,
  },
  productDetailScreenLandscape: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    flex: 1,
    padding: 20,
  },
  detailContainer: {
    padding: 10,
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  productTitle: {
    color: colors.primary,
    backgroundColor:colors.shadow,
    padding: 3,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    borderRadius: 5,
  },
  productDescription: {
    fontSize: 18,
    marginBottom: 20,
  },
  productPrice: {
    color: colors.text_color_secondary,
    fontWeight: 'bold',
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: colors.text_color_secondary,
    padding: 10,
    borderRadius: 10,
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
    textAlign: 'center'
  },
  buyButtonSpan: {
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkBlue,
  }
})