import { StyleSheet } from 'react-native'

const textColor = '#1C5F94'

const shadowList = 'rgba(0, 0, 0, 0.1)'

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', alignItems: 'center' },
<<<<<<< HEAD
  descriptionItem: { color: textColor },
  image: {
    height: 25,
    width: 25
  },
=======

  descriptionItem: { color: textColor },

>>>>>>> 620af07844c2b9366d9ea80afb831befc252bc8b
  listItem: {
    alignSelf: 'center',
    borderRadius: 10,
    elevation: 5,
    height: 70,
    margin: 7,
    shadowColor: shadowList,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    width: '85%'
  },
<<<<<<< HEAD
  spaceList: {
    flex: 24
  },
=======

  palito: {
    color: textColor,
    fontFamily: 'sans-serif-light',
    fontSize: 82,
    marginLeft: '10%'
  },

  spaceList: {
    flex: 24
  },

>>>>>>> 620af07844c2b9366d9ea80afb831befc252bc8b
  title: {
    alignSelf: 'flex-start',
    color: textColor,
    fontFamily: 'notoserif',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: '5%',
    marginTop: '7%'
  },
<<<<<<< HEAD
  titleItem: { color: textColor, fontSize: 15, fontWeight: 'bold' },
=======

  titleItem: { color: textColor, fontSize: 15, fontWeight: 'bold' },

>>>>>>> 620af07844c2b9366d9ea80afb831befc252bc8b
  titleView: { flex: 5, flexDirection: 'row', marginRight: '10%' }
})

export default styles
