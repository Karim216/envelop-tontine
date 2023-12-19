import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})