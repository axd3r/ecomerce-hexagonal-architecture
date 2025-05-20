export default class GetCategoryByIdResponse {
    constructor(category) {
        this.id = category.id;
        this.name = category.name;
        this.description = category.description;
    }
}
