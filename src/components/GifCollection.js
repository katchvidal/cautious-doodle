import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardGif from './Card';
import { getGifs } from '../helpers/getGifs';

function GifGrid({ categoria }) {
    const [Images, setImages] = useState([]);
    useEffect(() => {
        //  Que este pendiente al renderizado
        getGifs(url).then( imgs => setImages( imgs ))
    }, [ categoria ]);

    //  Peticion HTTP Fetch
    const site = 'api.giphy.com/v1/gifs/search?'
    const apikey = 'api_key=CqPoD5VK4PQUGcL5eAMhKPs6DTI5760y'
    const query = `q=${encodeURI( categoria )}`
    const limit = 'limit=12'
    const url = `https://${site}${query}&${limit}&${apikey}`

    return (
        <>
            <h3> {categoria} </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                
                        {
                            Images.map(comp => (
                                <CardGif key={comp.id} title={comp.title} url={comp.urli} />
                            ))
                        }
                </div>
        </>
    );
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}

export default GifGrid;