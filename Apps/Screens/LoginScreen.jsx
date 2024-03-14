import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { useWarmUpBrowser } from "../hooks/WarmUpBrowser.tsx";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';


WebBrowser.maybeCompleteAuthSession();


const LoginScreen = ({navigation}) => {

    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

    return (
            <ScrollView contentContainerStyle='flex items-center justify-center' className='bg-white w-auto' keyboardShouldPersistTaps='handled'>
                    <View className="bg-white h-[50vh] items-center rounded-b-[70px] border-b-[1px] border-l-[1px] border-r-[1px] border-gray-200">
                            <View className="flex w-full mt-[120px] items-center justify-center">
                                <Text className='text-[#FF6300] text-[100px]'>Hi!</Text> 
                                <Text className='text-black text-[20px] mt-6'>Welcome to</Text> 
                            </View>
                            <View className="flex w-full mt-[10px] items-center justify-center">
                                <Image source={require('./../../assets/Images/logo.png')} className="w-[150px] h-[40px] mt-6"/>
                                <Text className='text-black text-[50px] font-medium mt-3 ml-3'>InstaSolve</Text>    
                            </View>        
                    </View> 
                        
                    <View className="flex h-[50vh] items-center">
                        <View className='flex items-center mt-4 h-[100px] w-[90%] border-b-[1px] border-gray-200'>
                            <Text className='text-[30px] mt-1'>World's only</Text>
                            <Text className='text-[30px]'>Live Instant-Tutoring</Text>
                        </View>
                        <View className=" w-full items-center justify-center mt-2">
                            <Text className='text-[15px] text-gray mt-[10px]'>Login or Sign Up</Text>
                            {/* <TextInput placeholder='Enter your Phone' keyboardType='phone-pad' caretHidden maxLength={10} className='h-[50px] w-[320px] mt-[16px] rounded-[8px] pl-6 text-[20px] border-[1px] border-gray-200'
                                value={Phone}
                                onChange={(number) => setPhone(number)}
                            /> */}
                            <TouchableOpacity className="bg-blue-600 rounded-full mt-[25px] h-[5vh] w-[250px] flex items-center justify-center"
                                onPress={onPress}
                            >
                                <Text className='text-[15px] text-white'>Continue with Google</Text>
                            </TouchableOpacity>
                        </View>
                        <View className = "h-[100px] w-full mt-[15px] flex items-center">
                            <Text className="text-[15px] font-bold"></Text>
                        </View>
                    </View>
            </ScrollView>

    )
}

export default LoginScreen
