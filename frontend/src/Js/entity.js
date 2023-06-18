
export class Produto{
    constructor(nome,quantidade,preco){
        this.nome = nome;        
        this.quantidade = quantidade;
        this.preco = preco;
    }    

    validarDados(){
        for(let nomeVariavel in this){
            if(this[nomeVariavel] == undefined || this[nomeVariavel] == "" || this[nomeVariavel] == null){
                return false
            }
        }       
        return true       
    }
}    

// export class Storage{
//     constructor(){
//         let idInicial = localStorage.getItem("id")
//         if(idInicial == null){
//             localStorage.setItem("id", 0)
//         }
//     }
//     ProximoId(){
//         let atualId = localStorage.getItem("id")
//         return (parseInt(atualId)+1)
//     }
//     SalvarStorage(produto){
//         let proxId = this.ProximoId()
//         localStorage.setItem(proxId ,JSON.stringify(produto))
//         localStorage.setItem('id', proxId)        
//     }
//     ListandoMaterias(){
//         let todosOsItens = []
//         //*Recuperando dados cadastrados no localStorage
//         let index = localStorage.getItem("id")
//         for(let idControll = 1; idControll <= index; idControll ++){
//             let listando = JSON.parse(localStorage.getItem(idControll))
//             //*Pular index possivelmente null ou excluidos
//             if(listando === null){
//                 continue
//             }
//             listando.id = idControll;
//             todosOsItens.push(listando)            
//         }
//         return todosOsItens
//     }
// }