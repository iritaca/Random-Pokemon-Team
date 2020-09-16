import getData from '../utils/getData';

// const Home = async () => {
//     const pokemon = await getData();
//     const view =`
//     <div class="Characters">
//         ${pokemon.results.map(poke => `
//             <article class ="Characters-item">
//                 <a href="#/${poke.name}/">
//                     <img src="${poke.sprites.front_default}" alt="${poke.name}">
//                     <h2>${poke.name}</h2>
//                 </a>
//             </article>
//         `).join('')}
//     </div>
//     `;
//     return view
// };
// export default Home;

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