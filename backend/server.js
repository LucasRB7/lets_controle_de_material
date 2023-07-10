const bodyParser = require('body-parser');
const dbSetup = require('./db/db_setup');
const materia_model = require('./db/model/materia_model');
const cors = require('cors');

const express = require('express');
const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));
const port = 3001;

dbSetup();

app.get('/material/', async (req, res) => {
  try {
    const material = await materia_model.query()
    .orderBy('id');
    res.json(material);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

// app.get('/material/:id', (req, res) => {
//   // Retornar um material baseado no id
//   res.send(req.params.id)
// });

app.post('/material/cadastrar', async (req, res) => {

  try {
    console.log(req.body)
    const material = req.body;
    console.log(material.nome);
    const data = await materia_model.query().insert({
      nome: material.nome,
      quantidade: material.quantidade,
      preco: material.preco
    });

    
    console.log(data); 
    res.send("Material cadastrado com sucesso !");
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error) ;

  }

});

app.put("/material/alterar/:id", async (req, res) => {
  try{
  const idSelecionado = req.params.id;
  console.log(idSelecionado)
  const material = req.body;
  console.log(material)
  await materia_model.query()
  .findById(idSelecionado)
  .patch(material);
  res.send("Material Atualizado com sucesso!")
  
  } catch(error){
    console.log(error);
    res.status(500).json(error);
  }
  
});

app.delete('/material/delete/:id', async (req, res) => {
  try{
  const idSelecionado = req.params.id;
  const material = await materia_model.query().deleteById(idSelecionado)  
  res.send("Material Deletado com sucesso!")
} catch (err){
  console.error(err);
  res.status(500).json(err);
}})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})