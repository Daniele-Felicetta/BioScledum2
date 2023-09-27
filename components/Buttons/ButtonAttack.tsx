import { View, Text, TouchableOpacity, useWindowDimensions} from 'react-native'
import Gstyles from '../../assets/styles/styles';
import useStore from '../datas/data';
import roomData from '../datas/room';
const ButtonAttack = ({id}:any) => {
    const {datas, setDatas,setLife} = useStore();
    const {combatDatas} = datas;
    const dataR= datas.dataR
    const enemies= dataR?.enemies
    const enemyName:string=enemies?.names[id];
    const guyLife= combatDatas.life[id]
    console.log(guyLife)
    let button=
        <TouchableOpacity 
            onPress= {()=> setLife(id, 50)}
            style={[Gstyles.buttonAttack, { backgroundColor: "rgb(170,50,60)", }]}
        >
            <Text style={Gstyles.buttonText}>Affetta</Text>
            <Text style={[Gstyles.buttonText,{color:"rgb(50,10,50)"}]}>{enemyName}</Text>
        </TouchableOpacity>;
    return (
        <>
            {button}
        </>
    )
}

export default ButtonAttack