import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { StatusBar } from 'expo-status-bar'

const Videos = () => {
  return (
    <>
    <StatusBar style="dark"/>
    <View className="bg-white flex">
      <View className='h-[15%] flex flex-row'>
        <View className='h-full w-[70%] flex items-center justify-end'>
          <View className='h-[50%] w-full justify-end pl-2'>
            <Image source={require('./../../../../assets/Images/logo.png')} resizeMode='contain' className="w-[30%] h-[30%] mb-2"/>
          </View>
          <View className="flex flex-row h-[50%] w-full items-center pl-2">
            <Text className='text-[#01202B] text-[20px] ml-2 font-semibold font-regular mb-2'>Hello Dip,</Text>
            <Text className='text-[#01202B] text-[20px] ml-1 font-regular mb-2'>here's your recent watchlist</Text>
          </View>
        </View>
        <View className="h-[100%] w-[30%] flex items-center justify-center">
          <TouchableOpacity>
            <Icon name='menu' size={40}/>
          </TouchableOpacity>
        </View> 
      </View>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled' className="w-auto h-[76%]">
          <View className='flex w-full ml-4 h-[50vh] mt-2'>
            <View className='flex flex-[0.05] justify-start ml-2'>
              <Text className='text-[25px] font-semibold'>Continue Watching</Text>
            </View>
            <ScrollView horizontal contentContainerStyle={{display:'flex', flexDirection:'row'}} className='flex-[0.7] p-2' showsHorizontalScrollIndicator={false}>
              <View style={styles.viewContainer} className='flex items-center justify-start w-[65vw] rounded-xl bg-slate-300'>
                <View className='bg-slate-50 w-[95%] h-[12%] flex items-center justify-center rounded-xl mt-2'><Text className='text-[25px] font-regular'>Structure of an Atom</Text></View>
                <View className=' w-[95%] h-[80%] flex flex-row items-center justify-center rounded-xl mt-2'>
                  <View className='flex-[0.6] h-full flex bg-slate-50 rounded-xl items-center justify-center'>
                    <View className='flex-[0.3] w-full bg-transparent flex-row border-b-[0.5px] border-slate-400 pb-2 pt-2'>
                      <View className='flex flex-[0.4] bg-slate-400 items-center justify-center rounded-full'>
                        <Image source={require('./../../../../assets/Images/teacher1.jpeg')} resizeMode='cover' className="w-[80%] h-[80%] rounded-full"/>
                      </View>
                      <View className='flex flex-[0.6] items-center justify-center'>
                        <Text className='text-[15px] font-medium'>Abhinav Srivastava</Text>
                      </View>
                    </View>
                    <View className='flex-[0.7] w-full items-start justify-evenly'>
                      <View className='flex-[0.2] w-full flex items-center justify-center'>
                        <Text className='text-[15px] font-medium ml-1 mr-1'>Topics:</Text>
                      </View>
                      <View className='flex flex-[0.8] items-start justify-start'>
                        <Text className='text-[15px] font-medium ml-1 mr-1'>
                        Introduction to Atom Subatomic Particles, Special Terms, Thomson's Model of an Atom.
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View className='flex-[0.4] h-full rounded-xl ml-4 flex items-center justify-center'>
                    <View className='flex items-center justify-center flex-[0.6] bg-slate-800 w-full rounded-xl'>
                        <Text className='text-[12px] text-[#01202B] font-bold bg-green-400 p-3 rounded-xl mb-2'>Chemistry</Text>
                        <Text className='text-[12px] text-[#01202B] font-bold bg-blue-400 p-3 rounded-xl mb-2'>Session No. 1</Text>
                        <Text className='text-[12px] text-[#01202B] font-bold bg-yellow-400 p-3 rounded-xl'>English</Text>
                    </View>
                    <View className='flex items-center justify-center w-full mt-3 flex-[0.4] bg-[#FF6930] rounded-xl' style={{elevation:3}}>
                      <TouchableOpacity className='w-[100%] h-[100%] flex items-center justify-center rounded-xl'>
                        <Text className='text-[20px] text-[#FFF] font-bold'>Watch Now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          
      </ScrollView>
    </View>
    </>
  )
}

export default Videos

const styles = StyleSheet.create({
  container: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewContainer: {
  }
});


// h-[100%] w-[70%] flex flex-row items-end justify-center bg-zinc-400
