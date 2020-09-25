//import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Settings = () => {
    const navigation = useNavigation();
    const imageIcon = require('../images/profile.png');
    return (

      <Image 
        style={styles.image}
        source={imageIcon} 
      />
    );
}


const styles = {
    image: {
        width: 40,
        height: 40,
        backgroundColor: '#fff'
      },
    color: "blue"
}

export default Settings;