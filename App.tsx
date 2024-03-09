import React,{ Component } from "react";
import { Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ForgotScreen from "./screens/ForgotScreen";
import ForgotSuccessScreen from "./screens/ForgotSuccessScreen";
import VerifyOtpScreen from "./screens/VerifyOtp";
import OtpInvalidMsgScreen from "./screens/OtpInvalidMsg";
import OtpSuccessMsgScreen from "./screens/OtpSuccessMsg";
import DashboardScreen from "./screens/DashboardScreen";
import SettingScreen from "./screens/SettingScreen";
import DeliveryTrackingScreen from "./screens/DeliveryTracking";
import AddDeliveryScreen from "./screens/AddDelivery";
import SuccessMsgAfterAddDelivery from "./screens/SuccessMsgAfterAddDelivery";
import ChangePasswordScreen from "./screens/ChangePassword";
import AddressScreen from './screens/AddressScreen';
import NotificationScreen from './screens/NotificationScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProposalScreen from './screens/ProposalScreen';
import SupportScreen from './screens/SupportScreen';
import AddAddressScreen from './screens/AddAddressScreen';
import EditAddressScreen from './screens/EditAddressScreen';
import ContactSupportScreen from "./screens/ContactSupport";
import SuccessContactScreen from "./screens/SuccessContactSupport";
import FAQScreen from "./screens/FAQScreen";
import DeleteAccountScreen from "./screens/DeleteAccount";
import ModifyNameScreen from "./screens/ModifyName";
import ModifyEmailScreen from "./screens/ModifyEmail";
import ModifyPhoneScreen from "./screens/ModifyPhone";
import ModifyGenderScreen from "./screens/ModifyGender";
import ModifyPhotoScreen from "./screens/ModifyPhoto";
import PackageTracking from "./screens/PackageTracking";
import PackageTrackingDetail from "./screens/PackageTrackingDetail";
import NotFoundScreen from "./screens/404";
import DeliveryPrice from "./screens/DeliveryPrice";
import DeliveryDateTime from "./screens/DeliveryDateTime";

const usericon = require('./assets/img/User.png');
const plusicon = require('./assets/img/Plus.png');
const groupicon = require('./assets/img/Group.png');
const homeicon = require('./assets/img/home.png');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AddDeliveryStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();
const DeliveryTrackingStack = createNativeStackNavigator();

function DeliveryTrackingScreens(){
  return (
    <DeliveryTrackingStack.Navigator>
      <DeliveryTrackingStack.Screen 
            options={{
              headerShown: true,
              title:'Suivi de livraison',
              headerBackTitleVisible: false
            }} 
            name="DeliveryTracking" 
            component={DeliveryTrackingScreen} />
      <DeliveryTrackingStack.Screen
        options={{
          headerShown: true,
          title:'Suivi du colis',
          headerBackTitleVisible: false
        }}
        name="packagetracking"
        component={PackageTracking}
      />
      <DeliveryTrackingStack.Screen
        options={{
          headerShown: true,
          title:'Détails du colis',
          headerBackTitleVisible: false
        }}
        name="packagetrackingdetail"
        component={PackageTrackingDetail}
      />
  </DeliveryTrackingStack.Navigator>
  );
}

function SettingScreens() {
  return (
    <SettingStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor:'#084442',
      headerTitleStyle: {
        fontSize:21.3,
        fontWeight:'500',
        fontFamily: 'Work Sans',
        color:"#000000",
      },
      headerShown: true,
      title:'Profil',
      headerBackTitleVisible: false
    }}>
      <SettingStack.Screen 
        options={{
          headerShown: true,
          title:'Paramètres'
        }} 
        name="settingscreen" 
        component={SettingScreen} />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Modifier le mot de passe',
          headerBackTitleVisible: false
        }}
        name="changepassword"
        component={ChangePasswordScreen}
      />
      <SettingStack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor:'#084442',
          headerTitleStyle: {
            fontSize:21.3,
            fontWeight:'500',
            fontFamily: 'Work Sans',
            color:"#000000",
          },
          headerShown: true,
          title:'Profil',
          headerBackTitleVisible: false
        }}
        name="profile"
        component={ProfileScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Adresses',
          headerBackTitleVisible: false
        }}
        name="address"
        component={AddressScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Notifications',
          headerBackTitleVisible: false
        }}
        name="notifications"
        component={NotificationScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'A propos',
          headerBackTitleVisible: false
        }}
        name="proposal"
        component={ProposalScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Politique de confidentialité',
          headerBackTitleVisible: false
        }}
        name="privacypolicy"
        component={PrivacyScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Aide et support',
          headerBackTitleVisible: false
        }}
        name="support"
        component={SupportScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Ajouter une adresse',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleStyle: {
            fontSize:21.3,
            fontWeight:'500',
            fontFamily: 'Work Sans',
            color:"#000000",
          },
          headerBackTitleVisible: false
        }}
        name="addaddress"
        component={AddAddressScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Modifier une adresse',
          headerBackTitleVisible: false
        }}
        name="editaddress"
        component={EditAddressScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Contact',
          headerBackTitleVisible: false
        }}
        name="contact"
        component={ContactSupportScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Contact',
          headerBackTitleVisible: false
        }}
        name="sucesscontact"
        component={SuccessContactScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Aide et support',
          headerBackTitleVisible: false
        }}
        name="faq"
        component={FAQScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Supprimer mon compte',
          headerBackTitleVisible: false
        }}
        name="deleteaccount"
        component={DeleteAccountScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Modifier le nom',
          headerBackTitleVisible: false
        }}
        name="modifyname"
        component={ModifyNameScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Modifier l’e-mail',
          headerBackTitleVisible: false
        }}
        name="modifyemail"
        component={ModifyEmailScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Modifier le téléphone',
          headerBackTitleVisible: false
        }}
        name="modifyphone"
        component={ModifyPhoneScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Modifier le genre',
          headerBackTitleVisible: false
        }}
        name="modifygender"
        component={ModifyGenderScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: true,
          title:'Modifier l’avatar',
          headerBackTitleVisible: false
        }}
        name="modifyphoto"
        component={ModifyPhotoScreen}
      />
      
    </SettingStack.Navigator>
  );
}

