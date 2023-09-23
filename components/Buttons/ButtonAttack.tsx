import { View, Text, TouchableOpacity } from 'react-native'
import Gstyles from '../../assets/styles/styles';
import useStore from '../datas/data';
import useRoomStore from '../datas/room';
const ButtonAttack = ({id}:any) => {
    const {datas, setDatas} = useStore();
    const {roomData}= useRoomStore();
    console.log(datas);

    const counterButton= datas.counter
    const dataR=(roomData as any)?.[counterButton]
    console.log(dataR)
    const enemyName:string=dataR?.enemies?.names[id];
    console.log(enemyName)
    let button=
        <TouchableOpacity style={[Gstyles.buttonAttack, { backgroundColor: "rgb(170,50,60)" }]}>
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