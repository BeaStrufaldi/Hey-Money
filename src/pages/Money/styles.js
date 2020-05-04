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
        marginBottom: 5,
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
        left: 94,     
        color: '#F8F8FF',
    },
    user:{
        left: -2,
        marginTop: -5,
        color: '#F8F8FF',
    },
    quest:{
        left: 280,
        marginTop: 0,
        color:'#F8F8FF',

    },
    menu:{
        left: 0,
        marginTop: 0,
        color:'#F8F8FF',
    },
    corfonte:{
        color: '#F8F8FF',
    },

})