import { create } from 'zustand'
import roomData from './room';

interface StoreData {
    datas: {
      counter: number;
      playerName: string;
      playerImage: number; 
      defaultLifePlayer: number;
      combatDatas?: {
        lifeEnemies: number[];
      };
    };
    setDatas: (newDatas: object) => void;
    setLife: (id: number, value: number) => void;
  }


const useStore = create<StoreData>()((set) => ({
    datas:{
        counter:5,
        playerName:"Gigi",
        playerImage:require('../../assets/images/player.png'),
        defaultLifePlayer:200,

    },
    setDatas:(newDatas:object)=>set((state)=>({
        datas: {...state.datas, ...newDatas},
    })),
    setLife:(id:number,value:number)=>set((state)=>{
        let newArray:number[]=[] 
        if(state.datas.combatDatas){
            const prevArray = [...state.datas.combatDatas.lifeEnemies]
            prevArray[id]= prevArray[id]-value
            newArray= [...prevArray];
        }
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
    const dataR = (roomData as object)?.[counter];
    const enemies = dataR?.enemies; 
    return { dataR, enemies };
  };
// {
//     "genre": [{"image": 2, "life": 200}, {"image": 2, "life": 200}],
//     "names": ["Piermauro", "Gianumberto"], 
//     "who": ["knight", "knight"]
// }