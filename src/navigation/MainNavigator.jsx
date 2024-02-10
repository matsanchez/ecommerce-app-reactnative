import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { useGetProfilePictureQuery } from '../services/shopService';
import { useEffect } from 'react';
import { setProfilePicture, setUserLocation, setUser } from '../features/authSlice';
import { useGetUserLocationQuery } from '../services/shopService';
import { fetchSession } from '../db';


const MainNavigator = () => {
  const user = useSelector(state => state.authReducer.user)
  const localId = useSelector(state => state.authReducer.localId)
  const { data, error, isLoading } = useGetProfilePictureQuery(localId)

  const { data: locationData, error: locationError, isLoading: locationIsLoading } = useGetUserLocationQuery(localId)

  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data.image))
    }
    if (locationData) {
      dispatch(setUserLocation(locationData))
    }
  }, [data, locationData, isLoading, locationIsLoading])

  useEffect(()=>{
    (async ()=>{
        try{
            const session = await fetchSession()
            if(session?.rows.length){
                const user = session.rows._array[0]
                dispatch(setUser(user))
            }
        }catch(error){
            console.log("Error al obtener datos del usuario local: ", error.message)
        }
    })()
},[])

  return (
    <NavigationContainer>
      {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default MainNavigator