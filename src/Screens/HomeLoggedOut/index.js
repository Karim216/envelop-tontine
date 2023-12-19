import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import AccountCreationStep from '../../Components/AccountCreationStep'
import DefaultButton from '../../Components/DefaultButton'
import { useNavigation } from '@react-navigation/native';

const HomeLoggedOut = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.containerView}>
      <View style={styles.logo}>
        <TouchableOpacity onPress={() => navigation.navigate("signin")} style={styles.btnConnect}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <svg width="120" height="120" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M77 154C119.526 154 154 119.526 154 77C154 34.4741 119.526 0 77 0C34.4741 0 0 34.4741 0 77C0 119.526 34.4741 154 77 154Z" fill="white" />
          <path d="M77 0C92.2292 0 107.116 4.51597 119.779 12.9768C132.441 21.4377 142.311 33.4635 148.139 47.5334C153.967 61.6033 155.492 77.0854 152.52 92.022C149.549 106.958 142.216 120.679 131.447 131.447C120.679 142.216 106.958 149.549 92.022 152.52C77.0854 155.492 61.6033 153.967 47.5334 148.139C33.4635 142.311 21.4377 132.441 12.9768 119.779C4.51597 107.116 0 92.2292 0 77C0 56.5783 8.11248 36.9931 22.5528 22.5528C36.9931 8.11248 56.5783 0 77 0Z" fill="#2B94EF" />
          <g filter="url(#filter0_d_1_132)">
            <path d="M124.998 76.998C124.998 50.4883 103.508 28.998 76.998 28.998C50.4884 28.998 28.998 50.4883 28.998 76.998C28.998 103.508 50.4884 124.998 76.998 124.998C103.508 124.998 124.998 103.508 124.998 76.998Z" fill="white" />
          </g>
          <path d="M92.682 51.723L91.426 60.352H73.413V72.601H89.149V81.101H73.413V94.155H92.682V102.867H61.313V51.723H92.682Z" fill="#003866" />
          <defs>
            <filter id="filter0_d_1_132" x="7.99805" y="7.99799" width="138" height="138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="10.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_132" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_132" result="shape" />
            </filter>
          </defs>
        </svg>
        <Text style={styles.textAnnonce}>Votre tontine 2.0, cotisez dans votre envolp sécurisée avec vos proches et récupérez vos cotisations à tour de rôle </Text>
      </View>
      <AccountCreationStep />
      <View style={styles.btnDefaultContainer}>
        <DefaultButton title="Créer un compte gratuitement" onPress={() => navigation.navigate("signup")} />
      </View>
    </View>
  )
}

export default HomeLoggedOut

const styles = StyleSheet.create({
  containerView: {
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 16,
    display: "flex",
    flexDirection: "column",
    gap: 50,
    height: "100vh",
    backgroundColor: "#FFFFFF"
  },
  btnConnect: {
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 50,
    textAlign: "center",
    alignSelf: 'flex-end',
    shadowColor: '#2B94EF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    marginLeft: 16,
    marginRight: 16,
  },
  textAnnonce: {
    marginTop: 16,
    color: "#003866",
    fontWeight: "bold",
    // fontSize: 16,
    lineHeight: 35
  },
  buttonText: {
    color: '#2B94EF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnDefaultContainer: {
    marginLeft: 16,
    marginRight: 16,
  }

});