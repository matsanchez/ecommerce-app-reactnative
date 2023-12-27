import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { Feather } from '@expo/vector-icons';

const OrderItem = ({ order, total }) => {
    return (
        <Card style={styles.cartItemContainer}>
            <View >
                <Text style={styles.createdAt}>
                    Creada el {new Date(order.createdAt).toLocaleString()}
                </Text>
                <Text style={styles.total}>Total: ${total}</Text>
            </View>
            <TouchableOpacity style={styles.searchIcon} onPress={null}>
                <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
        </Card>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    searchIcon: {
        marginLeft: 'auto',
    },
    createdAt:{
        fontFamily: 'WorkSans-Regular',
        marginBottom:5,
    },
    total:{
        fontFamily: 'WorkSans-Bold',
        fontSize:14,
    }
})