class GetProductByIdResponse {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;        
        this.price = product.price;
        this.stock = product.stock;
        this.categoryId = product.categoryId;
    }
}

export default GetProductByIdResponse