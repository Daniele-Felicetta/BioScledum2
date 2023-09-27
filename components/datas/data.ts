import { create } from 'zustand'
import roomData from './room';

const useStore = create<any>()((set) => ({
    datas:{
        counter:6,
        playerName:"Gigi",
        get dataR() {
            return (roomData as any)?.[this.counter];
        },
        get enemies(){
            return this.dataR?.enemies
        },

    },
    setDatas:(newDatas:any)=>set((state:any)=>({
        datas: {...state.datas, ...newDatas},
    })),
    setLife:(id:any,value:any)=>set((state:any)=>{ 
        const prevArray = [...state.datas.combatDatas.life]
        prevArray[id]= prevArray[id]-value
        const newArray= [...prevArray];
        return{
            datas:{
                ...state.datas,
                combatDatas:{
                    life: newArray
                }
            }
        }
    }),
}))
 
export default useStore;

// {
//     "genre": [{"image": 2, "life": 200}, {"image": 2, "life": 200}],
//     "names": ["Piermauro", "Gianumberto"], 
//     "who": ["knight", "knight"]
// }