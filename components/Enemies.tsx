import { View, Text,Image } from 'react-native'
import useStore from './datas/data'
import roomData from './datas/room'
import Stats from './Stats'

const Enemies = ({size=200}) => {
    const {datas} = useStore();
    const counterButton= datas.counter
    const dataR=(roomData as any)?.[counterButton]
    const enemies= dataR?.enemies
    const who= enemies?.who
    
    console.log(dataR?.enemies)
    const enemiesRender=who?.map((enemy:string,id:number)=>{
        return (
            <View key={id} style={{marginBottom:10}}>
                <Image style={{ width:size/who.length,height:size/who.length, transform: [{ scaleX: -1 }]}} source={enemies?.genre[id]?.image}/>
                <Text style={{color:'red', textAlign:'center',fontStyle:'italic'}}>{enemies?.names[id]}</Text>
                <Stats/>
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