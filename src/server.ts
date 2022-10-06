import * as express from 'express';

const app = express();
const port = 3000

app.get('/', (resquest, response) => {
    response.send('Hello World');
});

app.get('/bsm', (request, response) => {
    response.send('Persistência <br>' +
    '<br> Responsabilidade Pessoal <br>'+
    '<br> Orientação ao Futuro <br>'+ 
    '<br>Mentalidade de Crescimento <br>'+ 
    '<br> Trabalho em Equipe <br>'+ 
    '<br>Atenção aos Detalhes <br>'+ 
    '<br>Proativdade<br>'+ 
    '<br>Comunicação');
});

app.get('/lista',(request, response) => {
    response.send('Banco de Dados<br> <br>API');
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}!`);
  });