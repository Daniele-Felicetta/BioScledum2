import { View, Text} from 'react-native'
import React from 'react'

import Gstyles from '../assets/styles/styles'
import useStore from './datas/data'
import Button from './Button'
import ButtonAttack from './Combat/ButtonAttack'
import useRoomStore from './datas/room'
import DownEvents from './DownEvents'

const DownContainer = () => {
    const {datas, setDatas} = useStore();
    const {roomData}= useRoomStore();
    console.log(datas);

    const counterButton= datas.counter
    const dataR=(roomData as any)?.[counterButton]
    console.log(dataR)

    const renderButtons:any=()=>{
        const buttonComponents = [];
        if(!("enemies" in dataR)){
            const buttons= dataR?.buttons
            for (let i = 0; i < buttons?.number; i++) {
                buttonComponents.push(
                    <Button 
                        nocounter={buttons?.nocounter?.[i] ?? false} 
                        key={i} 
                        text={buttons.text[i]} 
                        color={buttons.color[i]} 
                    />    
                );
            }
        }
        else{
            const enemies= dataR?.enemies
            for (let i = 0; i < enemies?.number; i++) {
                buttonComponents.push(
                    <ButtonAttack 
                        key={i} 
                    />    
                );
            }
        }
        return buttonComponents;
    }

  return (
    <View style={Gstyles.textContainer}>
        <Text style={Gstyles.text}>{dataR?.text}</Text>
        {"text2" in dataR &&<Text style={Gstyles.text}>{dataR?.text2}</Text>}
        <DownEvents />        
        <View style={Gstyles.buttonContainer}>
            {renderButtons()}
        </View>            
    </View>
  )
}

export default DownContainer