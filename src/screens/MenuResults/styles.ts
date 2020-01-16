import { StyleSheet, Dimensions } from 'react-native'

const textColor = '#345B96'
const listColor = '#F0F0F0'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  containerV2: {
    backgroundColor: 'red',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: '5%',
    padding: '5%'
  },
  descriptionItem: { color: textColor },
  icon: {
    // color: 'red',
    fontWeight: 'bold',
    margin: 7
  },
  image: {
    height: 25,
    width: 25
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%'
  },
  list: {
    alignSelf: 'center',
    fontWeight: 'bold',
    margin: 7,
    width: '85%'
  },
  listItem: {
    alignSelf: 'center',
    backgroundColor: listColor,
    borderRadius: 10,
    elevation: 5,
    height: 70,
    margin: 7,
    width: '85%'
  },

  pipe: {
    color: 'orange',
    fontSize: 0.2 * Dimensions.get('window').width,
    marginBottom: '-5%'
  },
  safeArea: {
    flex: 1
  },
  spaceList: {
    flex: 24
  },
  title: {
    color: '#345B96',
    fontSize: 0.04 * Dimensions.get('window').width,
    fontWeight: 'bold',
    marginBottom: '-5%',
    paddingBottom: '5%'
  },
  titleContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginRight: '15%',
    marginTop: '6%'
  },
  titleItem: { color: textColor, fontSize: 15, fontWeight: 'bold' },
  titleView: { flex: 5, flexDirection: 'row', marginRight: '10%' }
})
export default styles
