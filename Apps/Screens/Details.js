import { View, Text, SafeAreaView, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native';

const Details = ({route}) => {
    const {uid} = route.params;
    const [name, setName] = useState('')
    const navigation = useNavigation()

    const saveDetails = async() => {
        try{
            await firestore().collection('users').doc(uid).set({
                name
            })
            navigation.navigate('AppSelection')
        }catch(error){
            console.log("error saving details", error);
        }
    }
  return (
    <SafeAreaView className='flex w-full h-[100vh]'>
        <View className='flex flex-[0.2] items-center justify-center'>
            <Text className='text-[30px]'>Enter your Details</Text>
        </View>
        <View className='flex flex-[0.6] w-full items-center justify-center'>
            <TextInput className='text-[30px] w-[70%] h-[10vh]' placeholder='Enter your name' value={name} onChangeText={setName}/>
        </View>
        <View className="flex-[0.2] flex items-center justify-start w-full pt-2"><TouchableOpacity activeOpacity={0.8} className="bg-red-500 w-[50%] h-[60%] rounded-full flex items-center justify-center" onPress={saveDetails}><Text className="text-white text-[20px]">Save Details</Text></TouchableOpacity></View>


    </SafeAreaView>
  )
}

export default Details