import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, QUARTERNARY_COLOR, QUINARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";


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
        paddingVertical: 40
        
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
    },
    containerCard:{
        //flexDirection: 'row',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: "#cfcfcf",
        borderRadius: 3,
        borderStyle: 'solid',
        margin: 7,
        shadowColor: '#000',
        shadowOpacity:0.25,
        shadowRadius: 2.65,
        elevation:2

    },
    titleCard:{
        fontWeight: 'bold',
        fontSize: 16,
        color: PRIMARY_COLOR
    },
    textPrice:{
        textAlign:'center',
        color: "#eeecf1ff"
    },
    imageCard:{
        width: 80,
        height: 80
    },
    iconCard: {
        flex:1,
        alignItems: 'flex-end',
        marginTop:2
    },
    containerModal:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    bodyModal:{
        padding:20,
        backgroundColor: QUARTERNARY_COLOR,
        borderRadius: 10
    },
    headerModal:{
        flexDirection: 'row',
        borderBottomColor: '#352a75ff',
        borderBottomWidth: 1,
        padding: 10
    },
    titleModal:{
        fontWeight: 'bold',
        fontSize: 20
    },
    imageModal: {
        height:200,
        width:200
    },
    containerQuantity:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonQuantity:{
        backgroundColor: SECONDARY_COLOR,
        height:50, 
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems:'center',
        margin: 15,
    },
    buttonQuantifyText:{
        color: PRIMARY_COLOR,
        fontSize:20,
        fontWeight:'bold'
    },
    textTotalPrice:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textStock:{
        fontSize: 18,
        color: '#820707',
        fontWeight: 'bold',
        textAlign:'center'
    },
    headerHome:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconHome:{
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingHorizontal: 30
    },
    textIconCart:{
        backgroundColor:QUINARY_COLOR,
        color: PRIMARY_COLOR,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 13
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerDescription: {
        flexDirection:'row',
    },
    headerTextTable:{
        fontWeight: 'bold',
        fontSize: 15,
        color: TERTIARY_COLOR
    },
    containerTotalPay:{
        alignItems: 'flex-end',
        marginVertical: 15
    },
    textTotalPay:{
        fontWeight: 'bold',
        fontSize: 18,
        color: TERTIARY_COLOR
    }
})