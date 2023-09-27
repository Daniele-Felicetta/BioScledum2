import { View, Text} from 'react-native'
import Gstyles from '../assets/styles/styles'
import DownEvents from './DownEvents'
import ButtonRender from './Buttons/ButtonRender'
import { useRoomDatas} from './datas/data';

const DownContainer = () => {
    const { dataR, enemies } = useRoomDatas();

    return (
    <View style={Gstyles.textContainer}>
        <Text style={Gstyles.text}>{dataR?.text}</Text>
        {"text2" in dataR &&<Text style={Gstyles.text}>{dataR?.text2}</Text>}
        <DownEvents />        
        <View style={Gstyles.buttonContainer}>
            <ButtonRender />
        </View>            
    </View>
  )
}

export default DownContainer