import './src/style.css'
import { CadastrandoProdutos } from './src/Js/cadastro-produtos';

document.querySelector('#cadastro').innerHTML = 
`<body>   
    <main class="main">
      <section class="cadastro" id="cadastro">
          <div>
              <h1>Cadastre o Material</h1>
          </div>
          <form class="form">
              <label for="nome">*Nome do Produto:</label>            
              <input type="text" name="nome" id="nome" autocomplete="off">
  
              <label for="quantidade">*Quantidade:</label>            
              <input type="number" name="quantidade" id="quantidade" autocomplete="off">

              <label for="preco">*Preço:</label>            
              <input type="number" name="preco" id="preco" autocomplete="off">
          </form>
          <button class="btnSalvar" id="btnSalvar" ><h3>Salvar</h3>
          </button>
          <div>
              <h3 class="msg_confirmacao" id="msg_confirmacao"></h3>
          </div>
      </section>  
      <div class="menu_btn">
        <div>                    
            <a href="/index.html"><button id="home" class="home" ><i class="fa-solid fa-house" style="color: #ffffff;"></i></i>&nbsp MENU</button></a>
        </div>
        <div>
            <a href="/lista.html"><button id="consult" class="consult" > <i class="fa-solid       fa-box-open"style="color: #ffffff;"></i>&nbspCONSULTAR<br>PRODUTOS</button></a>
        </div> 
      <div>                  

    </main>     

</body>`

CadastrandoProdutos(document.querySelector("#btnSalvar"))