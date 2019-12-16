import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bottomButton: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  buttonLeft: {
    backgroundColor: '#345B96',
    marginTop: 10
  },
  buttonRight: {
    backgroundColor: '#FFA500',
    marginTop: 10
  },
  date: {
    color: '#345B96',
    fontSize: 19
  },
  elec: {
    color: '#345B96',
    flex: 1,
    fontSize: 27,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginLeft: '5%'
  },
  listView: {
    alignContent: 'stretch',
    flex: 8
  },
  palito: {
    color: '#345B96',
    fontSize: 82,
    marginTop: '15%'
  },
  radio: {
    borderRadius: 6,
    margin: 33,
    marginBottom: -10,
    padding: 20,
    backgroundColor: '#E5E5E5',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 5, height: 7 },
    shadowOpacity: 1
  },
  title: {
    color: '#345B96',
    fontSize: 28,
    fontWeight: 'bold'
  },
  titleView: {
    flexDirection: 'row',
    flex: 3,
    // marginTop: '12%',
    marginLeft: '5%'
  },
  titles: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: '20%'
  }
})
export default styles
