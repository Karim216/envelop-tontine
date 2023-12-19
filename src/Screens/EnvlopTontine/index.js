import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'

const EnvlopTontine = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Navbar
        icon={
          <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.761 15.951H5.25402C4.6723 16.0118 4.08435 15.9419 3.53307 15.7465C2.9818 15.5511 2.4811 15.2351 2.06753 14.8215C1.65395 14.4079 1.33793 13.9072 1.14252 13.3559C0.947107 12.8047 0.877242 12.2167 0.938018 11.635V6.37999C0.877242 5.79828 0.947107 5.21033 1.14252 4.65905C1.33793 4.10777 1.65395 3.60708 2.06753 3.1935C2.4811 2.77993 2.9818 2.4639 3.53307 2.26849C4.08435 2.07308 4.6723 2.00322 5.25402 2.06399H12.76C13.3417 2.00322 13.9297 2.07308 14.481 2.26849C15.0322 2.4639 15.5329 2.77993 15.9465 3.1935C16.3601 3.60708 16.6761 4.10777 16.8715 4.65905C17.0669 5.21033 17.1368 5.79828 17.076 6.37999V11.635C17.1368 12.2166 17.0669 12.8045 16.8716 13.3557C16.6762 13.9069 16.3603 14.4075 15.9468 14.8211C15.5334 15.2346 15.0328 15.5507 14.4816 15.7461C13.9305 15.9416 13.3427 16.0116 12.761 15.951ZM5.25402 3.18999C3.10702 3.18999 2.06402 4.23299 2.06402 6.37999V11.635C2.06402 13.782 3.10702 14.825 5.25402 14.825H12.76C14.907 14.825 15.95 13.782 15.95 11.635V6.37999C15.95 4.23299 14.907 3.18999 12.76 3.18999H5.25402Z" fill="#2B94EF" />
            <path d="M7.25098 9.06701L4.90098 7.18801C4.83852 7.14395 4.78572 7.0876 4.74583 7.0224C4.70593 6.95721 4.67977 6.88455 4.66897 6.80888C4.65816 6.73322 4.66293 6.65614 4.68298 6.58238C4.70303 6.50862 4.73795 6.43974 4.78558 6.37997C4.83321 6.32019 4.89256 6.27077 4.95997 6.23476C5.02739 6.19874 5.10145 6.17688 5.17762 6.17051C5.25379 6.16415 5.33046 6.17342 5.40291 6.19775C5.47537 6.22208 5.54209 6.26096 5.59898 6.31201L7.94898 8.18801C8.25531 8.41114 8.62451 8.53135 9.00348 8.53135C9.38246 8.53135 9.75166 8.41114 10.058 8.18801L12.408 6.31201C12.4653 6.2653 12.5313 6.23053 12.6022 6.20973C12.6732 6.18894 12.7475 6.18255 12.821 6.19094C12.8944 6.19932 12.9654 6.22232 13.0298 6.25857C13.0942 6.29482 13.1507 6.34359 13.196 6.40201C13.2424 6.45923 13.2769 6.52514 13.2975 6.59586C13.3181 6.66659 13.3244 6.74071 13.316 6.8139C13.3077 6.88709 13.2848 6.95788 13.2487 7.02211C13.2126 7.08635 13.1641 7.14275 13.106 7.18801L10.756 9.06701C10.2586 9.46001 9.64085 9.66945 9.00698 9.66001C8.37118 9.66822 7.75164 9.459 7.25098 9.06701Z" fill="#2B94EF" />
          </svg>
        }
        title={"Envlop tontine"}
      />
      <Text style={styles.h1}>EnvlopTontine</Text>
    </View>
  )
}

export default EnvlopTontine

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  h1: {
    fontSize: 25,
    textAlign: "center",
    margin: 16,
    color: "#003866"
  }
})