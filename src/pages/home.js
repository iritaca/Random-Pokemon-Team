import generarTeam from '../utils/getSixData';


const Home = async () => {
    
    const pokemon = await generarTeam();
    const pokemon2 = await generarTeam();
    const pokemon3 = await generarTeam();
    const view =`
            <section id="content" class="content up">
                <article class ="Character-item">
                    <figure class="Character-imgContainer">
                        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    </figure>
                    <div class="Character-details">
                        <h2>Pokemon id: ${pokemon.id}</h2>
                        <h2>Name: ${pokemon.name}</h2>
                        <h2>Type: ${pokemon.types[0].type.name}</h2>
                    </div>
                </article>
                <article class ="Character-item">
                    <figure class="Character-imgContainer">
                        <img src="${pokemon2.sprites.front_default}" alt="${pokemon2.name}">
                    </figure>
                    <div class="Character-details">
                        <h2>Pokemon id: ${pokemon2.id}</h2>
                        <h2>Name: ${pokemon2.name}</h2>
                        <h2>Type: ${pokemon2.types[0].type.name}</h2>
                    </div>
                </article>
                <article class ="Character-item">
                    <figure class="Character-imgContainer">
                        <img src="${pokemon3.sprites.front_default}" alt="${pokemon3.name}">
                    </figure>
                    <div class="Character-details">
                        <h2>Pokemon id: ${pokemon3.id}</h2>
                        <h2>Name: ${pokemon3.name}</h2>
                        <h2>Type: ${pokemon3.types[0].type.name}</h2>
                    </div>
                </article>
            </section>
        </div>
        `;
    return view;
};
export default Home;