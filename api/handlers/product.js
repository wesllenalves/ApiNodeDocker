const ProductModel = require('../models/product-mysql');

const transformer =  product => ({
    data: {
        type: 'products',
        id: product.id,
        attributes: {
            name: product.name,
            price: product.price
        },
        links: {
            self: `/api/v1/products/${product.id}`
        }
    }
}); 

const getAll = async (request, h) => {
    const products = await ProductModel.findAll({});
    return { data:  products.map(transformer) };
};

const find = async (req, h) => {
    const product = await ProductModel.findOne({
        where: {
          id: 
            req.params.id
        }
    });

    return transformer(product);
};

const save = async (req, h) => {
    const { name, price } = req.payload;

    const product = await ProductModel.create({
        name: `${name}`,
        price: `${price}`
    });

   

    return h.response(transformer(product)).code(201);
};

/*
const getAll = async (request, h) => {
    const products = await ProductModel.find({});
    return { data: products.map(transformer) };
};

const find = async (req, h) => {
    const product = await ProductModel.findById(req.params.id);
    return transformer(product);
};

const save = async (req, h) => {
    const { name, price } = req.payload;

    const product = new ProductModel;
    product.name = name;
    product.price = price;

    await product.save();

   

    return h.response(transformer(product)).code(201);
};

const remove = async (req, h) => {
    await ProductModel.findOneAndDelete({ _id: req.params.id });
    return h.response().code(204);
    
};

const update =  (req, h) => {
    return "atualizar";
};*/

module.exports = {
    getAll,
    save,
    find,
    /*
    remove,
    update*/
};