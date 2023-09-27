import { View, Text } from 'react-native'
import {useEffect, useState} from 'react'
import Gstyles from '../assets/styles/styles'
import patStyle from '../assets/styles/patstyle'
import UpEvents from './UpEvents'
import roomData from './datas/room'
import useStore from './datas/data'
import Combat from './Combat'

const UpContainer = () => {
    const {datas, setDatas} = useStore();
    const dataR= datas.dataR;
   
    return (
        <View style={Gstyles.upContainer}>
            {"enemies"in dataR && <Combat/>}
            <UpEvents />
        </View>
    )
}

export default UpContainer