import { View, Text} from 'react-native'
import React from 'react'
import Gstyles from '../assets/styles/styles'
import useStore from './datas/data'
import useRoomStore from './datas/room'
import DownEvents from './DownEvents'
import ButtonRender from './Buttons/ButtonRender'

const DownContainer = () => {
    const {datas, setDatas} = useStore();
    const {roomData}= useRoomStore();
    const counterButton= datas.counter
    const dataR=(roomData as any)?.[counterButton]
    
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