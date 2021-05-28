const stock = [{
    id: 1,
    nome: "Moto G6 Plus",
    preco: 1800
}];
module.exports = {
    //Returns products registered in stock
    async get(req, res){
        try{
            res.status(200).json(stock)
        }catch (error){
            res.status(400).json({ erro: error.message });
        }
    }
}