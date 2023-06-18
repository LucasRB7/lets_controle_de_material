import { Produto } from "./entity"
import { readMaterial } from "./services"
import { updateMaterial } from "./services"
import { deleteMaterial } from "./services"


export async function CarregaProdutos(){    
    
    let fechar_popup = document.getElementById("fechar_popup")
    let listMaterial = document.getElementById("tbody_list")
    let editItem = document.querySelector(".popup")
    let btnSalvarEdi = document.querySelector(".btnSalvarEdi")
    //informaçoes popup
    let edit_nome = document.querySelector(".edit_nome")
    let edit_preco = document.querySelector(".edit_preco")
    let edit_quant = document.querySelector(".edit_quant")
        
    // readMaterial().then((data)=>{console.log(data)})   
    // readMaterial().then( dadosRecuperados => { 
    
        setTimeout(async()=>{
            let dados = await readMaterial().then((dadosRecuperados)=>{return dadosRecuperados})
            console.log(dados) 
            // let dadosOrdem = dados.sort();
            // console.log(dadosOrdem)
            dados.forEach(element => {
                let linha = listMaterial.insertRow()
                linha.setAttribute("class","especificacoes2")
                linha.insertCell(0).innerHTML = element.nome;
                linha.insertCell(1).innerHTML = element.quantidade;
                linha.insertCell(2).innerHTML = `R$${element.preco}`;
                listMaterial.appendChild(linha)
                let btnEdit = document.createElement("button")
                btnEdit.id = element.id;    
                btnEdit.setAttribute("class","btns_action")
                btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square" style="color: #004fd6"><i>'
                linha.insertCell(3).append(btnEdit)
                let btnApagar = document.createElement("button")
                btnApagar.id = element.id;
                btnApagar.setAttribute("class","btns_action")
                btnApagar.innerHTML = '<i class="fa-solid fa-trash" style="color: #d00b0b;"></i>'
                linha.insertCell(4).append(btnApagar)  
                btnSalvarEdi.id = btnApagar.id 
    
                btnApagar.addEventListener("click",function(){
                    deleteMaterial(btnApagar.id)
                    console.log(btnApagar.id)
                    window.location.reload()
                    
                })
        
                btnEdit.addEventListener("click",function(){
                    editItem.style.display = "grid"
                    edit_nome.value  = element.nome
                    edit_quant.value = element.quantidade                
                    edit_preco.value = element.preco            
                    let controllId = this.id
        
                    btnSalvarEdi.addEventListener("click",function save(){
                        let produtoEditado = new Produto(
                        edit_nome.value,
                        Number(edit_quant.value),
                        Number(edit_preco.value)
                    )    
                        
                        updateMaterial(controllId,produtoEditado)
                        //localStorage.setItem(controllId,JSON.stringify(produtoEditado))
                        editItem.style.display = "none"
                        window.location.reload()                        
                       
                    })
        
                });
        
                
                fechar_popup.addEventListener("click",() =>{
                    editItem.style.display = "none"
                })
    
            })
        },1000)
        
    
}
    // console.log(dadosRecuperados)