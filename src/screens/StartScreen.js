import React from 'react'
import { View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import FbLogin from '../components/FbLogin'
import GoogleLogin from '../components/GoogleLogin'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>PikApp</Header>
      <Paragraph>We get your order</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      style={{color:"#fff"}} >
        log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Register
      </Button>
    </Background>
  )
}
