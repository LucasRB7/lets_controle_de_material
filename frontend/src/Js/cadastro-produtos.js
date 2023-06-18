import { Produto } from "./entity"
import { addMaterial } from "./services"

export function CadastrandoProdutos(save){
    let nome = document.getElementById("nome")    
    let quantidade = document.getElementById("quantidade")
    let preco = document.getElementById("preco")
    let notificacao = document.getElementById("msg_confirmacao")  

    
    save.addEventListener("click", () =>{
        
        let produto = new Produto(
            nome.value,
            quantidade.value,
            preco.value            
        )
    
        if(produto.validarDados()){  
            addMaterial(produto)    
            notificacao.style.color = "Green"
            notificacao.innerHTML = "Produto cadastrado com sucesso!" 
            setTimeout(()=>{
                notificacao.innerHTML = ""
                nome.value = ""
                quantidade.value = ""
                preco.value = ""
                nome.focus();                                   
            },2000)
           
        }else{
            notificacao.style.color = "#d41e45"
            notificacao.innerHTML = "*Alguns campos obrigatórios, não foram preenchidos!"
            setTimeout(()=>{
                notificacao.innerHTML = ""
            },3000)
        }
    })

}