import React from 'react'
import './style.css'
import { useState } from 'react';
export default function Modal({isOpen, setModalFechado}) {

        //state techs com as tecnologias definidas
        const [tipoUsuario, setTipoUsuario] = useState<string[]>(
            [
                "Administrador",
                "Comum"
            ]
        );


if (isOpen) {
    return (
        <main className="main_cadastro">
            <div className="container_cad">
                <div className="cad_conteudo">
                <div className='botaoFechar' onClick={setModalFechado}>X</div>
                    <h1>Cadastro</h1>
                    <hr />
                    <form  className="cad_formulario" method="POST">
                        <div className="cad_box_input">
                            <label htmlFor="nome">Nome Completo:</label>
                            <input
                                type="text"
                                id="nome"
                                // onChange={ (event) => { setNome(event.target.value) } } // pega o valor digitado e coloca como um valor
                                placeholder="Digite aqui seu nome:"
                                required
                            />
                        </div>
                        <div className="cad_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                // onChange={ (event) => { setEmail(event.target.value) } }
                                placeholder="Digite aqui seu e-mail:"
                                required
                            />
                        </div>
                        <div className="cad_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                // onChange={ (event) => { setSenha(event.target.value) } }
                                placeholder="Digite aqui sua senha:"
                                required
                            />
                        </div>
                        <div className="cad_box_input">
                            <label htmlFor="foto">Foto:</label>
                            {/* Passar primeiro como exemplo */}
                            <input
                                type="file"
                                id="foto"
                                // onChange={ verificarCampoUpload } // vai atualizar quando alterar valor do input
                                required
                            />
                        </div>   
                        <div className="cad_linha_select">
                        <label htmlFor="foto">Tipo de usuario:</label>
                                            <select
                                                name=""
                                                id="cad_select_skill"
                                                // onChange={(e) => setSelect(e.target.value)}
                                            >
                                                <option selected disabled value="">Selecione</option>
                                                {
                                                    tipoUsuario.map((tipoUsuario: any, index: number) => {
                                                        return <option key={index} value={tipoUsuario}>{tipoUsuario}</option>
                                                    })
                                                }
                                            </select>
                                                                                    
                        </div>

                        <div className="cad_box_input">
                            {/* Passar primeiro como exemplo */}
                            <input
                            className='enviarCadastro'
                                type="submit"
                            />
                        </div>   
                     </form>
                </div>
            </div>
        </main>
      )
}
return null

}
