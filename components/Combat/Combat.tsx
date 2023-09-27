import { View,useWindowDimensions } from 'react-native'
import {useState} from 'react'
import Enemies from './Enemies'
import Player from './Player'
import useStore from '../datas/data'
import useRoomDatas from '../datas/data'


const Combat = ({dataR,enemies}:any) => {
  const [sentinel, setSentinel] = useState<boolean>(false)
  const {datas,setDatas} = useStore();
  const window = useWindowDimensions();
  const windowSize= (window.width*window.height)/1000

  console.log(dataR)
 
    const lifeEnemies= enemies.genre.map((x:any)=>{
      return x.life  
    })
    

    if(sentinel==false){
      setDatas({combatDatas: {lifeEnemies: lifeEnemies}})
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