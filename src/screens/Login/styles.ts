import { StyleSheet } from 'react-native'

const colorLogin = '#ffa500'
const whiteText = '#ffffff'
const blueText = '#206489'

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    width: '100%'
  },
  formContainer: { alignItems: 'center', flex: 3 },
  inputsContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%'
  },
  layout: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  login: {
    backgroundColor: colorLogin,
    borderColor: colorLogin,
    borderRadius: 15,
    marginTop: '10%',
    width: '50%'
  },
  loginText: {
    color: whiteText
  },
  passwordContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: '5%'
  },
  passwordText: {
    color: blueText,
    fontSize: 13,
    textDecorationLine: 'underline'
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
