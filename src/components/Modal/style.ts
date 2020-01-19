import { StyleSheet } from 'react-native'

const buttonColor = '#FFA500'

const textColor = '#345B96'

const backColor = 'rgba(0, 0, 0, 0.5)'

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: backColor
  },
  button: {
    color: buttonColor,
    margin: 10
  },
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 8
  },
  logo: {
    height: 200,
    padding: 20,
    width: 200
  },
  modalContainer: {
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
    minHeight: 500,
    padding: 8
  },
  text: {
    color: textColor,
    margin: 8
  }
})

export default styles
