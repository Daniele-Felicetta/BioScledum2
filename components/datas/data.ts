import { create } from 'zustand'
import roomData from './room';

const useStore = create<any>()((set) => ({
    datas:{
        counter:5,
        playerName:"Gigi",
        playerImage:require('../../assets/images/player.png'),
        defaultLifePlayer:200,

    },
    setDatas:(newDatas:any)=>set((state:any)=>({
        datas: {...state.datas, ...newDatas},
    })),
    setLife:(id:any,value:any)=>set((state:any)=>{ 
        const prevArray = [...state.datas.combatDatas.lifeEnemies]
        prevArray[id]= prevArray[id]-value
        const newArray= [...prevArray];
        return{
            datas:{
                ...state.datas,
                combatDatas:{
                    lifeEnemies: newArray
                }
            }
        }
    }),
}))
 
export default useStore;

export const useRoomDatas = () => {
    const { counter } = useStore((state) => state.datas);
    const dataR = (roomData as any)?.[counter];
    const enemies = dataR?.enemies; 
    return { dataR, enemies };
  };
// {
//     "genre": [{"image": 2, "life": 200}, {"image": 2, "life": 200}],
//     "names": ["Piermauro", "Gianumberto"], 
//     "who": ["knight", "knight"]
// }