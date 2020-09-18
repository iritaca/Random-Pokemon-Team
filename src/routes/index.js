import Header from "../templates/Header";
import Footer from "../templates/Footer";
import Home from "../pages/home";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes ={
    "/":Home,
    "/Footer": Footer,
    "/Contact": 'Contact',
}
const router = async () =>{
    const header = null || document.getElementById('header');
    const loading = null || document.getElementById('loading');
    const footer = null || document.getElementById("footer");
    header.innerHTML = await Header();
    let hash = getHash();
    let route= await resolveRoutes(hash);
    let render = routes[route]?routes[route]: Error404;
    // loading.innerHTML=await render();
    footer.innerHTML = await Footer();
}
export default router;
