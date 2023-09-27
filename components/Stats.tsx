import { View, Text } from 'react-native'

const Stats = ({life}:any) => {
  return (
    <View>
      <Text style={{textAlign:'center',color:'rgba(150,200,100,0.8)'}}>Life : <Text style={{color:'white'}}>{life}</Text></Text>
      <View></View>
    </View>
  )
}

export default Stats