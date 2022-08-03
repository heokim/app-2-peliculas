export default function Paginacion(props) {

  const getPaginas = () => {
    const resultado = [];
    for (let pagina = 1; pagina <= props.total; pagina++) {
      resultado.push(
        <a onClick={() => props.onChange(pagina)} class={props.pagina === pagina ? 'active' : ''}>
          {pagina}
        </a>
      );
    }
    return resultado;
  }

  return (
    <>
      <div class="topbar-filter">
        <label>Películas por página:</label>
        <select>
          <option value="range">5 Películas</option>
          <option value="saab">10 Películas</option>
        </select>
        <div class="pagination2">
          <span>Página {props.pagina} de {props.total}:</span>

          {getPaginas()}

          <a href="#"><i class="ion-arrow-right-b"></i></a>


        </div>
      </div>

    </>
  );
}