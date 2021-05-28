const stock = [{
    id: 1,
    produto: "Moto G6 Plus",
    preco: 1800
}];
module.exports = {
    //Returns products registered in stock
    async get(req, res){
        try{
            res.status(200).json(stock)
        }catch (error){
            res.status(400).json({erro: error.message});
        }
    },

    //Add an item to the stock
    async post(req, res){
        const { produto, preco } = req.body;
        if (!produto || !preco){
            res.status(400).json({
                erro: "Enviar produto e preço",
            });
            return;
        }
        try{
            stock.push({
                id: stock.length+1,
                produto: produto,
                preco: preco
            })
            res.status(200).json({msg: "Produto Adiciona ao Stock"})
        }catch(error){
            res.status(400).json({erro: error.message});
        }
    },

    //Remove an item to the stock
    async delete(req, res){
        const id = req.params.id
        for (let i = 0; i < stock.length; i++){
            if(id == stock[i].id){
                stock.splice(id-1, 1)
                res.status(200).json({msg: "Item Removido"})
                return;
            }
        }
        res.status(400).json({msg: "Item não consta no stock"})
    },

    //Update an item to the stock
    async put(req, res){
        const id = req.params.id;
        const preco = req.body.preco;
        const item = stock.find((i) => i.id == id);

        if (item){
            item.preco = preco;
            res.status(200).json({msg: "Preço Atualizado"})
        }else{
            res.status(400).json({msg: "Item não consta no stock"})
        }
    }
}