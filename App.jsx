import MainNavigator from './src/navigation/MainNavigator';
import store from './src/store';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import {init} from './src/db'


export default function App() {

  init()
  .then(()=>console.log("Database initializated"))
  .catch((error)=>console.log("Initialize db failed: ", error))

  const [fontsLoaded] = useFonts({
    'WorkSans-Bold': require('./assets/fonts/WorkSans-Bold.ttf'),
    'WorkSans-Italic': require('./assets/fonts/WorkSans-Italic.ttf'),
    'WorkSans-Light': require('./assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Regular': require('./assets/fonts/WorkSans-Regular.ttf'),
  })


  if (!fontsLoaded) {
    return <ActivityIndicator style={{ flex: 1, backgroundColor: colors.darkBlue }} animating={true} hidesWhenStopped={true} size='large' color={colors.paleGoldenRod} />
  }

  return (
    <>
      <StatusBar Style='light' backgroundColor={colors.darkBlue} />
      <Provider store={store} >
        <MainNavigator />
      </Provider>
    </>
  );
}