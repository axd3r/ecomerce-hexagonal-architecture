import Product from "../../domain/models/Products.js"

export default class GetProductByIdValidator {
    static async validate(data) {
        await this.validateId(data)
    }

    static async validateId(productId){
        const product = await Product.findByPk(productId);
        
        if(!product){
            throw new Error("No se encontro el producto seleccionado");
        }
    }
}