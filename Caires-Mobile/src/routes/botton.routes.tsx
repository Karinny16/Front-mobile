import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Perfil from '../pages/perfil';
import Home from '../pages/home';
import Control from '../pages/control';
import {Ionicons} from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Tab = createBottomTabNavigator()
export default function BottomRoutes() {
  return (
   <>
      <Tab.Navigator
      screenOptions={{
         tabBarShowLabel: false,
         tabBarStyle:{
          position: 'absolute',
          backgroundColor: 'white',
          borderTopWidth:0,

          bottom:8,
          left: 10,
          right: 3,
          elevation: 0,
          borderRadius: 6,
          height: 55,
          justifyContent: 'center'
         }
      }}>
        <Tab.Screen
        name="Control"
        component={Control}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) =>{
              if(focused){
                return <Ionicons name= "person-add-outline" size={30} color={color}/>
              }
              return <Ionicons name= "person-add" size={30} color={color}/>
          }
        }}
        />
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) =>{
              if(focused){
                return <Ionicons name= "home" size={30} color={color}/>
              }
              return <Ionicons name= "home-outline" size={30} color={color}/>
          }
        }}
        />
        <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) =>{
              if(focused){
                return <Ionicons name="person-circle" size={30} color={color}/>
              }
              return <Ionicons name= "person-circle-outline" size={30} color={color}/>
          }
        }}
        />
       
      </Tab.Navigator>
    </>
  );
}