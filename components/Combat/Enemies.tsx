import { View, Text,Image } from 'react-native'
import useStore from '../datas/data'
import roomData from '../datas/room'
import Stats from './Stats'
import { useRoomDatas} from '../datas/data';

const Enemies = ({size=200}) => {
    const {datas} = useStore();
    const {combatDatas} = datas;
    const { dataR, enemies } = useRoomDatas();
    const who= enemies.who

    const enemiesRender=who.map((enemy:string,id:number)=>{
        const guy=enemies.genre?.[id]
        const guyLife= combatDatas.lifeEnemies[id]
       
        return (
            <View key={id} style={{marginBottom:10}}>
                <Image style={{ width:size/who.length,height:size/who.length, transform: [{ scaleX: -1 }]}} source={guy.image}/>
                <Text style={{color:'red', textAlign:'center',fontStyle:'italic'}}>{enemies.names[id]}</Text>
                <Stats life={guyLife}/>
            </View>
        )
    })

    return (
        <>
            {enemiesRender}
        </>
    )
}

export default Enemies