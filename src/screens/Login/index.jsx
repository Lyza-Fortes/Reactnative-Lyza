import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
export const Login = () => {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation()

  const handleLogin = () => {
    if (login && senha){
      navigation.navigate('Inicial')
    }
    else{
      Alert.alert('Preencha os campos corretamente')
    }
  }
  return (
    <SafeAreaView style={styles.tudo}>

      <View style={styles.containerLogo}>
        <Image source={require('../../../assets/github_Logo52.png')} />
      </View>

      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={300} style={styles.tudoLogin}>

        <View style={styles.imagem2}>
          <Image source={require('../../../assets/github_Logo52.png')} />
        </View>

        <View style={styles.textoContainer}>
          <Text style={styles.textoSign}>
            Sign in to <Text style={styles.gitHub}>GitHub</Text>
          </Text>
          <Text style={styles.textoSign}>
            to continue to <Text style={styles.gitHub}>GitHub Android</Text>
          </Text>
        </View>
        <View style={styles.linha}></View> 
      
        <View style={styles.login}>

          <Text style={styles.textoUser}>
            Username or email address
          </Text>
          <TextInput style={styles.input}
            autoCorret={false}
            value={login}
            onChangeText={(text) => setLogin(text)} />

          <View style={styles.senha}>
            <Text style={styles.textoSenha1}>
              Password
            </Text>
            <TouchableOpacity >
              <Text style={styles.textoSenha2}>
                Forgot password?
              </Text>
            </TouchableOpacity>

          </View>
          <TextInput style={styles.input}
            autoCorret={false}
            value={senha}
            onChangeText={(text) => setSenha(text)} />

        </View>
        <TouchableOpacity style={styles.botaoSign} onPress={handleLogin}>
          <Text style={styles.textoSignIn}>
            Sign in
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.signInPasskey}>

      <TouchableOpacity >
        <Text style={styles.passKey}>
          Sign in with a passkey
        </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.textoFooter}>
            Terms
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textoFooter}>
            Privacy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textoFooter}>
            Docs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textoFooter2}>
            Contact GitHub Support
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}


