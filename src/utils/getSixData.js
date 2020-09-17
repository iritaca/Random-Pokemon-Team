const API ="https://pokeapi.co/api/v2/";
const pokemon_URL = 'pokemon/:id';

const maxCount = 800;
const generarTeam= () =>{
        let rand=Math.floor(Math.random()*(maxCount-1)+1);
        return randomPokemon(rand)
}


const randomPokemon = async (rand) =>{
    const urlRequest = `${API}${pokemon_URL.replace(':id',rand)}`
    try{
        const response = await fetch(urlRequest);
        const data = await response.json();
        return data;
    }
    catch{
        console.log('Fetch Error', error)
    }
}
export default generarTeam;