import { View, Text, Image, TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native';

const Details = ({route}) => {
    const {uid} = route.params;
    const [name, setName] = useState('')
    const [grade, setGrade] = useState('')
    const [targetexam, setTargetExam] = useState('')
    const navigation = useNavigation()

    const saveDetails = async() => {
        try{
            await firestore().collection('users').doc(uid).set({
                name: name,
                grade: grade,
                targetexam: targetexam,
            })
            navigation.navigate('AppSelectionComponent')
        }catch(error){
            console.log("error saving details", error);
        }
    }
  return (
    <ScrollView contentContainerStyle='flex h-[100vh] items-center justify-center' keyboardShouldPersistTaps='handled' className="bg-white">
        <View className='h-[100vh] flex pt-[10%]'>
            <View className="flex-[0.4] flex">
                        <View className="flex-1 flex items-center justify-center">
                        <View className="h-[100%] w-[30%] flex items-center justify-center">
                            <View className="flex-[0.3] flex items-center justify-center w-full">
                                <Image source={require('./../../assets/Images/logo.png')} resizeMode='contain' className="w-[60%] h-[60%]"/>
                            </View>
                            <View className="flex-[0.7] flex items-center justify-center w-full">
                                <Image source={require('./../../assets/Images/loginillustration.jpg')} resizeMode='contain' className="w-[300%] h-[150%]"/>
                            </View>
                        </View>
                    </View> 
            </View>
            <View className='flex flex-[0.1] items-center justify-end'>
                <Text className='text-[30px]'>Enter your Details</Text>
            </View>
            <View className='flex flex-[0.4] w-full items-center justify-center pt-10'>
                <TextInput className='text-[25px] w-[90%] h-[6vh] rounded-[8px] pl-8 mb-8 bg-slate-300' style={{elevation:3}} placeholder='Name'  value={name} onChangeText={setName}/>
                <TextInput className='text-[25px] w-[90%] h-[6vh] rounded-[8px] pl-8 mb-8 bg-slate-300' keyboardType='numeric' maxLength={2} style={{elevation:3}} placeholder='Grade (1-13) 13 for dropper' value={grade} onChangeText={setGrade}/>
                <TextInput className='text-[25px] w-[90%] h-[6vh] rounded-[8px] pl-8 mb-8 bg-slate-300' style={{elevation:3}} placeholder='Target Exam' value={targetexam} onChangeText={setTargetExam}/>
            </View>
            <View className="flex-[0.1] flex items-center justify-start w-full pt-2"><TouchableOpacity activeOpacity={0.8} className="bg-[#FF6300] w-[80%] h-[60%] rounded-[8px] flex items-center justify-center" onPress={saveDetails}><Text className="text-white text-[20px]">Save Details</Text></TouchableOpacity></View>
    </View>

    </ScrollView>
  )
}

export default Details