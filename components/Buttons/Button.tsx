import { Text, TouchableOpacity} from 'react-native'
import Gstyles from '../../assets/styles/styles';
import useStore from '../datas/data';

const Button=({text, color,nocounter}:any) => {
    const {datas,setDatas}= useStore();
    let button=
        <TouchableOpacity onPress={()=> setDatas({counter:datas.counter+1})} style={[Gstyles.button, { backgroundColor: color }]}>
            <Text style={Gstyles.buttonText}>{text}</Text>
        </TouchableOpacity>;
        
    if(nocounter){
        button= <TouchableOpacity onPress={()=> setDatas({counter:datas.counter-1})} style={[Gstyles.button, { backgroundColor: color }]}>
            <Text style={Gstyles.buttonText}>{text}-1</Text>
        </TouchableOpacity>
    }
    return(
        <>
            {button}       
        </> 
    )
}
export default Button;