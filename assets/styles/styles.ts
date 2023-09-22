import preStyle from './prestyle';
import patStyle from './patstyle';
import { ViewStyle } from 'react-native';


const Gstyles:any = {
    gameContainer: {
        ...patStyle.containerCenter,
        ...preStyle.sb,
        width: "100%",
        height:"100%",
        backgroundColor: 'rgb(50,50,50)'
    },
    
    renderContainer:{
        flex:2,
        flexDirection: 'column'
    },
    textContainer: {
        backgroundColor: "rgba(225,170,50,0.5)",
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 5, 
        width:"98%",
        height:20,
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    text:{
        marginTop:"3%",
        height:"15%",
        textAlign: 'center',
        fontWeight:'bold',
    },
    buttonContainer:{
        ...patStyle.containerOrizontal,
        width: "100%",
    },
    button:{
        opacity: 0.8,
        padding: 10,
        borderRadius: 5,
        width:"30%",
        height:50
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInput:{
        marginTop:"2%",
        marginBottom:"9%",
        height:"25%",
        width: "40%",
        textAlign: 'center',
        borderWidth: 2,
        borderRadius:5,
        padding: 10
    },
    textTitle:{
        marginTop:"3%",
        height:"20%",
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 30
    }
  
}
export default Gstyles;