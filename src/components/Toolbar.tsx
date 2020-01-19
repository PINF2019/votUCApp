/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { ImageProps } from 'react-native'
import {
  OverflowMenu,
  OverflowMenuItemType,
  StyleType,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement,
  TopNavigationProps
} from '@ui-kitten/components'
import { MoreVerticalIcon } from '../assets/icons'

export type ToolbarMenu = OverflowMenuItemType[]

export interface ToolbarProps extends TopNavigationProps {
  menu?: ToolbarMenu
  backIcon?: (style: StyleType) => React.ReactElement<ImageProps>
  menuIcon?: (style: StyleType) => React.ReactElement<ImageProps>
  onMenuItemSelect?: (index: number) => void
  onBackPress?: () => void
}

export const Toolbar = (props: ToolbarProps): TopNavigationActionElement => {
  const {
    menu,
    backIcon,
    menuIcon,
    onMenuItemSelect,
    onBackPress,
    ...topNavigationProps
  } = props
  const [menuVisible, setMenuVisible] = React.useState(false)

  const onMenuSelect = (index: number) => {
    setMenuVisible(false)
    onMenuItemSelect && onMenuItemSelect(index)
  }

  const onMenuActionPress = () => {
    setMenuVisible(!menuVisible)
  }

  const renderMenuAction = (
    menuOverFlow: OverflowMenuItemType[]
  ): TopNavigationActionElement => (
    <OverflowMenu
      visible={menuVisible}
      data={menuOverFlow}
      placement="bottom end"
      onSelect={onMenuSelect}
      onBackdropPress={onMenuActionPress}>
      <TopNavigationAction
        icon={menuIcon || MoreVerticalIcon}
        onPress={onMenuActionPress}
      />
    </OverflowMenu>
  )

  const renderBackAction = (): TopNavigationActionElement => (
    <TopNavigationAction icon={backIcon || Backcon} onPress={onBackPress} />
  )

  return (
    <>
      <TopNavigation
        {...topNavigationProps}
        alignment="center"
        leftControl={onBackPress && renderBackAction()}
        rightControls={menu && renderMenuAction(menu)}
      />
    </>
  )
}
