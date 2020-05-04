import React, {Component, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {Image, Text, View, TouchableHighlight} from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default class Home extends Component {
   render(){
    

    const onPress = () => {
        
      };
    return(
        <View style={styles.container}>
            <View style={styles.header}>   
                <Feather name="home" size={30} style={styles.user2} /> 
                <Text style={styles.corfonte}>Olá, Nathália!</Text>
                <Feather name="user" size={20} style={styles.user} />                
                <Text style={styles.title}>Bem Vinda!</Text>

            </View>
        
        <TouchableHighlight style={styles.button} onPress={onPress}>  
        <Text style={styles.sbutton}> Hello Money </Text>
        </TouchableHighlight>
        <Feather name="arrow-right" size={20} style={styles.icone} />   

        <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.sbutton}> Bye Bye Money </Text>
        </TouchableHighlight>  
        <Feather name="arrow-right" size={20} style={styles.icone} />   
               
        <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.sbutton}> Make It Happen </Text>
        </TouchableHighlight>    
        <Feather name="arrow-right" size={20} style={styles.icone} /> 

            
        <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.sbutton}> Whishlist </Text>
        </TouchableHighlight>    
        <Feather name="arrow-right" size={20} style={styles.icone} />


        <Feather name="message-square" size={50} style={styles.quest} />
        <Feather name="menu" size={50} style={styles.menu} />

        
        </View>    
    );    
    
    
   };
}

