import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator}from './AppTabNavigator'
import CSBMenu from './CSBMenu'
import  SettingScreen from '../screens/SettingScreen'
import MyDonationScreen from '../screens/MyDonationScreen'
export const AppDrawerNavigator=createDrawerNavigator({
Home:{
    screen:AppTabNavigator
},
MyDonations:{
 screen:MyDonationScreen
},
Setting:{
    screen:SettingScreen
},
},
{
    contentComponent:CSBMenu
},
{initialRouteName:'Home'
})