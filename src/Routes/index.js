import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../Screens/Home';
import SignUp from '../Screens/SignUp';
import HomeLoggedOut from '../Screens/HomeLoggedOut';
import SignIn from '../Screens/SignIn';
import PasswordReset from '../Screens/PasswordReset';
import PhoneValidation from '../Screens/PhoneValidation';
import CodeAuth from '../Screens/CodeAuth';
import NationalityChoice from '../Screens/NationalityChoice';
import LastStepSignUp from '../Screens/LastStepSignUp';
import IdentifyVerify from '../Screens/IdentifyVerify';
import IdentificationType from '../Screens/IdentificationType';
import CardReceived from '../Screens/CardReceived';
import ActivateNotification from '../Screens/ActivateNotification';
import BottomTabs from '../Screens/Tabs';
import Contact from '../Screens/Contact';
import EnvlopTontine from '../Screens/EnvlopTontine';
import Wallet from '../Screens/Wallet';
import LoadingPage from '../Screens/LoadingPage';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loadingpage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="loadingpage" component={LoadingPage} />

        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="homeloggedout" component={HomeLoggedOut} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="passwordreset" component={PasswordReset} />
        <Stack.Screen name="phonevalidation" component={PhoneValidation} />
        <Stack.Screen name="codeauth" component={CodeAuth} />
        <Stack.Screen name="nationalitychoice" component={NationalityChoice} />
        <Stack.Screen name="laststepsignup" component={LastStepSignUp} />
        <Stack.Screen name="identifyverify" component={IdentifyVerify} />
        <Stack.Screen name="identificationtype" component={IdentificationType} />
        <Stack.Screen name="cardreceived" component={CardReceived} />
        <Stack.Screen name="activatenotification" component={ActivateNotification} />

        <Stack.Screen name="bottomtabs" component={BottomTabs} />
        <Stack.Screen name="contact" component={Contact} />
        <Stack.Screen name="envloptontine" component={EnvlopTontine} />
        <Stack.Screen name="wallet" component={Wallet} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes