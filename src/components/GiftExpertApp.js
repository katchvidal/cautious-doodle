import React, { useState } from 'react';
import AddCategoria from './AddCategoria';
import GifGrid from './GifCollection';


function GifExpertApp() {

    const [Categorias, setCategorias] = useState(['Homer Simpson']);

    return (
    
        <> 
            <h2> Aplicacion de gift </h2> 
        
            <AddCategoria setCategorias={ setCategorias } Categorias={Categorias}/>
            
            <hr /> 

            <ol className=''> 
            {/* *lISTA ORDENADA  */}
                {
                    Categorias.map( categoria => (
                        <GifGrid key={ categoria } categoria = { categoria }></GifGrid>
                        ))
                    }
            </ol>


        
        </>
    );
}

export default GifExpertApp;