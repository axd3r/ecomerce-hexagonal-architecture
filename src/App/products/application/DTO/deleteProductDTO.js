class DeleteProductDTO {
    constructor({id}) {
        this.id = id;

        Object.freeze(this);
    }
}

export default DeleteProductDTO;