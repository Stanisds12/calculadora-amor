import React, { useState, useEffect } from 'react';
import { Dados } from '../dados.js';

const Resultado = ({ nomes, handleClean }) => {
    const [dados, setDados] = useState([])


    useEffect(() => {
        setDados(Dados)

    }, []);
     var valor,sms,x,casal
    if ((nomes.firstNome !== " " && nomes.segundNome !== " ") && (nomes.firstNome !== "" && nomes.segundNome !== "")) {
        valor = Math.floor((nomes.firstNome.length + nomes.segundNome.length) / 2)
        sms = dados.filter(v => v.id === valor)
        sms.map(itens => { return x = itens.msg })
        casal = nomes.firstNome + " y " + nomes.segundNome
    }
    return (
        <div>


            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="alert alert-success" role="alert">
                        <button onClick={handleClean} type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="alert-heading">{casal}</h4>
                        <p>{x}</p>
                       

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resultado;
