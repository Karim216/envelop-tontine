import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputText from '../../Components/InputText'
import DefaultButton from '../../Components/DefaultButton'
import { useNavigation } from '@react-navigation/native';

const NationalityChoice = () => {

  const navigation = useNavigation();

  const [nationality, setNationality] = useState("")

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("codeauth")} style={{width: "fit-content"}}>
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.0268555 4.99196L4.26186 9.24196L5.67886 7.82996L3.85786 6.00296H21.9729V4.00296H3.85286L5.68886 2.17396L4.27686 0.756958L0.0268555 4.99196Z" fill="#171717" />
        </svg>
      </Text>
      <Text style={styles.h1}>Entre ta nationalité</Text>
      <Text style={{ marginBottom: "40px", lineHeight: "25px" }}>Si tu as plus d’une nationalité, choisis en une</Text>
      <InputText
        placeholder={"Citoyenneté"}
        icon1={
          <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.265 3.69997V2.74997C8.2559 2.5444 8.16644 2.35061 8.01588 2.21034C7.86532 2.07007 7.6657 1.99453 7.46 1.99997C7.25429 1.99453 7.05468 2.07007 6.90412 2.21034C6.75356 2.35061 6.6641 2.5444 6.655 2.74997V21.25C6.6641 21.4555 6.75356 21.6493 6.90412 21.7896C7.05468 21.9299 7.25429 22.0054 7.46 22C7.6657 22.0054 7.86532 21.9299 8.01588 21.7896C8.16644 21.6493 8.2559 21.4555 8.265 21.25V17.29L17.089 13.23H17.1C18.882 12.37 19.837 11.26 19.784 10.09C19.731 8.91997 18.689 7.87997 16.855 7.15997L8.265 3.69997Z" fill="#292D32" />
          </svg>
        }
        icon2={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8104 8.59998L12.8824 13.174L7.95541 8.59998L6.44141 10.008L12.8824 16L19.3234 10.008L17.8104 8.59998Z" fill="black" />
          </svg>
        }
        value={nationality}
        setValue={setNationality}
      />
      <View style={{ marginTop: "40px" }}>
        <DefaultButton
          title={"Continuer"}
          onPress={() => navigation.navigate("laststepsignup")}
        />
      </View>
      <View style={styles.infoVerif}>
        <View>
          <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2016 17.789C12.7479 17.8097 12.3046 17.6497 11.9685 17.3443C11.6325 17.0388 11.4312 16.6126 11.4086 16.159C11.4312 15.7054 11.6325 15.2792 11.9685 14.9737C12.3046 14.6683 12.7479 14.5083 13.2016 14.529C13.6553 14.5083 14.0987 14.6683 14.4347 14.9737C14.7708 15.2792 14.9721 15.7054 14.9946 16.159C14.9721 16.6126 14.7708 17.0388 14.4347 17.3443C14.0987 17.6497 13.6553 17.8097 13.2016 17.789Z" fill="#292D32" />
            <path d="M18.3156 22.439H8.08462C3.57462 22.439 2.19962 21.189 2.19962 17.089V15.229C2.19962 11.689 3.27062 10.313 6.29162 9.96903V8.71903C6.29162 6.02303 7.00762 2.43903 13.1996 2.43903C19.3916 2.43903 20.1086 6.02303 20.1086 8.71903V9.96903C23.1296 10.313 24.1996 11.689 24.1996 15.229V17.089C24.1996 21.189 22.8256 22.439 18.3156 22.439ZM13.1996 13.139C12.3595 13.102 11.5388 13.3988 10.9167 13.9646C10.2945 14.5303 9.92137 15.3192 9.87862 16.159C9.92137 16.9989 10.2945 17.7877 10.9167 18.3535C11.5388 18.9193 12.3595 19.216 13.1996 19.179C14.04 19.2163 14.861 18.9197 15.4836 18.3539C16.1061 17.7882 16.4796 16.9991 16.5226 16.159C16.4796 15.3189 16.1061 14.5299 15.4836 13.9641C14.861 13.3984 14.04 13.1018 13.1996 13.139ZM13.1996 3.83903C8.74462 3.83903 7.83162 5.79003 7.83162 8.71903V9.87903H8.08362V9.88903H18.5686V8.71903C18.5686 5.79003 17.6556 3.83903 13.1996 3.83903Z" fill="#292D32" />
          </svg>
        </View>
        <Text style={{ lineHeight: "25px", color: "#979797" }}>Ces informations ne sont utilisées que pour la vérification d’identité et sont transmises en toute sécurité à l’aide d’un cryptage de 128 bits.</Text>
      </View>
    </View>
  )
}

export default NationalityChoice

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
    marginBottom: 20
  },
  infoVerif: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 60,
  }
}) 