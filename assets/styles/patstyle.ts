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
        
    }
}
export default patStyle
