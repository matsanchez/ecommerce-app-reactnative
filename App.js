import { ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'

import TabNavigator from './src/navigator/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {


  const [fontLoaded] = useFonts({
    'WorkSans-Bold': require('./assets/fonts/WorkSans-Bold.ttf'),
    'WorkSans-Italic': require('./assets/fonts/WorkSans-Italic.ttf'),
    'WorkSans-Light': require('./assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Regular': require('./assets/fonts/WorkSans-Regular.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />



  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
