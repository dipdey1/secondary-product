import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import auth from '@react-native-firebase/auth'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import { AsyncStorage } from '@react-native-async-storage/async-storage'


const AppSelectionComponent = () => {
    const navigation = useNavigation()
    const handleLogOut = async () => {
        try {
            await auth().signOut();
            // AsyncStorage.setItem('isLoggedIn', '')
            navigation.reset({
            index: 0,
            routes: [{name : 'Login'}],
        })
        } catch (error) {
            console.log('error during logout', error);
        } 
    }

  return (
    <>
    <SafeAreaView className="flex h-full bg-white">
        <View className="flex-[0.15] flex-row w-full">
          <View className="flex-1 h-[100%] flex items-center justify-center">
            <View className="h-[100%] w-[30%] flex items-center justify-center">
              <Image source={require('./../../assets/Images/logo.png')} resizeMode='contain' className="w-[60%] h-[60%]"/>
            </View>
          </View>
        </View>
        <View className="flex-[0.25] flex items-center justify-center w-full">
          <TouchableOpacity className=" bg-white w-[50%] h-[85%] rounded-md flex items-center justify-center" activeOpacity={0.9} style={{elevation: 7}} onPress={() => {}}>
            <Image source={require('./../../assets/Images/Pedagogy-for-PC.png')} resizeMode='contain' className="w-[80%] h-[70%]" />
            <Text className="text-[18px] font-bold">Pedagogy</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-[0.25] flex items-center justify-center w-full">
        <TouchableOpacity className=" bg-white w-[50%] h-[85%] rounded-md flex items-center justify-center" activeOpacity={0.9} style={{elevation: 7}} onPress={() => navigation.navigate('AiDashboard')}>
            <Image source={require('./../../assets/Images/lectureLibrary.jpg')} resizeMode='contain' className="w-[40%] h-[70%]" />
            <Text className="text-[18px] font-bold">Lecture Library</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-[0.25] flex items-center justify-center w-full">
        <TouchableOpacity className=" bg-white w-[50%] h-[85%] rounded-md flex items-center justify-center" activeOpacity={0.9} style={{elevation: 7}} onPress={() => navigation.navigate('doubtDashboard')}>
            <Image source={require('./../../assets/Images/instasolve.jpeg')} resizeMode='contain' className="w-[100%] h-[100%]" />
          </TouchableOpacity>
        </View>
        <View className="flex-[0.1] flex items-center w-full">
          <View className="flex-1 h-[100%] flex justify-end">
            <View className="h-[100%] w-[30%] flex flex-row items-center justify-center">
              <Text>Powered by </Text>
              <Image source={require('./../../assets/Images/logo.png')} resizeMode='contain' className="w-[30%] h-[30%]"/>
            </View>
          </View>
        </View>
    </SafeAreaView>
    </>
  )
}

export default AppSelectionComponent