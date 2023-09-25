import { View, Text,Image } from 'react-native'
import useStore from './datas/data'
import useRoomStore from './datas/room'
import Stats from './Stats'

const Enemies = ({size=200}) => {
    const {roomData} = useRoomStore();
    const {datas} = useStore();
    const counterButton= datas.counter
    const dataR=(roomData as any)?.[counterButton]
    const enemies= dataR?.enemies?.who

    const getImage = (enemy: string) => {
        switch (enemy) {
            case 'bull':
                return require('../assets/images/bull.png');
            case 'knight':
                return require('../assets/images/knight.png');
        }
    };

    const enemiesRender=enemies.map((enemy:string,id:number)=>{
        return (
            <View key={id} >
                <Text style={{color:'red', textAlign:'center'}}>{dataR?.enemies?.names[id]}</Text>
                <Image style={{ width:size/enemies.length,height:size/enemies.length, transform: [{ scaleX: -1 }]}} source={(getImage(enemy))}/>
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