class GetAddressByIdDTO {
    constructor({ id }) {
        this.id = id;

        Object.freeze(this);
    }
}

export default GetAddressByIdDTO;