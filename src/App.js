import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import { useState } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 4;

  const buscarPeliculas = async () => {
    let url = "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json";

    let respuesta = await fetch(url, {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Origin": "https://raw.githubusercontent.com",
      }
    });

    let json = await respuesta.json();

    setPeliculas(json);
  }

  const cargarPeliculas = () => {
    // peliculas = peliculas.slice(
    //   (paginaActual - 1) * TOTAL_POR_PAGINA,
    //   paginaActual * TOTAL_POR_PAGINA
    // );
  }

  const getTotalPaginas = () => {
    let cantTotalDePeliculas = peliculas.length;
    return Math.ceil(cantTotalDePeliculas / TOTAL_POR_PAGINA,);
  }

  cargarPeliculas();

  return (
    <PageWrapper>
      <button onClick={buscarPeliculas}>
        prueba
      </button>

      {peliculas.map(pelicula =>
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}>
          {pelicula.descipcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina);
      }} />

    </PageWrapper >
  );
}

export default App;
