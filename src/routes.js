import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import ByeJan from './pages/ByeJan';

export default function Routes (){
    return(
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name= "ByeJan" component= {ByeJan}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}