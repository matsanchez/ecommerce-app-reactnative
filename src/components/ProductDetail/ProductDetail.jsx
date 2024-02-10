import { useState } from 'react'
import { colors } from '../../global/colors'
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import Carousel from '../Carousel/Carousel'


export default function ProductDetail({ productSelected, isPortrait, onAddToCart }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <Text style={styles.productTitle}>{productSelected.title}</Text>
    <View style={isPortrait ? styles.productDetailScreenPortrait : styles.productDetailScreenLandscape}>
      <Carousel />
      <View style={styles.detailContainer}>
        <Text style={styles.productDescription}>{productSelected.description}</Text>
        <Text style={styles.productPrice}>U$S {productSelected.price}</Text>
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Se agrego {productSelected.title} al carrito!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buyButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => { onAddToCart(),setModalVisible(true)}}>
        <Text style={styles.buyButtonText}>Add to Cart</Text>
      </Pressable>
      </View>
    </View>
    </>)
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
    marginTop:5,
    textAlign:'center',
    color: colors.text_color,
    backgroundColor:colors.text_color_secondary,
    padding: 3,
    fontSize: 27,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 18,
    marginBottom: 20,
    color: colors.text_color_secondary
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#ffffff',
  },
  buttonClose: {
    backgroundColor: colors.text_color_secondary,
    width: 150,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})