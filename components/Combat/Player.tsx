import { View, Text, Image, useWindowDimensions } from 'react-native'
import useStore from '../datas/data'

const Player = ({size=1}) => {
    const {datas}= useStore();
    return (
        <View>
            <Text style={{color:'rgb(150,25,150)',textAlign:'center', fontSize:(size/7), fontWeight:'bold' }}>{datas.playerName}</Text>    
            <Image source={datas.playerImage} style={{width:size, height:size}} />
        </View>
    )
}

export default Player