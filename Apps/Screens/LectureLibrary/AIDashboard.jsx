import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import Videos from './Screens/Videos'
import Statistics from './Screens/Statistics'
import Assignments from './Screens/Assignments'
import Playlists from './Screens/Playllists'
import Profile from './Screens/Profile'
import { StatusBar } from 'expo-status-bar'

const Tab = createBottomTabNavigator()

const AIDashboard = ({navigation}) => {

  return (
    <>
    <StatusBar style="light"/>

    <Tab.Navigator
    initialRouteName='videos'
      screenOptions={{
        title:'',
        headerShown:false,
        tabBarStyle: {height:80,position:'absolute', backgroundColor:'#02001A'},
      }
      }
      >
      <Tab.Screen name='playlists' component={Playlists} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center', justifyContent:'center', height: '100%', width:'100%', backgroundColor: focused ?'#FF693D' : "#02001A", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
              <Icon1 name='library-sharp' size={25} color={focused? "#02001A" : 'white'}/>
            </View>
          )
        }}
      />
      <Tab.Screen name='stats' component={Statistics}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center', height: '100%', width:'100%', backgroundColor: focused ?'#FF693D' : "#02001A", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
            <Icon2 name='query-stats' size={25} color={focused? "#02001A" : 'white'}/>
          </View>
        )
      }}
      />
      <Tab.Screen name='videos' component={Videos}
      options={{
        tabBarButton: ({focused}) => (
          <TouchableOpacity
          style={{
            top:-15,
            justifyContent:'center',
            alignItems:'center',
            elevation:8,
            backgroundColor: '#FFF',
            borderRadius: 8
          }}
          className=''
          activeOpacity={1}
          onPress={() => navigation.navigate('videos')}
        >
          <View className='flex items-center justify-center' style={{height:50, width:50}}>
            <Icon name='video-camera' size={25} color={'#FF693D'}/>
          </View>
        </TouchableOpacity>
          )
      }}/>
      <Tab.Screen name='assignments' component={Assignments}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center', height: '100%', width:'100%', backgroundColor: focused ?'#FF693D' : "#02001A", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
            <Icon2 name='assignment-add' size={25} color={focused? "#02001A" : 'white'}/> 
          </View>
        )
      }}/>
      <Tab.Screen name='settings' component={Profile}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center', height: '100%', width:'100%', backgroundColor: focused ?'#FF693D' : "#02001A", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
            <Icon3 name='user-graduate' size={25} color={focused? "#02001A" : 'white'}/> 
          </View>
        )
      }}
      />
    </Tab.Navigator>
    </>
  )
}

export default AIDashboard

{/* <Tab.Navigator
initialRouteName={videos}
screenOptions={({route}) => ({
  tabBarActiveTintColor:'#FF693D',
  tabBarInactiveTintColor:'#121212',
  tabBarStyle: {padding:10, height:90,position:'absolute', bottom:25, left:20, right:20, elevation:3, backgroundColor:'#F6f6f6', borderRadius:12},
  title:'',
  headerShown: false,
  tabBarIcon: ({focused, color}) => {
    let iconName;
    let rn = route.name
    if(rn === statistics){
      iconName = focused ?  'stats-chart' : 'stats-chart-outline'
      return <Icon2 name={iconName} size={30} color={color}/>
    } else if(rn === assignments){
      iconName = focused ?  'assignment' : 'assignment-add'
      return <Icon1 name={iconName} size={30} color={color}/>
    } else if(rn === profile){
      iconName = focused ?  'settings' : 'settings-outline'
      return <Icon2 name={iconName} size={30} color={color}/>
    } else if(rn === playlists){
      iconName = focused ?  'playlist-star' : 'playlist-play'
      return <Icon3 name={iconName} size={30} color={color}/>
    }
  },
  
})}

>
  <Tab.Screen name={statistics} component={Statistics}/>
  <Tab.Screen name={assignments} component={Assignments}/>
  <Tab.Screen name={videos} component={Videos}
  options={{
    tabBarButton: (props) => (
      <CustomTabBarButton {...props}/>
    )
  }}
  />
  <Tab.Screen name={playlists} component={Playlists}/>
  <Tab.Screen name={profile} component={Profile}/>
</Tab.Navigator> */}