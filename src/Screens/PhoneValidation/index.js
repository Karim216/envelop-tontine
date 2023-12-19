import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import DefaultButton from '../../Components/DefaultButton'
import { useNavigation } from '@react-navigation/native';

const PhoneValidation = () => {

  const navigation = useNavigation();

  const [number, setNumber] = useState("")

  const handleResetContinue = () => {
    navigation.navigate("codeauth")
  }

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("passwordreset")} style={{width: "fit-content"}}>
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.0268555 4.99196L4.26186 9.24196L5.67886 7.82996L3.85786 6.00296H21.9729V4.00296H3.85286L5.68886 2.17396L4.27686 0.756958L0.0268555 4.99196Z" fill="#171717" />
        </svg>
      </Text>
      <Text style={styles.h1}>Valider le numéro le numéro de portable</Text>
      <Text>Entre ton numéro de portable mobile et reçois par sms ton code d’authentification </Text>
      <View style={styles.inputContainer}>
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.91517 16.8C9.70715 16.9875 9.43757 17.092 9.15757 17.0939C8.87757 17.0957 8.60664 16.9947 8.39617 16.81C8.27717 16.7 8.15917 16.6 8.04017 16.49C6.95633 15.4782 5.9514 14.385 5.03417 13.22C4.20249 12.1678 3.4942 11.0236 2.92317 9.81002C2.44151 8.78579 2.18086 7.67163 2.15817 6.54002C2.15412 5.87692 2.28618 5.22004 2.54617 4.61002C2.82653 3.96623 3.25032 3.39502 3.78517 2.94002C4.38386 2.35071 5.18622 2.01415 6.02617 2.00002C6.32653 1.99859 6.62388 2.0599 6.89917 2.18002C7.1856 2.29874 7.43493 2.49213 7.62117 2.74002L10.1212 6.01003C10.2929 6.22487 10.4376 6.45996 10.5522 6.71002C10.6454 6.90027 10.6969 7.10825 10.7032 7.32002C10.6995 7.5738 10.6209 7.82082 10.4772 8.03003C10.3101 8.29266 10.1083 8.53149 9.87717 8.74002L9.05817 9.53003C9.00208 9.58013 8.95763 9.6419 8.92791 9.71099C8.8982 9.78009 8.88396 9.85484 8.88617 9.93002C8.88623 10.0078 8.897 10.0852 8.91817 10.16C8.95017 10.24 8.98317 10.3 9.00417 10.36C9.29509 10.8182 9.63001 11.2469 10.0042 11.64C10.4892 12.16 11.0042 12.69 11.5662 13.22C11.6742 13.32 11.7922 13.42 11.9002 13.52C12.0025 13.6086 12.0848 13.7179 12.1415 13.8408C12.1982 13.9637 12.2281 14.0972 12.2291 14.2325C12.2302 14.3679 12.2024 14.5018 12.1475 14.6256C12.0927 14.7493 12.0121 14.8599 11.9112 14.95L9.91517 16.8Z" fill="#292D32" />
          <path d="M23.5121 19.179C23.4806 19.261 23.4445 19.3411 23.4041 19.419C23.2133 19.7945 22.9661 20.1385 22.6711 20.439C22.1762 20.9577 21.5728 21.3607 20.9041 21.619C20.8931 21.619 20.8821 21.629 20.8721 21.629C20.2106 21.877 19.5095 22.0024 18.8031 21.999C17.5968 21.9792 16.4052 21.7316 15.2911 21.269C13.9875 20.7455 12.7448 20.0816 11.5851 19.289C11.1651 18.999 10.7461 18.709 10.3461 18.399L13.8691 15.129C14.1231 15.3091 14.3906 15.4696 14.6691 15.609C14.7231 15.629 14.7881 15.659 14.8631 15.689C14.9498 15.7176 15.0408 15.7311 15.1321 15.729C15.2133 15.7312 15.2942 15.7173 15.3701 15.6882C15.4459 15.659 15.5153 15.6151 15.5741 15.559L16.3901 14.809C16.62 14.5855 16.8815 14.3968 17.1661 14.249C17.3979 14.1124 17.662 14.0399 17.9311 14.039C18.1562 14.0416 18.3789 14.0857 18.5881 14.169C18.8531 14.2734 19.107 14.404 19.3461 14.559L22.9121 16.909C23.1668 17.0613 23.3726 17.2834 23.5051 17.549C23.6163 17.7941 23.6749 18.0598 23.6771 18.329C23.6746 18.62 23.6186 18.9082 23.5121 19.179Z" fill="#292D32" />
        </svg>
        <View style={styles.selectNumberId}>
          <Text>+224</Text>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9284 8.59998L12.9684 13.174L8.00838 8.59998L6.48438 10.008L12.9684 16L19.4524 10.008L17.9284 8.59998Z" fill="black" />
          </svg>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Numero de téléphone"
          value={number}
          onChangeText={setNumber}
        />
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.58602 6.41402L1.75702 3.58502L0.343018 5.00002L4.58602 9.24202L11.657 2.17102L10.243 0.757019L4.58602 6.41402Z" fill="#00C6AD" />
        </svg>
      </View>
      <DefaultButton title="Continuer" onPress={handleResetContinue} />
    </View>
  )
}

export default PhoneValidation

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  h1: {
    color: "#003866",
    fontSize: 28,
    lineHeight: 40,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 60
  },
  inputContainer: {
    marginTop: 45,
    marginBottom: 75,
    borderBottomWidth: 1,
    borderBottomColor: '#2B94EF',
    paddingLeft: 5,
    paddingBottom: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    marginLeft: 15,
    outlineColor: "transparent",
    placeholderTextColor: "#8F92A1",
  },
  selectNumberId: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRightWidth: 1,
    borderRightColor: "#707070",
    paddingLeft: 15,
    paddingRight: 5
  }
})