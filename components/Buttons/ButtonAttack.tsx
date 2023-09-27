import { View, Text, TouchableOpacity, useWindowDimensions} from 'react-native'
import Gstyles from '../../assets/styles/styles';
import useStore from '../datas/data';
import { useRoomDatas} from '../datas/data';

const ButtonAttack = ({id}:any) => {
    const {datas, setDatas,setLife} = useStore();
    const { dataR, enemies } = useRoomDatas();

    const {combatDatas} = datas;
    const enemyName:string=enemies?.names[id];
    const guyLife= combatDatas.lifeEnemies[id];

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