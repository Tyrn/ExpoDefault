import {
  View, Text, StyleSheet, ImageBackground
} from 'react-native'

//import icedCoffeeImg from '@/assets/images/iced-coffee.png'
import icedCoffeeImg from '@/assets/images/chattanooga-1-red.png'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>
          Kitty Coffee Shop
        </Text>
      </ImageBackground>
    </View>
  )
}
export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
