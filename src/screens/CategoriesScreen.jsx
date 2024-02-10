import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native'
import CategoryItem from '../components/CategoryItem/CategoryItem'
import { colors } from '../global/colors'
import { useGetCategoriesQuery } from '../services/shopService'


const CategoriesScreen = ({ navigation }) => {

  const { data, isLoading, error } = useGetCategoriesQuery()

  const renderCategoryItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  )

  return (
    <>
      {isLoading ? <ActivityIndicator style={{ flex: 1 }} size="large" color={colors.text_color_secondary} /> :
        <View style={styles.categoriesScreen}>
          <FlatList
            data={data}
            renderItem={renderCategoryItem}
            keyExtractor={item => item}
          />
        </View>
      }
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  categoriesScreen: {
    backgroundColor: colors.secondary
  }
})