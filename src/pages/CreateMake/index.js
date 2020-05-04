import React, {Component, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {Text, View, textAreaContainer} from 'react-native';


import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

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

            <TextInput style={styles.input}>Meta: </TextInput>
            <TextInput style={styles.input}>Início: </TextInput>
            <TextInput style={styles.input}>Fim: </TextInput>
            <TextInput style={styles.input}>Recompensa: </TextInput>            
            <TextInput style={styles.input} multiline={true} >Pequenas Metas: </TextInput>           
            <TextInput style={styles.input} multiline={true}>Como fazer: </TextInput>
           
            <Feather name="check" size={40} style={styles.plus} />
        
        </View>    
    );    
    
    
   };
}