import { View, Text } from 'react-native'
import React from 'react'
import Gstyles from '../assets/styles/styles'
import patStyle from '../assets/styles/patstyle'
import UpEvents from './UpEvents'

const UpContainer = () => {
    return (
        <View style={Gstyles.renderContainer}>
            <View style={patStyle.containerCenter}>
                <UpEvents />
            </View>
        </View>
    )
}

export default UpContainer