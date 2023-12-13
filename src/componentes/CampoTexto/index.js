import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const label = props.label
    const placeholder = props.placeholder
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholder}></input>
        </div>
    )
}

export default CampoTexto