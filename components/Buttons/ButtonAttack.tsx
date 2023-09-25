import { View, Text, TouchableOpacity, useWindowDimensions} from 'react-native'
import Gstyles from '../../assets/styles/styles';
import useStore from '../datas/data';
import roomData from '../datas/room';
const ButtonAttack = ({id}:any) => {
    const {datas, setDatas} = useStore();
    const window = useWindowDimensions();
    const counterButton= datas.counter
    const dataR=(roomData as any)?.[counterButton]
    const enemyName:string=dataR?.enemies?.names[id];

    let button=
        <TouchableOpacity style={[Gstyles.buttonAttack, { backgroundColor: "rgb(170,50,60)", }]}>
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