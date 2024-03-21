import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Icon from 'react-native-vector-icons/Entypo'
// import { AsyncStorage } from '@react-native-async-storage/async-storage'

const LoginScreen = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [code, setCode] = useState('')
  const [confirm, setConfirm] = useState('')

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber('+91'+ phoneNumber)
      setConfirm(confirmation)
      // AsyncStorage.setItem('isLoggedIn', JSON.stringify(true))
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
            <ScrollView contentContainerStyle='flex items-center justify-center' keyboardShouldPersistTaps='handled' className="bg-white">
              <View className='h-[100vh] flex pt-[10%]'>
                <View className="flex-[0.1] flex">
                    <View className="flex-1 flex items-center justify-center">
                      <View className="h-[100%] w-[30%] flex items-center justify-center">
                        <Image source={require('./../../assets/Images/logo.png')} resizeMode='contain' className="w-[60%] h-[60%]"/>
                      </View>
                  </View> 
                </View> 
                <View className="flex-[0.4] flex">
                    <View className="flex-1 flex items-center justify-center">
                      <View className="flex-[0.75] flex items-center justify-center w-full">
                      <Image source={require('./../../assets/Images/loginillustration.jpg')} resizeMode='contain' className="w-[100%] h-[100%]"/>
                      </View>
                      <View className="flex-[0.25] flex items-center justify-center w-full">
                        <Text className="text-[#121212] text-[30px]">World's only</Text>
                        <Text className="text-[#121212] text-[30px]">Live Instant Tutoring</Text>
                      </View>
                  </View>
                </View>
                <View className="flex-[0.4] rounded-tl-[120px] flex">
                    {!confirm ?
                  <>
                      <View className="flex-1 flex items-center justify-start">
                      <View className="flex-[0.5] flex items-center justify-end w-full">
                        <View className="flex h-[35%] flex-row items-center justify-center pl-7 rounded-[5px] bg-slate-200">
                          <Icon name='phone' color="gray" size={30}/>
                          <TextInput placeholder='Enter your Phone' keyboardType='numeric' maxLength={10} className=" w-[80%] h-[40%] pl-6 text-2xl" value={phoneNumber} onChangeText={setPhoneNumber}/>
                        </View>
                      </View>
                      <View className="flex-[0.5] flex items-center justify-start w-full pt-6"><TouchableOpacity activeOpacity={0.8} className="bg-[#FF6300] w-[80%] h-[30%] rounded-[5px] flex items-center justify-center" onPress={signInWithPhoneNumber}><Text className="text-white text-[20px]">Login</Text></TouchableOpacity></View>
                  </View>
                  </>
                  :
                  <>
                  <View className="flex-1 flex items-center justify-start">
                      <View className="flex-[0.2]"><Text className='mt-[5px] pt-6 text-[15px] text-gray-600'>Login or Sign Up</Text></View>
                      <View className="flex-[0.2] flex items-center justify-start w-full">
                        <OTPInputView pinCount={6} autoFocusOnLoad={true} onCodeChanged={setCode} keyboardType='numeric' style={{width:'80%',paddingHorizontal:30}} 
                        codeInputFieldStyle={{
                          width: 35,
                          height:45,
                          color:"#FF6300",
                          borderWidth:0,
                          borderBottomWidth:3,
                          borderBottomColor:"#111",
                        }}
                        />
                        </View>
                        <View className="flex-[0.5] flex items-center justify-start w-full pt-6"><TouchableOpacity activeOpacity={0.8} className="bg-blue-500 w-[80%] h-[30%] rounded-[5px] flex items-center justify-center" onPress={confirmCode}><Text className="text-white text-[20px]">Submit</Text></TouchableOpacity></View>
                  </View>
                  </>
                  }
                </View>
                <View className="flex-[0.1]">
                <View className="flex-1 h-[100%] flex items-center justify-center">
                  <View className="h-[100%] w-[30%] flex flex-row items-center justify-center">
                    <Text>Powered by </Text>
                    <Image source={require('./../../assets/Images/logo.png')} resizeMode='contain' className="w-[30%] h-[30%]"/>
                  </View>
                </View>
                </View>
              </View>
              
            </ScrollView>
    )
}

export default LoginScreen
