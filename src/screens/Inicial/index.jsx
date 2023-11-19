import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles}from './style'

export const Inicial = () => {
  return (
    <SafeAreaView style={styles.tudo}>
      <View style={styles.containerLogo}>
        <Image source={require('../../../assets/logo96.png')}/>
      </View>
      <View style={styles.containerEntrar}>
        <TouchableOpacity style={styles.btnEntrarN}>
          <Text style={styles.textoN}>
            ENTRAR COM GITHUB
          </Text>
        </TouchableOpacity>
        <View style={styles.containerInstrucao}>

        <Text style={styles.instrucao}>
          Use sua conta pessoal ou a conta do GitHub Enterprise Cloud para entrar no GitHub.com
        </Text>
        </View>
        <TouchableOpacity style={styles.btnEntrarE}>
          <Text style={styles.textoE}>
            ENTRAR COM GITHUB ENTERPRISE
          </Text>
        </TouchableOpacity>
        <Text style={styles.termos}>
          Ao assinar, você aceita nossos <Text style={styles.textoLink}>Termos de uso</Text> e <Text style={styles.textoLink}>Política de Privacidade</Text>.
        </Text>
        <View style={styles.problemas}>
        <Text style={styles.textoLink}>
          Problemas para entrar?
        </Text>
        </View>
      </View>


    </SafeAreaView>
  )
}


