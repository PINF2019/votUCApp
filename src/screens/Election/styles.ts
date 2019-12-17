import { StyleSheet } from 'react-native'

const colorOrange = '#345B96'
const colorBlue = '#FFA500'
const radioBackground = '#E5E5E5'
const shadowColor = 'rgba(0, 0, 0, 0.15)'

const styles = StyleSheet.create({
  bottomButton: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  buttonLeft: {
    backgroundColor: colorOrange,
    marginTop: 10
  },
  buttonRight: {
    backgroundColor: colorBlue,
    marginTop: 10
  },
  choice: {
    color: colorOrange,
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginLeft: '6%'
  },
  listView: {
    alignContent: 'stretch',
    flex: 8
  },
  radio: {
    borderRadius: 6,
    margin: 33,
    marginBottom: 10,
    padding: 20,
    backgroundColor: radioBackground,
    shadowColor,
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 1
  },
  radioTextStyle: {
    color: colorOrange,
    fontSize: 22,
    fontWeight: 'bold'
  },
  safeArea: {
    flex: 1
  }
})
export default styles
