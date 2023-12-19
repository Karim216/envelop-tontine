import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputText = ({icon1 = "", placeholder, icon2 = "", value, setValue}) => {

  const handleFocus = (event) => {
    event.target.style.outline = "none"
  }

  return (
    <View style={styles.inputContainer}>
      {icon1}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onFocus={handleFocus}
        onChangeText={setValue}
      />
      {icon2}
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginLeft: 15,
    outlineColor: "transparent",
    placeholderTextColor: "#8F92A1",
    backgroundColor: "transparent",
  },
  inputContainer: {
    marginTop: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2B94EF',
    paddingLeft: 5,
    paddingBottom: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
})