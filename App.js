import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//bring all screens
import Home from './screens/Home'; 
import Edit from './screens/Edit'; 
import Add from './screens/Add'; 

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* this "Home" may seem like a normal string but its the same compoment that we imported */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75'
            },
            title: 'netFlix App Lite',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2'
            }
          }}
        >

        </Stack.Screen>

        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75'
            },
            title: 'netFlix App Lite',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2'
            }
          }}
        >

        </Stack.Screen>

        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75'
            },
            title: 'netFlix App Lite',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2'
            }
          }}
        >

        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
});

export default App;
