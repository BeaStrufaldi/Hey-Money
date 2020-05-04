import React, {Component, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {Text, View, TouchableHighlight} from 'react-native';


import styles from './styles';

export default class Home extends Component {
   render(){
    

    const onPress = () => {
        
      };
    return(
        <View style={styles.container}>
            <View style={styles.header}>   
                <Feather name="arrow-left" size={30} style={styles.user2} onPress={onPress}/>
                <Text style={styles.textuser}>Olá, Nathália!</Text>
                <Feather name="user" size={20} style={styles.user} />                
                <Text style={styles.title}>Make it Happen!</Text>

            </View>

            <Text style={styles.texto}>Vamos criar novas metas!</Text>

            
           
            <Text style={styles.title2}>Suas Metas</Text>
            <Feather name="edit" size={40} style={styles.plus} />
        
            

        <TouchableHighlight style={styles.button} onPress={onPress}>  
        <Text style={styles.sbutton}> Faculdade </Text>
        </TouchableHighlight>
        <Feather name="arrow-right" size={20} style={styles.icone} />   


        
        <Feather name="message-square" size={50} style={styles.quest} />
        <Feather name="menu" size={50} style={styles.menu} />

        
        </View>    
    );    
    
    
   };
}

