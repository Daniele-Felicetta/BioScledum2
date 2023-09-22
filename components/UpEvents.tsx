import useStore from "./datas/data";
import useRoomStore from "./datas/room";
import {View,Text,Image} from 'react-native'

const UpEvents=()=>{
    const {datas, setDatas} = useStore();
    const {roomData}= useRoomStore();
    const counterButton= datas.counter;
    
    return (
        <>
            { counterButton>=2 && counterButton<6 &&   
                <>
                    {counterButton==5 && 
                        <Text style={{color:'red',textAlign:'center', marginBottom:-100, fontSize:40, fontWeight:'bold' }}>{datas.names.player}</Text>    
                    }
                    <Image source={require('../assets/images/1.png')} style={{width:400, height:400}} />
                </>
            }
        </>
    )
}
export default UpEvents;