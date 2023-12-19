import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Header = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Text onPress={() => navigation.navigate("loadingpage")}  style={styles.userAvatar}>F</Text>
      <View style={styles.logoContainer}>
        <svg width="35" height="35" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <Text style={styles.logoText}>Envlop</Text>
      </View>
      <View style={styles.notif}>
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.98923 17.385C6.69161 17.3823 6.3977 17.3187 6.12549 17.1984C5.85329 17.078 5.60854 16.9033 5.40623 16.685C4.98263 16.225 4.74772 15.6224 4.74823 14.997H0.819227L0.282227 14.208L0.953227 12.089C1.23681 11.171 1.38142 10.2158 1.38223 9.25502V6.62202C1.38461 5.7923 1.54867 4.97099 1.86523 4.20402C2.17366 3.45104 2.63468 2.77008 3.21923 2.20402C3.78511 1.63405 4.47358 1.20072 5.23223 0.937022C5.79105 0.736567 6.38054 0.635048 6.97423 0.637022C7.168 0.637064 7.36162 0.647746 7.55423 0.669022C8.98409 0.868206 10.2841 1.60531 11.1892 2.73002C12.1342 3.8931 12.6379 5.35267 12.6112 6.85102V9.23702C12.6113 10.2024 12.7559 11.1624 13.0402 12.085L13.6982 14.204L13.1612 14.991H9.23023C9.23091 15.6162 8.99637 16.2188 8.57323 16.679C8.37129 16.8985 8.1266 17.0743 7.8542 17.1957C7.58179 17.3171 7.28744 17.3816 6.98923 17.385ZM5.86323 15.009C5.86285 15.3228 5.98274 15.6249 6.19823 15.853C6.29715 15.9657 6.41896 16.0559 6.55554 16.1178C6.69211 16.1796 6.84031 16.2116 6.99023 16.2116C7.14015 16.2116 7.28834 16.1796 7.42492 16.1178C7.56149 16.0559 7.68331 15.9657 7.78223 15.853C7.88967 15.7411 7.97353 15.6087 8.02884 15.4637C8.08415 15.3187 8.10979 15.1641 8.10423 15.009H5.86323ZM6.98223 1.84402C6.50943 1.84449 6.04024 1.92635 5.59523 2.08602C4.99113 2.29601 4.44121 2.63757 3.98523 3.08602C3.51394 3.53658 3.14347 4.08189 2.89823 4.68602C2.64167 5.29784 2.50943 5.95459 2.50923 6.61802V9.25502C2.50438 10.3473 2.33584 11.4327 2.00923 12.475L1.59323 13.806V13.821H12.3932L11.9822 12.49C11.6494 11.4495 11.4808 10.3635 11.4822 9.27102V6.86502C11.5081 5.66082 11.1095 4.4859 10.3562 3.54602C9.63517 2.63719 8.59426 2.03804 7.44623 1.87102C7.2922 1.85318 7.13728 1.84417 6.98223 1.84402Z" fill="#2B94EF" />
        </svg>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#DEF2FF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  logoText: {
    color: "#003866",
    fontWeight: "bold",
    fontSize: 16,
  },
  userAvatar: {
    borderRadius: 50,
    backgroundColor: "#00C6AD",
    height: 28,
    width: 28,
    color: "#FFFFFF",
    shadowColor: '#000000',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  notif: {
    height: 28,
    width: 28,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000000',
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }
})