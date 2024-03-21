import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Apps/Screens/LoginScreen';
import Profile from './Apps/Screens/DoubtApp/DoubtAppScreens/Profile';
import AppSelectionComponent from './Apps/Screens/AppSelectionComponent';
import Details from './Apps/Screens/Details';
import Dashboard from './Apps/Screens/DoubtApp/Dashboard';
// import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';
import AIDashboard from './Apps/Screens/LectureLibrary/AIDashboard';

const Stack = createNativeStackNavigator();

export default function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState('')
  // const getData = async () => {
  //   let data = await AsyncStorage.getData('isLoggedIn')
  //   setIsLoggedIn(data)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])
  
  
  return (
    // <>
    // {isLoggedIn ?
          // <NavigationContainer>
          //   <StatusBar style="dark"/>
          //     <Stack.Navigator
          //         screenOptions={{
          //           headerShown: false
          //         }}
          //         >
          //       <Stack.Screen
          //             name="Login"
          //             component={LoginScreen}
          //             options={{title: ''}}
          //             />
          //     </Stack.Navigator>
          // </NavigationContainer>
          // : 
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
                    name="AppSelectionComponent"
                    component={AppSelectionComponent}
                    options={{title: ''}}
                    />
              <Stack.Screen
                    name="Profile"
                    component={Profile}
                    />
              <Stack.Screen
                    name="doubtDashboard"
                    component={Dashboard}
                    />
              <Stack.Screen
                    name="AiDashboard"
                    component={AIDashboard}
                    />
              <Stack.Screen
                    name="Details"
                    component={Details}
                    />
            </Stack.Navigator>
        </NavigationContainer>
      // }
      //   </>
    
  );
}
