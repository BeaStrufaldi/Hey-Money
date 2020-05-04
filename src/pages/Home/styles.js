import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 24,
        backgroundColor: '#5A6ACD',
        color: '#F8F8FF',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#F8F8FF',
        fontWeight: 'bold',
    },
    lista:{
        fontSize: 30,
        color: '#F8F8FF',
        fontWeight: 'bold',
        marginBottom: 16,
        
    },
    sbutton:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F8F8FF',
    },
    icone:{
        left: 150,     
        color: '#F8F8FF',
    },
    user:{
        marginTop: -5,
        left: -8,
        color: '#F8F8FF',
    },
    user2:{
        marginTop: -10,
        left: 0,
        color: '#F8F8FF',
    },
    quest:{
        left: 250,
        marginTop: 80,
        color:'#F8F8FF',
        },

    menu:{
        left: 0,
        marginTop: 60,
        color:'#F8F8FF',
    },

    corfonte:{
        color: '#F8F8FF',
    },

})