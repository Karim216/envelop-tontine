import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CancelButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnDefault}
    >
      <Text style={styles.btnDefaultText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CancelButton

const styles = StyleSheet.create({
  btnDefault: {
    // backgroundColor: 'linear-gradient(135deg, #2B94EF 0%, #2BC9EF 87.2%, #2BC9EF 100%)',
    backgroundColor: '#DEDEDE',
    padding: 10,
    textAlign: "center",
  },
  btnDefaultText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  }
})