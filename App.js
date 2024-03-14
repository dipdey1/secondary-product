import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { AuthContext, AuthProvider, useAuth } from './hooks/AuthContext';
import Profile from './Apps/Screens/DoubtApp/DoubtAppScreens/Profile';
import AppSelectionComponent from './Apps/Screens/AppSelectionComponent';
import Details from './Apps/Screens/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <AuthProvider>
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
                <Stack.Screen
                      name="AppSelection"
                      component={AppSelectionComponent}
                      options={{title: ''}}
                      />
                <Stack.Screen
                      name="Profile"
                      component={Profile}
                      />
                <Stack.Screen
                      name="Details"
                      component={Details}
                      />
              </Stack.Navigator>
          </NavigationContainer> 
      </AuthProvider>
    
  );
}
