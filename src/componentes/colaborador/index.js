import './colaborador.css'

const Colaborador = ({nome, imagem, cargo, cor}) => {

    const corCard = {backgroundColor: cor}

    // console.log(cor);

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={corCard}>
                <img src={imagem} alt='imagem de perfil'></img>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>  
        </div>
    )
}

export default Colaborador