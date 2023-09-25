import { View, Text,useWindowDimensions } from 'react-native'
import Enemies from './Enemies'
import Player from './Player'
const Combat = () => {
  const window = useWindowDimensions();
  return (
    <View style={{flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", width:"100%"}}>
        <Player size={window.width/2}/>
        <View>
            <Enemies size={window.width/1.5}/>
        </View>
    </View>
  )
}

export default Combat