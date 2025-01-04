import { FlatList, Image, Modal, TouchableOpacity, View, Text } from 'react-native'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import Categories from '@/components/categories'
import { Link } from '@/components/link'

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name='add' size={32} color={colors.green[300]}/>
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList 
        data={["1", "2", "3"]}
        keyExtractor={item => item}
        renderItem={() => (
          <Link 
            name='Rocketseat'
            url='https://www.rocketseat.com.br/'
            onDetails={() => console.log('Clicou!')}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons name='close' size={20} color={colors.gray[400]}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>Rocketseat</Text>
            <Text style={styles.modalUrl}>https://www.rocketseat.com.br/</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}