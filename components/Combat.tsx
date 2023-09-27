import { View, Text,useWindowDimensions } from 'react-native'
import {useEffect,useState} from 'react'
import Enemies from './Enemies'
import Player from './Player'
import useStore from './datas/data'
const Combat = () => {
  const [sentinel, setSentinel] = useState<boolean>(false)
  const {datas,setDatas} = useStore();
  const enemies= datas.enemies
  const window = useWindowDimensions();
  const windowSize= (window.width*window.height)/1000
    const combatLife= enemies.genre.map((x:any)=>{
      return x.life  
    })
    
    if(sentinel==false){
      setDatas({combatDatas: {life: combatLife}})
      setSentinel(true)
    }
    
   


  return (
    <View style={{flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", width:"100%"}}>
        <Player size={window.width/2}/>
        {enemies.who.length>4?
          <View>
            <Enemies size={window.width/1.7}/>
          </View>
          :
          <View>
          <Enemies size={window.width/1.7}/>
        </View>
        }
       
    </View>
  )
}

export default Combat