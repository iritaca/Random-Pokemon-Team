const API ="https://pokeapi.co/api/v2/pokemon/99";
// const API ="https://pokeapi.co/api/v2/pokemon/";
// const pokemon_URL = "/:id"

// const maxCount = 999;
// let generarSet =[]
// const numeroRandom= () =>{
//     for(i=0;i<6;i++){
//         let rand=Math.floor(Math.random()*(maxCount-1)+1)
//         generarSet.push(rand)
//     }
//     console.log(generarSet)
// }

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

const getData = async (id) =>{
    const apiURL = id?`${API}${id}`:API;
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