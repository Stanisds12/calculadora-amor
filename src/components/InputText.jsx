import React, { Fragment, useState } from 'react';
import Resultado from './Resultado';

const InputText = () => {
    const [nome1, setNome1] = useState({ firstNome: '', segundNome: ''});
    const [cheio, setCheio] = useState(false);
  
    const handleClean = (e) => {
        e.preventDefault()
        setCheio(false)
        setNome1({ firstNome: '', segundNome: '' })
    }
    const handleNome = (e) => {
        e.preventDefault()
        setNome1({ ...nome1, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (nome1.firstNome!=="" && nome1.segundNome!==""){
            setCheio(true)
        } 
    }
    return (
        <Fragment>
            
            <h1 className="text-center mt-5">CALCULADORA DEL AMOR</h1>
            <form onSubmit={onSubmit}>
                    <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="input-group">
                            <input required type="text" name="firstNome" placeholder="primero nombre" value={nome1.firstNome} onChange={(e) => handleNome(e)}  className="form-control mb-3" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="input-group">
                            <input required type="text" name="segundNome" placeholder="segundo nombre" value={nome1.segundNome} onChange={(e) => handleNome(e)}  className="form-control mb-3" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <button className="btn btn-primary mr-3" type="submit">CALCULAR</button>
                        <button className="btn btn-dark" type="button" onClick={(e)=>handleClean(e)}>LIMPIAR</button>
                    </div>
                    
                </div>
            </form>
                {cheio && <Resultado nomes={nome1} handleClean={handleClean} />}
         
        </Fragment >
    );
}

export default InputText;
