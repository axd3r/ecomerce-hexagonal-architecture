export default class UpdateCategoryDTO {
    constructor({ id, name, description }) {
        this.id = id;
        this.name = name;
        this.description = description

        Object.freeze(this);
    }
}
