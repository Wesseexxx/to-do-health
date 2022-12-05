import react from 'react'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native'

export default function Start() {
  return (
    <View style={Styles.conteirner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alingItems: 'center' }}>
          <Image
            source={require('../../assets/icons/logo3.png')}
            style={styles.logo}
          />
          <Text style={styles.description}>
            Vamos transformar sua vida {'\n'} em um jogo, buscando sempre {'\n'}{' '}
            o melhor nível.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: 'rgba(21, 21, 21, 0.96)'
  },

  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBottom: 20
  },

  description: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 60
  }
})
