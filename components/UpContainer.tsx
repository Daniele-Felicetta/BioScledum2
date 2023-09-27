import { View } from 'react-native'
import Gstyles from '../assets/styles/styles'
import UpEvents from './UpEvents'
import Combat from './Combat/Combat'
import { useRoomDatas} from './datas/data';

const UpContainer = () => {
    const { dataR, enemies } = useRoomDatas();

    return (
        <View style={Gstyles.upContainer}>
            {"enemies"in dataR && <Combat dataR={dataR} enemies={enemies}/>}
            <UpEvents />
        </View>
    )
}

export default UpContainer