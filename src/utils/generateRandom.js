const maxCount = 800;
let generarSet =[]
const numeroRandom= () =>{
    for(let i=0;i<6;i++){
        let rand=Math.floor(Math.random()*(maxCount-1)+1)
        generarSet.push(rand)
    }
    return generarSet;
}

export default numeroRandom;