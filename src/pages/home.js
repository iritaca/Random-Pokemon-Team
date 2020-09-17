import generarTeam from '../utils/getSixData';


const Home = async () => {
    
    const pokemon = await generarTeam();
    const pokemon2 = await generarTeam();
    const pokemon3 = await generarTeam();
    const pokemon4 = await generarTeam();
    const pokemon5 = await generarTeam();
    const pokemon6 = await generarTeam();
    const view =`
        <div class="Characters">
            <article class ="Characters-item">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
                </div>
            </article>
        </div>
        <div class="Characters">
            <article class ="Characters-item">
                <img src="${pokemon2.sprites.front_default}" alt="${pokemon2.name}">
                <h2>${pokemon2.name}</h2>
            </article>
        </div>
        <div class="Characters">
            <article class ="Characters-item">
                <img src="${pokemon3.sprites.front_default}" alt="${pokemon3.name}">
                <h2>${pokemon3.name}</h2>
            </article>
        </div>
        <div class="Characters">
            <article class ="Characters-item">
                <img src="${pokemon4.sprites.front_default}" alt="${pokemon4.name}">
                <h2>${pokemon4.name}</h2>
            </article>
        </div>
        <div class="Characters">
            <article class ="Characters-item">
                <img src="${pokemon5.sprites.front_default}" alt="${pokemon5.name}">
                <h2>${pokemon5.name}</h2>
            </article>
        </div>
        <div class="Characters">
            <article class ="Characters-item">
                <img src="${pokemon6.sprites.front_default}" alt="${pokemon6.name}">
                <h2>${pokemon6.name}</h2>
            </article>
        </div>
        `;
    return view;
};
export default Home;