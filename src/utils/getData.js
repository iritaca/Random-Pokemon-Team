import numeroRandom from '../utils/generateRandom';
// const API ="https://pokeapi.co/api/v2/pokemon/565";
const API ="https://pokeapi.co/api/v2/pokemon/";
// const pokemon_URL = "/:id"

// const getData = async() =>{
//     try{
//         const response = await fetch(`${API}`)
//         const data = await response.json();
//         return data;
//     }
//     catch{
//         console.log('Fetch Error', error);
//     }
// }
const randomApi=`${API}${numeroRandom()}`
debugger
const getData = async () =>{
    // debugger
    // const apiURL = id?`${API}${id}`:API;
    const apiURL = randomApi;
    try{
        const response = await fetch(apiURL)
        const data = await response.json();
        return data;
    }
    catch{
        console.log('Fetch Error', error);
    }
}
export default getData;