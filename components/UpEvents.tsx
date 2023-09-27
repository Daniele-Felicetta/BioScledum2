import useStore from "./datas/data";
import roomData from "./datas/room";
import {View,Text,Image} from 'react-native'

const UpEvents=()=>{
    const {datas, setDatas} = useStore();
    const counter= datas.counter;
    
    return (
        <>
            { counter>=2 && counter<6 &&   
                <>
                    {counter==5 && 
                        <Text style={{color:'red',textAlign:'center', fontSize:40, fontWeight:'bold' }}>{datas.playerName}</Text>    
                    }
                    <Image source={require('../assets/images/player.png')} style={{width:300, height:300}} />
                </>
            }
        </>
    )
}
export default UpEvents;