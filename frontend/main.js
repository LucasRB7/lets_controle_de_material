import './src/style.css'

document.querySelector('#app').innerHTML = 
`<body>   
    <main class="main">
      <section class="menu_inicial" id="menu_inicial">
          <div>
              <h1 class="titulo">Controle de Material</h1>
          </div>      
          <div class="menu_btn">
                <div>                    
                    <a href="/cadastro.html"><button id="add" class="add" ><i class="fa-solid fa-boxes-packing" style="color: #ffffff;"></i>&nbsp ADICIONAR<br>PRODUTOS</button></a>
                </div>
                <div>
                    <a href="/lista.html"><button id="consult" class="consult" > <i class="fa-solid fa-box-open" style="color: #ffffff;"></i>&nbspCONSULTAR<br>PRODUTOS</button></a>
                </div>                
          </div>    
      </section>
    </main> 

</body>`