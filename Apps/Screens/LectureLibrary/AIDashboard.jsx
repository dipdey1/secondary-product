import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Videos from './Screens/Videos'
import Statistics from './Screens/Statistics'
import Assignments from './Screens/Assignments'
import Playlists from './Screens/Playllists'
import Profile from './Screens/Profile'

const Tab = createBottomTabNavigator()

const CustomTabBarButton = () => {
  <TouchableOpacity
    style={{
      top:-30,
      justifyContent:'center',
      alignItems:'center',
      elevation:8,
    }}
  >
    <View style={{height:70, width:70, borderRadius:35, backgroundColor:'#FF6300'}}>
      <Icon name='videos' size={30} color='#121212'/>
    </View>
  </TouchableOpacity>
}

// const videos = 'videos'
// const statistics = 'statistics'
// const assignments = 'assignments'
// const profile = 'profile'
// const playlists = 'playlists'

const AIDashboard = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        title:'',
        headerShown:false,
        tabBarStyle: {padding:10, height:90,position:'absolute', bottom:5, left:20, right:20, elevation:3, backgroundColor:'#FFFFFF', borderRadius:12},
      }
      }
      >
      <Tab.Screen name='playlists' component={Playlists} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center', justifyContent:'center', top:5, gap:5, height: 100, width: 100}}>
              <Image source={require('./../../../assets/Images/playlistlogo.jpeg')} resizeMode='contain' style={{width:35, height:35}}/>
              <Text className="text-[15px]">Playlist</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name='stats' component={Statistics}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center', top:5, gap:5}}>
            <Image source={require('./../../../assets/Images/statistics.jpg')} resizeMode='contain' style={{width:35, height:35}}/>
            <Text className="text-[15px]">Statistics</Text>
          </View>
        )
      }}
      />
      <Tab.Screen name='videos' component={Videos}/>
      <Tab.Screen name='assignments' component={Assignments}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center', top:5, gap:5}}>
            <Image source={require('./../../../assets/Images/Assignment.jpg')} resizeMode='contain' style={{width:35, height:35}}/>
            <Text className="text-[15px]">Assignments</Text>
          </View>
        )
      }}/>
      <Tab.Screen name='settings' component={Profile}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:'center', justifyContent:'center', top:5, gap:5}}>
            <Image source={require('./../../../assets/Images/playlistlogo.jpeg')} resizeMode='contain' style={{width:35, height:35}}/>
            <Text className="text-[15px]">Profile</Text>
          </View>
        )
      }}
      />
    </Tab.Navigator>
    
  )
}

export default AIDashboard

{/* <Tab.Navigator
initialRouteName={videos}
screenOptions={({route}) => ({
  tabBarActiveTintColor:'#FF6300',
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