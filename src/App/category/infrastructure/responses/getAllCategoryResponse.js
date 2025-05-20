import { PaginatedResponse } from "../../../../common/resource/paginatedResponse.js";

export default function GetAllCategoryResponse(result) {
    return PaginatedResponse(result, category => ({
        id: category.id,
        name: category.name,
        description: category.description,
    }));
}