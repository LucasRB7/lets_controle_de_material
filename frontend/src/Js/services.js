
export async function addMaterial(material){
    await fetch("http://localhost:3001/material/cadastrar",{
        method: 'POST',
        body: JSON.stringify(material),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    });
}
export async function readMaterial(){
    const response = await fetch("http://localhost:3001/material/",{
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })
    return response.json()   

}
export async function updateMaterial(id,material){
    await fetch(`http://localhost:3001/material/alterar/${id}`,{
        method: 'PUT',
        body: JSON.stringify(material),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    });

}
export async function deleteMaterial(idMaterial){
    await fetch(`http://localhost:3001/material/delete/${idMaterial}`,{
        method: 'DELETE',       
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    });

}