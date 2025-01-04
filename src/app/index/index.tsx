import { Image, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Category } from '@/components/category'
import { categories } from '@/utils/categories'

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name='add' size={32} color={colors.green[300]}/>
        </TouchableOpacity>
      </View>

      {categories.map((category) => {
        return (
          <Category key={category.id} name={category.name} icon={category.icon} isSelected />
        )
      })}
    </View>
  )
}