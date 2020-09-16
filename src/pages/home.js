import getData from '../utils/getData';

const Home = async () => {
    const pokemon = await getData();
    const view =`
        <div class="Characters">
            <article class ="Characters-item">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
            </article>
        </div>
        `
    return view
};
export default Home;