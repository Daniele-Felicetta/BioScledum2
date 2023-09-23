import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import {useState,useRef} from 'react';
import useStore from "./datas/data";
import useRoomStore from "./datas/room";
import Gstyles from "../assets/styles/styles";
import Button from "./Buttons/Button";

const DownEvents=()=>{
    const {datas, setDatas} = useStore();
    const {roomData}= useRoomStore();
    const counterButton= datas.counter;
    const [playerName,setPlayerName] = useState<string>('');
    return(
        <>
            {counterButton==4 &&
                <Text style={Gstyles.textTitle}>{playerName}</Text>
            }
            {counterButton==3 &&
                <>
                    <TextInput
                        style={Gstyles.textInput} 
                        value={playerName}
                        onChangeText={setPlayerName}
                        placeholder="Scrivilo qui scemo"
                    />
                    
                    <TouchableOpacity 
                        onPress={()=> {setDatas({counter:datas.counter+1, names:{player:playerName}})} } 
                        style={[Gstyles.button, { backgroundColor:'green' }]}
                    >
                        <Text style={Gstyles.buttonText}>Fatto</Text>
                    </TouchableOpacity>
                </>
            }
        </>
    )
}
export default DownEvents;