function AddDeliveryScreens() {
  return (
    <AddDeliveryStack.Navigator>
      <AddDeliveryStack.Screen 
            options={{
              headerShown: true,
              title:'Envoyer un colis',
              headerBackTitleVisible: false
            }} 
            name="AddDelivery" 
            component={AddDeliveryScreen} />
      <AddDeliveryStack.Screen 
            options={{
              headerShown: true,
              title:'Envoyer un colis',
              headerBackTitleVisible: false
            }} 
            name="deliveryprice" 
            component={DeliveryPrice} />
      <AddDeliveryStack.Screen 
            options={{
              headerShown: true,
              title:'Envoyer un colis',
              headerBackTitleVisible: false
            }} 
            name="deliverydatetime" 
            component={DeliveryDateTime} />
      <AddDeliveryStack.Screen
            options={{headerShown: false,headerTitle:''}}
            name="SuccessAddDelivery"
            component={SuccessMsgAfterAddDelivery}
          />
      <AddDeliveryStack.Screen
        options={{
          headerShown: true,
          title:'Suivi du colis',
          headerBackTitleVisible: false
        }}
        name="packagetracking"
        component={PackageTracking}
      />
      <AddDeliveryStack.Screen
        options={{
          headerShown: true,
          title:'Détails du colis',
          headerBackTitleVisible: false
        }}
        name="packagetrackingdetail"
        component={PackageTrackingDetail}
      />    
    </AddDeliveryStack.Navigator>
  );
}
function Dashboard() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#084442",
      tabBarInactiveTintColor: "#084442",
      tabBarStyle: {
        paddingLeft: 14,
        paddingRight: 16,
        paddingTop:16,
        paddingBottom:16,
        borderColor: '#B8B8B8',
      },
      tabBarItemStyle: {},
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Work Sans',
        lineHeight: 28,
      },
    })}>
      <Tab.Screen 
        name="Accueil" 
        component={DashboardScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={homeicon}
              />
            );
          },
        }} />
      <Tab.Screen 
        name="Livrer" 
        component={AddDeliveryScreens} 
        options={{
          headerShown: false,
          title:'Envoyer un colis',
          tabBarLabel:'Livrer',
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={plusicon}
              />
            );
          },
          }} 
        />
      <Tab.Screen 
        name="Suivi" 
        component={DeliveryTrackingScreens} 
        options={{
          headerShown: false,
          title:'Suivi de livraison',
          tabBarLabel:'Suivi',
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={groupicon}
              />
            );
          },
          }} 
        />
      <Tab.Screen 
        name="settingtab" 
        component={SettingScreens} 
        options={{
          title:'Paramètres',
          headerShown: false,
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={usericon}
              />
            );
          },
        }} 
      />
    </Tab.Navigator>
  );
}
const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
            options={{headerShown: false}}
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          /> 
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{headerBackTitleVisible: false}}
            name="Inscription"
            component={SignupScreen}
          />
          <Stack.Screen
            options={{headerBackTitleVisible: false,title:"Mot de passe oublié"}}
            name="Forgot"
            component={ForgotScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Forgotsuccess"
            component={ForgotSuccessScreen}
          />
          <Stack.Screen
            options={{headerBackTitleVisible: false,title:"Inscription"}}
            name="VerifyOtp"
            component={VerifyOtpScreen}
          />
          <Stack.Screen
            options={{headerBackTitleVisible: false,title:"Inscription"}}
            name="OtpInvalidMsg"
            component={OtpInvalidMsgScreen}
          />
          <Stack.Screen
            options={{headerBackTitleVisible: false,title:"Inscription"}}
            name="OtpSuccessMsg"
            component={OtpSuccessMsgScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="notfound"
            component={NotFoundScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default App;