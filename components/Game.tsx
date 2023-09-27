import { View} from 'react-native'
import Gstyles from '../assets/styles/styles'
import UpContainer from './UpContainer'
import DownContainer from './DownContainer'

const Game = () => {

    return (
        <View style={Gstyles.gameContainer}>
            <UpContainer />
            <DownContainer />
        </View>
    )
}

export default Game