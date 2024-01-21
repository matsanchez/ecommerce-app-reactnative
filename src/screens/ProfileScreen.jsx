import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import user_data from '../data/user_data.json'
import { colors } from '../global/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import LocationSelector from '../components/LocationSelector/LocationSelector'


const ProfileScreen = ({ navigation }) => {
  const image = useSelector(state => state.authReducer.profilePicture)
  const location = useSelector(state => state.authReducer.location)

  return (
    <LinearGradient
      colors={[colors.secondary, colors.primary,]}
      style={styles.background}
      end={{ x: 0.5, y: 0.5 }}

    >
      <View style={styles.container}>

        {
          image ?
            <View style={styles.profilePictureContainer} >
              <Image
                source={{ uri: image }}
                style={styles.profilePicture}
                resizeMode='contain'
              />
              <Pressable
                onPress={() => navigation.navigate('Select Image')}
                style={({ pressed }) => [{ backgroundColor: pressed ? colors.primary : 'transparent' }, styles.pressed, styles.button]}
              >
                <Text style={styles.btnChangePicture}>Change</Text>
              </Pressable>
            </View>
            :
            <View style={styles.profilePictureContainer} >
              <View
                style={styles.profilePicture}
              >
                <FontAwesome name="user-plus" style={styles.profileIcon}
                  resizeMode='contain' />
              </View>
              <Text style={styles.btnChangePicture}>Take a Picture</Text>
            </View>


        }

        <View style={styles.userDataContainer}>
          <Text style={styles.userTitle}>Name: {user_data.name}</Text>
          <Text style={styles.userData}>Rol: {user_data.role}</Text>
          <Text style={styles.userData}>Level: {user_data.level}</Text>
          <Text style={styles.userData}>Address: {user_data.address}</Text>
          <Text style={styles.userData}>City: {user_data.city}</Text>
        </View>
      </View>
      <View style={styles.addresPreviewContainer} >
        <Text style={styles.addressTitle}>
          Last Saved Location
        </Text>
        {
          location.address ?
            <Text style={styles.addressDescription}
            >
              {location.address}
            </Text>
            :
            <Text style={styles.addressDescription}
            >
              No Saved Location!
            </Text>
        }
      </View>

      <LocationSelector style={styles.locationSelectorComponent} />
    </LinearGradient >
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10
  },
  profilePictureContainer: {
  },
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.text_color_secondary,
    marginBottom: 10,
  },
  btnChangePicture: {
    textAlign: 'center',
    backgroundColor: colors.text_color_secondary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
  },
  userDataContainer: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  userTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text_color_secondary,
  },
  userData: {
    fontWeight: 'normal',
    fontSize: 16,
    color: colors.input,
  },
  locationSelectorComponent: {
    width: '100%',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  addresPreviewContainer: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.input,
  },
  addressTitle: {
    fontSize: 14,
    color: colors.text_color,
    fontWeight: 'bold',
  },
  addressDescription: {
    color: colors.text_color,
    fontStyle: 'italic',
    textAlign: 'center',
  },
})