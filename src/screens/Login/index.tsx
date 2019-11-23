import React from 'react'
import { Formik } from 'formik'
import { View, StyleSheet } from 'react-native'
import {
  Button,
  Input,
  Text,
  Spinner,
  Modal,
  Layout
} from 'react-native-ui-kitten'
import { NavigationStackProp } from 'react-navigation-stack'
import { useLoginMutation } from '../../generated/hooks'
import { setAuthToken } from '../../utils/auth'

type Props = {
  navigation: NavigationStackProp
}

const Login = (props: Props) => {
  const [login, { loading }] = useLoginMutation()
  return (
    <Layout style={styles.layout}>
      <Formik
        initialValues={{ uid: '', password: '' }}
        onSubmit={async input => {
          try {
            console.warn(input)
            const { data } = await login({ variables: { input } })
            if (data && !loading) {
              await setAuthToken(data.login.accessToken)
              props.navigation.navigate('Home')
            }
          } catch (e) {
            console.warn(e)
          }
        }}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text category="h3">VotUCApp</Text>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.inputsContainer}>
                <Input
                  onChangeText={handleChange('uid')}
                  onBlur={handleBlur('uid')}
                  value={values.uid}
                  label="User"
                />
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                  value={values.password}
                  label="Password"
                />
                <Button onPress={handleSubmit} style={styles.submit}>
                  Login
                </Button>
              </View>
            </View>
            <Modal visible={loading}>
              <Spinner size="giant" />
            </Modal>
          </View>
        )}
      </Formik>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    width: '100%'
  },
  formContainer: { alignItems: 'center', flex: 3 },
  inputsContainer: { justifyContent: 'space-around', width: '80%' },
  layout: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  submit: { marginTop: '10%' },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default Login
