import React, { useState } from 'react';
import {Precio, Fecha, Paginado} from './components';

function App() {
  const [valor, setValor] = useState(0);
  const [moneda, setMoneda] = useState('$');
  const [fecha, setFecha] = useState('0/0/0');
  return (
    <>
      <Precio mon={moneda} val={valor} />
      <Fecha date={fecha} />
      <form>
          <input onChange={(e) => setValor(e.target.value)} name="valor" value={valor} type="number" />
          <input onChange={(e) => setMoneda(e.target.value)} name="moneda" value={moneda} type="text" />
          <input onChange={(e) => setFecha(e.target.value)} name="fecha" value={fecha} type="text" />
      </form>
      <Paginado actual={1} max={10} />
    </>
  );
}

export default App;




// import {Cards} from './components';

// const usersCards = [
//   {
//     text: 'Aylen',
//     id: 1,
//     edad: 23
//   },
//   {
//     text: 'Martin',
//     id: 2,
//     edad: 18
//   },
//   {
//     text: 'Adrian',
//     id: 3,
//     edad: 49
//   },
//   {
//     text: 'Carina',
//     id: 4,
//     edad: 47
//   }
// ]


