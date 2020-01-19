import { useNavigation } from '@react-navigation/native'
import {
  Button,
  Input,
  Layout,
  Modal,
  Spinner,
  Text
} from '@ui-kitten/components'
import { Formik } from 'formik'
import React from 'react'
import { Image, ImageBackground, Linking, View } from 'react-native'
import * as yup from 'yup'
import fondo from '../../assets/background.jpg'
import logo from '../../assets/votucaLogo.png'
import { useAuth } from '../../context/auth'
import { useLoginMutation } from '../../generated/hooks'
import Routes from '../../navigator/routes'
import styles from './styles'

const validationLogin = yup.object().shape({
  uid: yup
    .string()
    .trim()
    .matches(/^u(?:[0-9]{8}|[xyz][0-9]{7})$/, 'El formato no es correcto')
    .required('Usuario requerido'),
  password: yup.string().required('Contraseña requerida')
})

const Login = () => {
  const { signIn } = useAuth()
  const [login] = useLoginMutation()
  const { navigate } = useNavigation()

  return (
    <Layout style={styles.layout}>
      <Formik
        initialValues={{ uid: '', password: '' }}
        validationSchema={validationLogin}
        onSubmit={async (input, actions) => {
          const { data, errors } = await login({ variables: { input } })
          if (data) {
            await signIn(data.login.accessToken)
            navigate(Routes.AUTH)
          }
          if (errors) {
            const message = 'Usuario o Contraseña Incorrectos'
            actions.setErrors({ password: message })
          }
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          isSubmitting
        }) => (
          <ImageBackground source={fondo} style={styles.container}>
            <View style={styles.titleContainer}>
              <Image style={styles.title} source={logo} />
            </View>
            <View style={styles.formContainer}>
              <View style={styles.inputsContainer}>
                <Input
                  size="small"
                  onChangeText={handleChange('uid')}
                  onBlur={handleBlur('uid')}
                  value={values.uid}
                  status={touched.uid && errors.uid ? 'danger' : ''}
                  caption={touched.uid && errors.uid ? errors.uid : ''}
                  label="Usuario"
                />
                <Input
                  secureTextEntry
                  size="small"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  status={touched.password && errors.password ? 'danger' : ''}
                  caption={
                    touched.password && errors.password ? errors.password : ''
                  }
                  label="Contraseña"
                />
                <Button
                  onPress={handleSubmit}
                  style={styles.login}
                  textStyle={styles.loginText}
                  disabled={!isValid || isSubmitting}>
                  Iniciar Sesión
                </Button>
              </View>
              <View style={styles.passwordContainer}>
                <Text
                  onPress={() =>
                    Linking.openURL(
                      'https://campusvirtual.uca.es/recoverypassword'
                    )
                  }
                  style={styles.passwordText}>
                  ¿Problemas con tu {'\n'} clave de acceso?
                </Text>
              </View>
            </View>
          </ImageBackground>
        )}
      </Formik>
    </Layout>
  )
}

export default Login
