import { StyleSheet, Text, View } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Créer un compte gratuitement ',
  },
  {
    id: '2',
    title: 'Validez votre numéro de portable',
  },
  {
    id: '3',
    title: 'Vérifiez votre identité ',
  },
];

function AccountCreationStep() {
  return (
    <View style={styles.container}>
      {
        DATA.map(item => {
          return (
            <View key={item.id} style={styles.item}>
              <Text style={styles.circle}>{item.id}</Text>
              <Text style={styles.textContent}>{item.title}</Text>
            </View>
          )
        })
      }
    </View>
  );
}

export default AccountCreationStep

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F0FCFA",
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    fontSize: 18,
    height: 44,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  circle: {
    color: "#FFFFFF",
    backgroundColor: "#2B94EF",
    height: 30,
    width: 30,
    borderRadius: 50,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  textContent: {
    color: "#003866",
    fontWeight: "bold",
  }
});