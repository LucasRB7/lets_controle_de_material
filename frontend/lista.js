import './src/style.css'
import { CarregaProdutos } from './src/Js/listando-produtos'

document.querySelector('#list').innerHTML = 
`<body id="body">   
    <div class="menu_btn">
        <div>                    
            <a href="/index.html"><button id="home" class="home" ><i class="fa-solid fa-house"      style="color:#ffffff;"></i></i>&nbsp MENU</button></a>
        </div>
        <div>
            <a href="/cadastro.html"><button id="add" class="add" ><i class="fa-solid   fa-boxes-packing"style="color: #ffffff;"></i>&nbsp ADICIONAR<br>PRODUTOS</button></a>
        </div> 
    </div>
    <main class="main">      
          <section class="produtos_listados" id="produtos_listados">
              <table class="tabela">
                <thead>
                    <tr class="especificacoes">
                       <td>Nome</td>                  
                       <td>Quant</td>
                       <td>Preço</td>
                    </tr>
                </thead>
                <tbody id="tbody_list">
                                                
                </tbody>
              </table>            
          </section>

            <div class="popup">
                <div class="fechar">
                    <button class="btns_action" id="fechar_popup">
                        <i class="fa-solid fa-xmark" style="color:#ff0000"></i>
                    </button>
                </div>
                <div>
                    <label>Nome do Produto:</label>
                    <input class="edit_nome" type="text">
                </div>      
                <div>
                    <label>Quantidade:</label>
                    <input class="edit_quant" type="number">
                </div>
                <div>
                    <label>Preço:</label>
                    <input class="edit_preco" type="number">
                </div>
                <div class="save">
                    <button class="btnSalvarEdi">Salvar</button>
                </div>
            </div>
            
    </main> 
</body>`

CarregaProdutos();