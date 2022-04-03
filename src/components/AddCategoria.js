import React, { useState } from 'react';
import PropTypes from 'prop-types';


function AddCategoria({setCategorias, Categorias}) {
    const [inputValue, setinputValue] = useState('');
    const handleChange = (e) => {
        setinputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2){

            setCategorias([ inputValue, ...Categorias] )
            setinputValue('')
        }
    }
    return (  
        <>
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={ inputValue }
                onChange = { handleChange}
                />
        </form>
        </>
    );
}


AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategoria;