import {View, StyleSheet} from 'react-native'
import { GLOBALcolors } from '../global/colors.js'

const Card = ({children, style}) => {
    return(
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        shadowColor: GLOBALcolors.gray,
        shadowOffset: {
            height: 10,
            width: 10,
        },
        elevation: 5,
        shadowOpacity: 1, 
        shadowRadius: 1
    }
})