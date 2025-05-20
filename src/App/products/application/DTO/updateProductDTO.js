export default class UpdateProductDTO {
    constructor({id, name, description, price, stock, categoryId}){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.categoryId = categoryId;

        Object.freeze(this);
    }
}
