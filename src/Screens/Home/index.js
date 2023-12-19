import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <Navbar
        icon={<svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.1411 0.983994L11.0411 7.01999L2.94112 0.983994L0.453125 2.84199L11.0411 10.749L21.6291 2.84199L19.1411 0.983994Z" fill="black" />
        </svg>}
        title={""}
      />
      {/* <View style={styles.tontineInitiate}></View> */}
      <View>
        <Text style={styles.h1}>Votre tontine 2.0 sécurisée !</Text>
        <TouchableOpacity style={styles.btnDefault}>
          <Text style={styles.btnNewTontine}>Créer une Envlop tontine </Text>
        </TouchableOpacity>
        <View style={styles.announce}>
          <Text style={styles.textAnnounce}>Utilisez le code : ENVLOP Pour profiter d’une remise de 20% sur votre première tontine !</Text>
          <Image style={styles.imgDefaultUser} source={require('../../../assets/_defaultUser/user2.png')} />
        </View>
        <View style={{ marginTop: "5px", marginLeft: "16px" }}>
          <Text>Pour chaque tontine terminée</Text>
          <Text style={{ fontWeight: "bold", color: "#003866" }}>Gagnez des points !</Text>
        </View>

        <View style={styles.paymentContent}>
          <View>
            <Text style={{ fontWeight: "bold", color: "#003866" }}>Utilisez vos moyens de paiement préférés</Text>
            <View style={styles.cardContent}>
              <Image style={styles.imgCard} source={require('../../../assets/cardsImg/visa.png')} />
              <Image style={styles.imgCard} source={require('../../../assets/cardsImg/visa.png')} />
              <Image style={styles.imgCard} source={require('../../../assets/cardsImg/visa.png')} />
            </View>
          </View>
          <View>
            <View style={styles.cardContent}>
              <Text style={{ textAlign: "center", fontWeight: "bold", color: "#003866" }}>Nous prenons uniquement <Text style={{ color: "#2B94EF" }}>1%</Text> du montant vos cotisations par personne pour nos frais de services</Text>
            </View>
          </View>
          <View>
            <View style={styles.cardContentColor}>
              <Text style={{ textAlign: "center", fontWeight: "bold", color: "#003866" }}>Nous vous informons de tout retard de paiement De chaque participant</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: "relative"
  },
  tontineInitiate: {
    position: "absolute",
    backgroundColor: "#DEF2FF",
    zIndex: 10,
    top: 50,
    left: 0,
    right: 0,
    height: 250,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  h1: {
    color: "#003866",
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 16
  },
  btnNewTontine: {
    backgroundColor: "#DEF2FF",
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    color: "#003866",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 16,
    marginLeft: 16,
    width: "fit-content",
  },
  announce: {
    backgroundColor: "#00C6AD",
    padding: 16,
    position: "relative",
    height: 95
  },
  textAnnounce: {
    width: 250,
    fontWeight: "bold",
    fontSize: 14,
    color: "#FFFFFF"
  },
  imgDefaultUser: {
    width: 200,
    height: 150,
    position: "absolute",
    right: 0,
    top: -40
  },
  paymentContent: {
    marginTop: 40,
    marginLeft: 16,
    marginRight: 16,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  imgCard: {
    width: 45,
    height: 25,
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 16,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardContentColor: {
    padding: 16,
    marginTop: 16,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "red"
  }
});