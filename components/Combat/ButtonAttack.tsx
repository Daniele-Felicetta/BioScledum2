import { View, Text, TouchableOpacity } from 'react-native'
import Gstyles from '../../assets/styles/styles';
import useStore from '../datas/data';

const ButtonAttack = () => {
    const {datas,setDatas}= useStore();
    let button=
        <TouchableOpacity style={[Gstyles.button, { backgroundColor: "red" }]}>
            <Text style={Gstyles.buttonText}>Sbraca</Text>
        </TouchableOpacity>;
    return (
        <>
            {button}
        </>
    )
}

export default ButtonAttack