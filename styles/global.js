import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  titleText: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: 18,
    color: '#333'
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    paddingVertical: 10
  }
})

export const images = {
  rating: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  },
  logo: require('../assets/heart_logo.png'),
  haderBackground: require('../assets/game_bg.png')
}