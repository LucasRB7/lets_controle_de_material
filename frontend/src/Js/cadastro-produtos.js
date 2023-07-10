import { Produto } from "./entity"
import { addMaterial } from "./services"
import { CarregaProdutos } from "./listando-produtos"

export function CadastrandoProdutos(){
    let nome = document.getElementById("nome")    
    let quantidade = document.getElementById("quantidade")
    let preco = document.getElementById("preco")

    let btnSalvar = document.getElementById("btnSalvar")    
    let notificacao = document.getElementById("msg_confirmacao")
    let div_msg = document.getElementById("div_msg");

    nome.focus();          
    
    btnSalvar.addEventListener("click", () =>{
        
        let produto = new Produto(
            nome.value,
            quantidade.value,
            preco.value            
        )
    
        if(produto.validarDados()){  
            addMaterial(produto)
            div_msg.setAttribute("class","msg_ok")                                            
            notificacao.style.color = "Green"
            notificacao.style.fontWeight = "700"
            notificacao.innerHTML = "Produto cadastrado com sucesso!"             
            setTimeout(()=>{
                div_msg.setAttribute("class","")
                notificacao.innerHTML = ""
                nome.value = ""
                quantidade.value = ""
                preco.value = ""
                               
                window.location.reload();                                                  
            },1500)
           
        }else{
            div_msg.setAttribute("class","msg_negative") 
            notificacao.style.color = "#d41e45"
            notificacao.style.fontWeight = "700"
            notificacao.innerHTML = "*Alguns campos obrigatórios, não foram preenchidos!"
            setTimeout(()=>{
                div_msg.setAttribute("class","")
                notificacao.innerHTML = ""
            },2000)
        }
    })
}

CadastrandoProdutos();
CarregaProdutos();