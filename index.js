const http = require("http"); // importando um módulo nativo
const listaDeEstados = require("./estados.json"); // importando do meu projeto

const app = http.createServer((req, res) => {
  console.log(listaDeEstados);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json"); // explicando que o conteúdo que estamos devolvendo é do tipo json
  const respostaEmJson = JSON.stringify(listaDeEstados);

  res.write(respostaEmJson);

  res.end();
});

app.listen(8000, () => console.log("Servidor iniciado na porta 8000"));
