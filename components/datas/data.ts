import { create } from 'zustand'

const useStore = create<any>()((set) => ({
    datas:{
        counter:6,
        playerName:"Gigi", 
    },
    setDatas:(newDatas:any)=>set((state:any)=>({
        datas: {...state.datas, ...newDatas},
    })),


    combatDatas:{
        
    },
    setCombatDatas:(newDatas:any)=>set((state:any)=>({
        datas: {...state.datas, ...newDatas},
    })),
}))
 
export default useStore;