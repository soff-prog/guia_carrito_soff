import { StyleSheet } from "react-native";
import { CUARTERNARY_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

export const stylesGlobal = StyleSheet.create({
    title:{
        color: SECONDARY_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 60
    },
    containerBody:{
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    titleWelcome:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: CUARTERNARY_COLOR,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 7
    },
    containerInput:{
        marginVertical: 15
    },
    button:{
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText:{
        textAlign:'center',
        color: SECONDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold'
    },
    iconPasswprd:{
        position: 'absolute',
        right: 10,
        bottom: 15
    },
    registrateText:{
        marginTop: 20,
        fontSize: 16,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
