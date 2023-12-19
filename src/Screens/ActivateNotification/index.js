import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DefaultButton from '../../Components/DefaultButton'
import CancelButton from '../../Components/CancelButton'
import { useNavigation } from '@react-navigation/native';

const ActivateNotification = () => {

  const navigation = useNavigation();
  
  const handleContinue = () => {

    navigation.navigate("bottomtabs")
  }

  return (
    <View style={styles.container}>
      <View onPress={() => handleContinue()}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.2308 16.2077L23.7656 22.2365L29.7945 28.7017L27.6392 30.7116L21.6103 24.2464L15.1452 30.2753L13.1353 28.12L19.6005 22.0911L13.5716 15.6259L15.7269 13.6161L21.7558 20.0812L28.2209 14.0524L30.2308 16.2077Z" fill="black" />
        </svg>
      </View>
      <View style={styles.cardContainer}>
        <svg width="277" height="247" viewBox="0 0 277 247" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M138.488 0.807007C214.814 0.807007 276.688 55.759 276.688 123.547C276.688 191.335 214.814 246.287 138.488 246.287C62.1621 246.287 0.288086 191.334 0.288086 123.547C0.288086 55.76 62.1621 0.807007 138.488 0.807007Z" fill="#DEDEDE" fillOpacity="0.33" />
          <path d="M138.488 3.80701C129.291 3.80701 120.101 4.62973 111.173 6.25227C102.476 7.83284 93.9221 10.1909 85.7495 13.2609C77.7297 16.2735 69.9959 20.0015 62.7627 24.3415C55.6038 28.6369 48.8733 33.5686 42.7581 38.9997C36.6493 44.4251 31.1047 50.3932 26.2782 56.7381C21.4114 63.136 17.2323 69.9736 13.8571 77.0608C10.4231 84.2714 7.78604 91.8157 6.01926 99.4839C4.20697 107.349 3.28809 115.445 3.28809 123.547C3.28809 131.648 4.20697 139.744 6.01926 147.609C7.78604 155.278 10.4231 162.822 13.8571 170.033C17.2323 177.12 21.4114 183.957 26.2782 190.355C31.1047 196.7 36.6493 202.668 42.7581 208.094C48.8733 213.525 55.6038 218.456 62.7627 222.752C69.9959 227.092 77.7297 230.82 85.7495 233.833C93.9221 236.902 102.476 239.261 111.173 240.841C120.101 242.464 129.291 243.286 138.488 243.286C147.686 243.286 156.876 242.464 165.804 240.841C174.501 239.261 183.054 236.902 191.227 233.833C199.247 230.82 206.981 227.092 214.214 222.752C221.373 218.456 228.103 213.525 234.218 208.094C240.327 202.668 245.872 196.7 250.698 190.355C255.565 183.957 259.744 177.12 263.119 170.033C266.553 162.822 269.191 155.278 270.957 147.609C272.77 139.744 273.688 131.648 273.688 123.547C273.688 115.445 272.77 107.349 270.957 99.4839C269.191 91.8157 266.553 84.2714 263.119 77.0608C259.744 69.9736 255.565 63.136 250.698 56.7381C245.872 50.3932 240.327 44.4251 234.218 38.9997C228.103 33.5686 221.373 28.6369 214.214 24.3415C206.981 20.0015 199.247 16.2735 191.227 13.2609C183.054 10.1909 174.501 7.83284 165.804 6.25227C156.876 4.62973 147.686 3.80701 138.488 3.80701ZM138.488 0.807007C214.814 0.807007 276.688 55.7595 276.688 123.547C276.688 191.334 214.814 246.286 138.488 246.286C62.1624 246.286 0.288086 191.334 0.288086 123.547C0.288086 55.7595 62.1624 0.807007 138.488 0.807007Z" fill="#2B94EF" fillOpacity="0.3" />
          <path d="M109.573 178.269C110.365 177.216 111.542 176.52 112.847 176.335C114.151 176.149 115.476 176.489 116.53 177.28C123.325 182.345 131.573 185.081 140.048 185.081C148.523 185.081 156.772 182.345 163.567 177.28C164.088 176.879 164.684 176.585 165.32 176.416C165.955 176.246 166.618 176.205 167.27 176.294C167.922 176.383 168.55 176.6 169.117 176.934C169.684 177.267 170.179 177.71 170.574 178.236C170.968 178.762 171.255 179.362 171.416 179.999C171.577 180.637 171.61 181.301 171.513 181.951C171.416 182.602 171.19 183.227 170.85 183.79C170.509 184.352 170.06 184.842 169.529 185.23C161.014 191.585 150.673 195.019 140.047 195.019C129.422 195.019 119.081 191.585 110.566 185.23C109.939 184.776 109.431 184.178 109.086 183.486C108.74 182.794 108.566 182.029 108.579 181.255C108.583 180.179 108.931 179.133 109.573 178.269Z" fill="black" />
          <path d="M191.515 128.315L179.392 108.97C178.586 107.652 178.152 106.141 178.133 104.597V95.124C178.133 79.091 169.322 70.28 153.289 70.28H126.789C110.758 70.28 101.945 79.091 101.945 95.124V104.598C101.927 106.142 101.492 107.653 100.686 108.971L88.5581 128.315C84.9141 134.145 83.1261 139.842 83.1261 145.142C83.0959 148.545 83.9399 151.898 85.5771 154.881C89.6841 162.235 98.2311 166.342 109.626 166.342H170.448C181.848 166.342 190.389 162.235 194.497 154.881C198.604 147.461 197.544 137.987 191.515 128.315Z" fill="#2B94EF" stroke="#707070" />
          <path d="M140.164 61.4993C137.121 61.4993 134.261 60.3146 132.11 58.1635C129.959 56.0124 128.774 53.1523 128.774 50.1102C128.774 47.068 129.959 44.2079 132.11 42.0568C134.261 39.9057 137.121 38.721 140.164 38.721C143.206 38.721 146.066 39.9057 148.217 42.0568C150.368 44.2079 151.553 47.068 151.553 50.1102C151.553 53.1523 150.368 56.0124 148.217 58.1635C146.066 60.3146 143.206 61.4993 140.164 61.4993Z" fill="#F9F871" />
          <path d="M140.164 39.221C137.255 39.221 134.52 40.3537 132.464 42.4104C130.407 44.4671 129.274 47.2016 129.274 50.1102C129.274 53.0188 130.407 55.7533 132.464 57.81C134.52 59.8667 137.255 60.9993 140.164 60.9993C143.072 60.9993 145.807 59.8667 147.863 57.81C149.92 55.7533 151.053 53.0188 151.053 50.1102C151.053 47.2016 149.92 44.4671 147.863 42.4104C145.807 40.3537 143.072 39.221 140.164 39.221ZM140.164 38.221C146.73 38.221 152.053 43.544 152.053 50.1102C152.053 56.6764 146.73 61.9993 140.164 61.9993C133.597 61.9993 128.274 56.6764 128.274 50.1102C128.274 43.544 133.597 38.221 140.164 38.221Z" fill="#707070" />
        </svg>
      </View>
      <Text style={styles.h1}>Activer vos notifications</Text>
      <Text style={styles.infoContainer}>Nous pouvons vous avertir d’un évènement important, comme une Modification de solde ou d’une alerte Sécurité
      </Text>
      <View style={styles.containerBtn}>
        <DefaultButton
          title={"Continuer"}
          onPress={handleContinue}
        />
      </View>
      <View style={styles.containerBtnCancel}>
        <CancelButton
          title={"Plus tard"}
          onPress={handleContinue}
        />
      </View>
    </View>
  )
}

export default ActivateNotification

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  infoContainer: {
    padding: 16,
    backgroundColor: "#F0FCFA",
    color: "#003866",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
  },
  containerBtn: {
    marginTop: 50,
    marginLeft: 16,
    marginRight: 16,
  },
  containerBtnCancel: {
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  cardContainer: {
    marginTop: 25,
    marginBottom: 25,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  h1: {
    color: "#003866",
    fontSize: 28,
    lineHeight: 40,
    fontWeight: "bold",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 30,
    marginBottom: 20
  },
})