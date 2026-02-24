import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, QUARTERNARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";


export const styleGlobal = StyleSheet.create({
    title:{
        color: SECONDARY_COLOR,
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingTop:70
    },
    containerBody:{
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 30
        
    },
    titleWelcome:{
        fontSize:20,
        fontWeight:'bold',
        color: PRIMARY_COLOR
    },
    text:{
        fontSize:15,
        color:PRIMARY_COLOR
    },
    input:{
        backgroundColor: QUARTERNARY_COLOR,
        paddingHorizontal: 20,
        borderRadius:10,
        fontSize:13,
        marginVertical:7
    },
    containerInput:{
        marginVertical:15,

    },
    button:{
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius:15,
    },
    buttonText:{
        textAlign: 'center',
        color: TERTIARY_COLOR,
        fontSize: 17,
        fontWeight: 'bold'
    },
    iconPassword:{
        position:'absolute',
        bottom: 15,
        right: 10
    },
    textRedirect:{
        marginTop:20,
        fontSize:16,
        color:PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})