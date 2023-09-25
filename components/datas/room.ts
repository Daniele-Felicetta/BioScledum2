
import generateEnemies from './generateEnemies';
    const roomData={
        0: {
            text:"Benvenuto avventuriero sei pronto a vivere, sopravvivere e combattere?",
            buttons:{
                number:2,
                text:["Si","Si"],
                color:["red","green"]
            }
        },
        1:{
            text:"Bene incominciamo",
            buttons:{
                number:2,
                text:["Evviva","Dajeee!!"],
                nocounter:["","c"],
                color:["#90B20A","green"]
            }
        },
        2:{
            text:"Questo sarà il tuo personaggio",
            buttons:{
                "number":1,
                "text":["OKK"],
                "color":["red"]
            }
        },
        3:{
            text:"Come vuoi che si chiami?",
        },
        4:{
            text:"Bene il tuo nome è quindi",
            buttons:{
                number:2,
                nocounter:["c",""],
                text:["Cambia","Daje"],
                color:["#90B20A","green"]
            }
        },
        5:{
            text:"Ottimo adesso vediamo se hai fegato!!",
            buttons:{
                number:1,
                text:["Wee fantastico"],
                color:["#90B20A","green"]
            }
        },
        6:{
            text:"Questi sono 2 nemici bastardoli.",
            text2:"Adesso devi decidere chi attaccare",
            enemies: generateEnemies(1,2),
        }
    }
export default roomData;