import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import user_data from '../data/user_data.json'
import { colors } from '../global/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/authSlice';
import { deleteSession } from '../db';
import LocationSelector from '../components/LocationSelector/LocationSelector'


const ProfileScreen = ({ navigation }) => {
  const image = useSelector(state => state.authReducer.profilePicture)
  const location = useSelector(state => state.authReducer.location)
  const localId = useSelector(state=>state.authReducer.localId)
  const dispatch = useDispatch()
  const onLogout = ()=>{
      dispatch(logout())
      deleteSession(localId)
  }

  return (
    <>
        <View style={styles.container}>
            <View>
                <Pressable onPress={()=>navigation.navigate("Select Image")}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8',
                        },
                        styles.imageContainer,
                    ]}>
                      <MaterialCommunityIcons name="account-edit" size={20}/>
                    {
                        image
                            ?
                            <Image
                                source={{uri:image}}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />
                            :
                            <Image
                                source={require('../../assets/img/user.png')}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />

                    }
                </Pressable>
            </View>
            
            <View style={styles.userDataContainer}>
                <Text style={styles.userTitle}>{user_data.name}</Text>
                <Text style={styles.userData}>{user_data.role}</Text>
                <Text style={styles.userData}>Nivel: {user_data.level}</Text>
                <Text style={styles.userData}>Dirección: {user_data.address}</Text>
                <Text style={styles.userData}>{user_data.city}</Text>
            </View>
        </View>
        <TouchableOpacity onPress={onLogout}>
                <Text style={styles.btnChangePicture}><MaterialCommunityIcons name="logout" size={15}/> Logout</Text>
        </TouchableOpacity>
        {
            location.address
            &&
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>Última ubicación guardada: </Text>
                <Text style={styles.addressDescription}>{location.address}</Text>     
            </View>
        }
        <LocationSelector />
        </>
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
    borderRadius: 60,
    borderWidth: 1,
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
    color: colors.text_color,
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