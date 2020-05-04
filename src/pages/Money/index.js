import React, {Component, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {Image, Text, View, TouchableHighlight} from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';


export default class Money extends Component {
   render(){
    

    const onPress = () => {
      };
    return(
        <View style={styles.container}>
            <View style={styles.header}>   
                <Feather name="arrow-left" size={30} color="#F8F8FF" onPress={onPress}/>
                <Text style={styles.corfonte}>Olá, Nathália!</Text>
                <Feather name="user" size={20} style={styles.user} />
                <Text style={styles.title}>Hello Money!</Text>
            </View>
        
        <TouchableHighlight style={styles.button} onPress={onPress}>  
        <Text style={styles.sbutton}> Janeiro </Text>
        </TouchableHighlight>
        <Feather name="arrow-right" size={20} style={styles.icone} />   

        <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.sbutton}> Fevereiro </Text>
        </TouchableHighlight>  
        <Feather name="arrow-right" size={20} style={styles.icone} />   
               
        <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.sbutton}> Março </Text>
        </TouchableHighlight>    
        <Feather name="arrow-right" size={20} style={styles.icone} /> 

            
        <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.sbutton}> Abril </Text>
        </TouchableHighlight>    
        <Feather name="arrow-right" size={20} style={styles.icone} />

        <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.sbutton}> Maio </Text>
        </TouchableHighlight>    
        <Feather name="arrow-right" size={20} style={styles.icone} />

        <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.sbutton}> Junho </Text>
        </TouchableHighlight>    
        <Feather name="arrow-right" size={20} style={styles.icone} />

        <Feather name="message-square" size={40} style={styles.quest} />
        <Feather name="menu" size={40} style={styles.menu} />

        </View>    
    );    
    
    
   };
}

