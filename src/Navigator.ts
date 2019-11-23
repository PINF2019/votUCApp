import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { Home, Login } from './screens'

const AppStack = createStackNavigator({ Home })
const AuthStack = createStackNavigator({ Login })

const Navigator = createAppContainer(
  createSwitchNavigator(
    { App: AppStack, Auth: AuthStack },
    { initialRouteName: 'Auth' }
  )
)

export default Navigator
