import {Text,TextInput,TouchableOpacity} from 'react-native';
import {useState} from 'react';
import useStore from "./datas/data";
import Gstyles from "../assets/styles/styles";

const DownEvents=()=>{
    const {datas, setDatas} = useStore();
    const counter= datas.counter;
    const [playerName,setPlayerName] = useState<string>('');
    
    return(
        <>
            {counter==4 &&
                <Text style={Gstyles.textTitle}>{playerName}</Text>
            }
            {counter==3 &&
                <>
                    <TextInput
                        style={Gstyles.textInput} 
                        value={playerName}
                        onChangeText={setPlayerName}
                        placeholder="Scrivilo qui scemo"
                        maxLength={12}
                    />
                    
                    <TouchableOpacity 
                        onPress={()=> {setDatas({counter:datas.counter+1, playerName:playerName})} } 
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