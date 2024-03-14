import { StatusBar } from 'expo-status-bar';
import LoginScreen from './Apps/Screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './Apps/Screens/Profile';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <ClerkProvider publishableKey='pk_test_Y2hvaWNlLW1pbmstMTMuY2xlcmsuYWNjb3VudHMuZGV2JA'>
        <SignedOut>
          <NavigationContainer>
          <StatusBar style="dark"/>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false
                  }}
                  >
                    <Stack.Screen
                      name="Login"
                      component={LoginScreen}
                      options={{title: ''}}
                      />
                </Stack.Navigator>
          </NavigationContainer>
          </SignedOut>
          <SignedIn>
          <NavigationContainer>
          <StatusBar style="dark"/>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false
                  }}
                  >
                      <Stack.Screen
                      name="Profile"
                      component={Profile}
                      />
                </Stack.Navigator>
          </NavigationContainer>
          </SignedIn>
         </ClerkProvider>
  );
}
