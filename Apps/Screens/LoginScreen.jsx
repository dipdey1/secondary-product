import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore'

const LoginScreen = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [code, setCode] = useState('')
  const [confirm, setConfirm] = useState('')

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber('+91'+phoneNumber)
      setConfirm(confirmation)
    } catch (error) {
        console.log("error sending code: ", error)
    }
  }

  const confirmCode = async () => {
    try {
      const userCredentials = await confirm.confirm(code)
      const user = userCredentials.user;

      const userDocument = await firestore().collection("users").doc(user.uid).get()
      if(userDocument.exists){
        navigation.navigate('AppSelectionComponent')
      }else{
        navigation.navigate('Details', {uid: user.uid})
      }

    } catch (error) {
      
    }
  }

  return (
            <ScrollView contentContainerStyle='flex items-center justify-center' keyboardShouldPersistTaps='handled' className="bg-red-400s">
              <View className='bg-white h-[100vh] flex pt-[10%]'>
                <View className="flex-[0.1] flex">
                    <View className="flex-1 flex items-center justify-center">
                      <View className="h-[100%] w-[30%] flex items-center justify-center">
                        <Image source={require('./../../assets/Images/companyLogo.jpg')} resizeMode='contain' className="w-[60%] h-[60%]"/>
                      </View>
                  </View> 
                </View> 
                <View className="flex-[0.4] flex">
                    <View className="flex-1 flex items-center justify-center">
                      <View className="flex-[0.3] flex items-center justify-end w-full">
                        <Text className="text-[#121212] text-[50px]">Hi!</Text>
                      </View>
                      <View className="flex-[0.2] flex items-center justify-center w-full">
                        <Text className="text-[#121212] text-[20px]">Welcome To</Text>
                      </View>
                      <View className="flex-[0.25] flex items-center justify-center w-full">
                        <Text className="text-[#FF6300] text-[70px]">WhiteLabel</Text>
                      </View>
                      <View className="flex-[0.25] flex items-center justify-start w-full">
                        <Text className="text-blue-500 text-[20px]">Embrace the future of learning!</Text>
                      </View>
                  </View>
                </View>
                <View className="flex-[0.4] flex border-t-[1px] border-solid border-t-gray-300">
                    {!confirm ?
                  <>
                      <View className="flex-1 flex items-center justify-start">
                      <View className="flex-[0.2]"><Text className='mt-[5px] pt-6 text-[15px] text-gray-600'>Login or Sign Up</Text></View>
                      <View className="flex-[0.2] flex items-center justify-start w-full"><TextInput placeholder='Enter your Phone' keyboardType='numeric' maxLength={10} className="bg-slate-100 w-[80%] h-[80%] rounded-full pl-6 text-2xl" value={phoneNumber} onChangeText={setPhoneNumber}/></View>
                      <View className="flex-[0.2] flex items-center justify-start w-full pt-2"><TouchableOpacity activeOpacity={0.8} className="bg-blue-500 w-[50%] h-[60%] rounded-full flex items-center justify-center" onPress={signInWithPhoneNumber}><Text className="text-white text-[20px]">Login</Text></TouchableOpacity></View>
                  </View>
                  </>
                  :
                  <>
                  <View className="flex-1 flex items-center justify-start">
                      <View className="flex-[0.2]"><Text className='mt-[5px] pt-6 text-[15px] text-gray-600'>Login or Sign Up</Text></View>
                      <View className="flex-[0.2] flex items-center justify-start w-full"><TextInput placeholder='Enter OTP' keyboardType='numeric' maxLength={10} className="bg-slate-100 w-[80%] h-[80%] rounded-full pl-6 text-2xl" value={code} onChangeText={setCode}/></View>
                      <View className="flex-[0.2] flex items-center justify-start w-full pt-2"><TouchableOpacity activeOpacity={0.8} className="bg-red-500 w-[50%] h-[60%] rounded-full flex items-center justify-center" onPress={confirmCode}><Text className="text-white text-[20px]">Enter OTP</Text></TouchableOpacity></View>
                  </View>
                  </>
                  }
                </View>
                <View className="flex-[0.1] flex">
                <View className="flex-1 h-[100%] flex items-center justify-center">
                  <View className="h-[100%] w-[30%] flex flex-row items-center justify-center">
                    <Text>Powered by</Text>
                    <Image source={require('./../../assets/Images/logo.png')} resizeMode='contain' className="w-[30%] h-[30%]"/>
                  </View>
                </View>
                </View>
              </View>
              
            </ScrollView>
    )
}

export default LoginScreen
