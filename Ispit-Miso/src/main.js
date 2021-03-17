import {render} from "./render.js"
import Layout from "./view/layout.js"
import Data from "./data.js"
import MarkupZaRezultate from "./results.js"

export default () => {
    document.getElementById("app").innerHTML = Layout()
    let elementRezultata = document.getElementById("results");
    document.getElementById("searchTerm").addEventListener("change", (event) => {
    Data(event.target.value).then((rezultat) => {
      render(MarkupZaRezultate(rezultat), elementRezultata);
      console.log(render);
    });
  });
};