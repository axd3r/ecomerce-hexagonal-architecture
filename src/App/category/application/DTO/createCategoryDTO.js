export default class CreateCategoryDTO {
    constructor({ name, description }) {
        this.name = name;
        this.description = description;

        Object.freeze(this);
    }
}
