import { View, Text } from 'react-native'
import React from 'react'
import roomData from '../datas/room';
import Button from './Button';
import ButtonAttack from './ButtonAttack';
import useStore from '../datas/data';

const ButtonRender = () => {
    const {datas, setDatas} = useStore();
    const dataR = datas.dataR

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
            for (let i = 0; i < enemies?.who.length; i++) {
                buttonComponents.push(
                    <ButtonAttack key={i} id={i} />    
                );
            }
        }
        return buttonComponents;
    }
  return (
    <>
        {renderButtons()}
    </>
  )
}

export default ButtonRender

