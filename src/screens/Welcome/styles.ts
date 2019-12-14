import { StyleSheet } from 'react-native'

const blueText = '#206489'

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    width: '100%'
  },
  layout: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: blueText,
    fontSize: 30,
    lineHeight: 30 * 0.75,
    paddingTop: 30 - 30 * 0.75
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start'
  },
  title: {
    height: '20%',
    resizeMode: 'center',
    width: '50%'
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default styles
