import { View, Text } from 'react-native'
import Enemies from './Enemies'
import Player from './Player'
const Combat = () => {
  return (
    <View style={{flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", width:"100%"}}>
        <Player />
        <View>
            <Enemies />
        </View>
    </View>
  )
}

export default Combat