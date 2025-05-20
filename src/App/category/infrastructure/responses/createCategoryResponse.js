class CreateCategoryResponse {
    constructor(category) {
        this.id = category.id;
        this.name = category.name;
        this.description = category.description;
    }
}

export default CreateCategoryResponse