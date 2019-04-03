import React from "react";
import { View, Text, Button, Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import LeftSideBar from "../sidebar/leftsidebar";
import Login from "../Components/login/login"
const  WIDTH = Dimensions.get('window').width;
const LeftDrawer = createDrawerNavigator(
  {
    Login: { screen: Login }
  },
  {
    initialRouteName: "Login",
    drawerWidth:WIDTH*0.80,
    drawerPosition:'left',
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <LeftSideBar {...props} />,
    drawerOpenRoute: 'LeftSideMenu',
    drawerCloseRoute: 'LeftSideMenuClose',
    drawerToggleRoute: 'LeftSideMenuToggle',
  }
);

export default LeftDrawer;
