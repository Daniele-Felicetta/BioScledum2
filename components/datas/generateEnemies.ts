import randomName from './names'
import globalGenres from './enemies'

const generateEnemies=(level:number,quantity:number)=>{
    function reduceObject(n = 1) {
        const keys = Object.entries(globalGenres).slice(-n)
        return Object.fromEntries(keys)
    }

    let genres:object={};
    switch(level){
        case 1:{
            genres = reduceObject(1) ;
            break;
        }
        case 2:{
            genres= reduceObject(0);
            break;
        }        
        default: console.error("ERROR ON SWITCHING LEVEL");
    }
    const randomGenre=(num:number)=> {
        let guysArr:string[]=[];
        for(let i=0; i<num; i++){
            const type:string[]= Object.keys(genres)
            guysArr.push(type[Math.floor(Math.random()*type.length)]) 
        } 
        return guysArr
    }

    const enemiesCreate=()=>{
        const who:string[] = randomGenre(quantity);
        const names:string[] = who.map(() => randomName());
        const genre:string[] = who.map( x => genres[x]);
        return { who, names, genre };
    }
    return enemiesCreate();
}
export default generateEnemies;