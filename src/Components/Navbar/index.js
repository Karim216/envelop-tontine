import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Navbar = ({title, icon}) => {
  return (
    <View style={styles.nav}>
      {icon}
      <Text>{title}</Text>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    padding: 8,
    shadowColor: '#00C6AD',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})