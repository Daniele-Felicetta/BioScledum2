import { create } from 'zustand'

const useStore = create<any>()((set) => ({
    datas:{
        names:{
            player:"Gigi", 
        },
        counter:6
    },
 
    setDatas:(newDatas:any)=>set((state:any)=>({
        datas: {...state.datas, ...newDatas},
    })),
}))
 
export default useStore;