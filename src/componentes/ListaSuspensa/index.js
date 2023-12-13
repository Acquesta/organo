
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return(
        <div className='lista-suspensa'>
            <lable>{props.label}</lable>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} required={props.obrigatorio}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa