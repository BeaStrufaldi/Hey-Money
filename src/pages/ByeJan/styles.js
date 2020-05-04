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

    input:{
        color:'#F8F8FF',
        fontSize: 20,
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 10,
    },
    title: {
        left: 7,
        fontSize: 30,
        marginBottom: 10,
        marginTop: 68,
        color: '#F8F8FF',
        fontWeight: 'bold',
    },

    textuser:{
        left: -29,
        color: '#F8F8FF',
        marginTop: -30,
    },

    texto:{
        fontSize: 16,
        color: '#F8F8FF',

    },

    plus:{
        marginTop: 0,
        left: 280,     
        color: '#F8F8FF',
    },

    user:{
        marginTop: -35,
        left: -55,
        color: '#F8F8FF',
    },

    user2:{
        marginTop: -30,
        left: 0,
        color: '#F8F8FF',
    },
})