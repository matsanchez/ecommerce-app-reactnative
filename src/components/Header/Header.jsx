import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../global/colors'
import { Ionicons } from '@expo/vector-icons';


const Header = ({ title, navigation }) => {

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.headerIcon}>
        {
          navigation.canGoBack() &&
          <Ionicons name="arrow-back-circle-outline" size={30} color={colors.text_color_secondary} />
        }
      </TouchableOpacity>

      <Text style={styles.headerText}>{title}</Text>
    </View >
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.secondary,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 24,
    color: colors.text_color_secondary,
    justifyContent: 'center',
    textAlign: 'center',
  },
  headerIcon: {
    width: 26,
  }
})