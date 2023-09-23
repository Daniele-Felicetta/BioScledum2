import preStyle from "./prestyle"
const patStyle:any={

    containerCenter: {
        flex: 1,
        ...preStyle.centerize
    },
    containerBottom:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        ...preStyle.vertical
    },
    containerOrizontal:{
        flex: 1,
        ...preStyle.centerize,
        ...preStyle.orizontal,
        ...preStyle.se,
    },
    containerSpaceVertical:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
        
    }, 
    button:{
        opacity: 0.8,
        padding: 10,
        borderRadius: 5,
        width:"30%",
        height:"50"
    },
}
export default patStyle
