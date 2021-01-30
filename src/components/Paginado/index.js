import React, {useState} from 'react';

const Paginado = ({actual, max}) => {
    const [dato, setDato] = useState(actual)
    // const atras = () => {
    //     if(dato>=2) {
    //         setDato(dato - 1)
    //     }
    // }
    // const siguiente = () => {
    //     if(dato<max) {
    //     setDato(dato + 1)
    //     }
    // }
    // const maximo = () => {
    //     setDato(max)
    // }
    // const primera = () => {
    //     setDato(actual)
    // }

    const handleClick = (value) => {
        switch(value) {
            case 'plus' : setDato(dato < max ? dato + 1 : dato); break;
            case 'less' : setDato(dato > actual ? dato - 1 : dato); break;
            default: setDato(value)
        }
    }


    return(
        <>
        {/* <div className='paginas'>
            <button  onClick={atras} type="button">Atras</button>
            <button className='paginas mx-2' onClick={primera} type="button">{actual}</button>      
            {dato}    
            <button className='paginas mx-2' onClick={maximo} type="button">{max}</button>
            <button onClick={siguiente} type="button">Siguiente</button>
        </div>    */}

        <div className='paginas'>
            <button  onClick={() => handleClick('less')} type="button">Atras</button>
            <button className='paginas mx-2' onClick={() => handleClick(actual)} type="button">{actual}</button>      
            {dato}    
            <button className='paginas mx-2' onClick={() => handleClick(max)} type="button">{max}</button>
            <button onClick={() => handleClick('plus')} type="button">Siguiente</button>
        </div> 

        </>
    );
}

export {Paginado};