import randomName from './names'

const generateEnemies=(level:number,quantity:number)=>{
    const globalGenres:string[]=[ 
        "bull",
        "knight",
    ]
    let genres:string[];

    switch(level){
        case 1:{
            genres=globalGenres.splice(-1)
            break;
        }
        case 2:{
            genres=globalGenres;
            break;
        }        
        default: console.error("ERROR ON SWITCHING LEVEL");
    }

    const guys=(num:number)=> {
        let guysArr=[];
        for(let i=0; i<num; i++){
            console.log(guysArr)
            guysArr.push(genres[Math.floor(Math.random()*genres.length)]) 
        } 
        return guysArr
    }

    const enemiesCreate=()=>{
        const who = guys(quantity);
        const names = who.map(() => randomName());
        return { who, names };
    }
    return enemiesCreate();
}
export default generateEnemies;