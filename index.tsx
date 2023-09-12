import { useState } from "react";
import './style.css'



function CadastroUsuario() {

  //state para pegar tipo de adm
  const [Categoria, setCategoria] = useState<string[]>(
      [
          "Administrador",
          "Comum"
      ]
  );
 
  
// para pegar valores

const [usuario, setUsuario ] = useState<string>('')
const [senha, setSenha ] = useState<string>('')
const [senhaConfirm, setConfirm ] = useState<any>('')
const [foto, setFoto ] = useState<any>('')

const [admSelecionado, admSelecionado] = useState<string[]>([]); // Array (lista) para armazenar o tipo de adm

const [select, setSelect] = useState<string>(""); // state que contém a opção de adm selecionada pelo usuário



 
return(

<main>
    <section className="equipamentos">
      {/*Conteudo Novo usuario*/}
      <section className="Container_usuario">
        <div className="Controle_usuario">
          {/*Novo Usuário*/}
          <div className="novo_usuario">
            <p>Novo Usuário</p>
            <hr />
          </div>
          {/*Botões / Usuario - Tipo de conta - Enviar */}
          <div className="section_1">
            <input
             type="text"
             onChange={ (event) => { setUsuario(event.target.value) } } // pega o valor digitado e coloca como um valor
              placeholder="Usuário" 
              />
            <select name="Categoria" id="Categoria">
              <option selected="" disabled="">
                Categoria
              </option>
              <option value="Administrador">Administrador</option>
              <option value="Comum">Comum</option>
            </select>
            <button type="submit">Confirmar</button>
          </div>
          {/*Botões / Senha - Confirme a Senha */}
          <div className="section_2">
            <input className="input_senha" type="password" placeholder="Senha" />
            <input
              className="input_confirmeasenha"
              type="password"
              placeholder="Confirme a senha"
            />
          </div>
          {/*Icone / Foto */}
          <div className="foto">
            <img src="img/ImgPerfil.png" />
            <a href="#">Inserir foto</a>
          </div>
          {/*Ultimo Acesso*/}
          <div className="ultimo_acesso">
            <p>Ultimo acesso:</p>
            <hr />
          </div>
          {/*Tabela*/}
          <section className="tabela_container">
            <table>
              <tbody>
                <tr>
                  <th>Usuário</th>
                  <th>Categoria</th>
                  <th>Senha</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
                <tr className="linha_impar">
                  <td>2023004</td>
                  <td>Lorem</td>
                  <td>2015</td>
                  <td>
                    <button className="botao1">
                      <img className="img1" src="./file/edit2.png" alt="" />
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="botao1">
                      <img className="img1" src="./file/trash.png" alt="" />
                      Excluir
                    </button>
                  </td>
                </tr>
                <tr className="linha_par">
                  <td>2023004</td>
                  <td>Lorem</td>
                  <td>2015</td>
                  <td>
                    <button className="botao1">
                      <img className="img1" src="./file/edit2.png" alt="" />
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="botao1">
                      <img className="img1" src="./file/trash.png" alt="" />
                      Excluir
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </section>
  </main>
  )
}

export default novoUsuario; 