import {
  Avatar,
  Button,
  Layout,
  Modal as KModal,
  Text
} from '@ui-kitten/components'
import React from 'react'
import { ImageSourcePropType } from 'react-native'
import styles from './style'

type ModalProps = {
  title: string
  subtitle: string
  image: ImageSourcePropType
}

const Modal = ({ title, subtitle, image }: ModalProps) => {
  const [visible, setVisible] = React.useState(false)

  const toggleModal = () => {
    setVisible(!visible)
  }

  return (
    <KModal allowBackdrop backdropStyle={styles.backdrop} visible={visible}>
      <Layout level="3" style={styles.modalContainer}>
        <Text style={styles.text} category="h5">
          {subtitle}
        </Text>
        <Text style={styles.text} category="h4">
          {title}
        </Text>
        <Avatar style={styles.logo} shape="square" source={image} />
        <Button
          onPress={toggleModal}
          style={styles.button}
          status="warning"
          size="giant">
          Volver al inicio
        </Button>
      </Layout>
    </KModal>
  )
}

export default Modal
