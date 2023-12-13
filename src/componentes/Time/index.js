import Colaborador from '../colaborador'
import './time.css'

const Time = (props) => {

    const css = {background: props.corSecundaria}
    const border = {borderBottom: "4px solid" + props.corPrimaria}

    return (
        (props.colaboradores.length > 0) ? 
        
        <section className="time" style={css}>
            <h3 style={border}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    cor={props.corPrimaria}
                />)}
            </div>
            
        </section> 

        : ''
    )
}

export default Time