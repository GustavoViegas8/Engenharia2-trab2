const server = require('../src/routes');
const supertest = require('supertest');
const request = supertest(server);

let item;

beforeEach(() =>{
    item = [{
        produto: "Iphone 7",
        preco: 2600
    },
    {
        produto: "Galaxy Note",
        preco: 3200
    }];
})

test('Deve ser possível ver a lista de itens', async () => {
    await request
        .get('/stock'); 
    expect(200)
});

test('Deve ser possível adicionar um novo item', async () => {
    await request
        .post('/stock')
        .send(item[0]);
    expect(200)
});

test('Deve retornar 400 caso enviar dados errados para cadastro', async() =>{
    await request
        .post('/stock')
        .send({
            nome: "Gustavo",
            idade: 18
        })
        expect(400)
})

test('Não deve ser possível deletar um item inexistente', async() => {
    await request
        .delete('/stock/9')
    .expect(400);
})

test('Deve ser possível deletar um item', async() => {
    await request
        .delete('/stock/1')
    .expect(200);
})

test('Não deve ser possível atualizar o preço de um item inexistente', async () => {
    await request
      .put('/stock/9')
      .send({
        preco: 1400
      })
      .expect(400);
});

test('Deve ser possível atualizar o preço de um item', async () => {
    await request
      .put('/stock/2')
      .send({
          preco: 1600
      })
      .expect(200);
});
  
  
