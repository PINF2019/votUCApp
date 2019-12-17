import { StyleSheet } from 'react-native'

const textColor = '#1C5F94'

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', alignItems: 'center' },
  descriptionItem: { color: textColor },
  image: { height: 25, width: 25 },
  listItem: {
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 5,
    height: 70,
    margin: 7,
    width: '85%'
  },
  palito: {
    color: textColor,
    fontFamily: 'sans-serif-light',
    fontSize: 82,
    marginLeft: '10%'
  },
  spaceList: {
    flex: 24
  },
  title: {
    alignSelf: 'flex-start',
    color: textColor,
    fontFamily: 'notoserif',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: '5%',
    marginTop: '7%'
  },
  titleItem: { color: textColor, fontSize: 15, fontWeight: 'bold' },
  titleView: { flex: 5, flexDirection: 'row', marginRight: '10%' }
})

export default styles
