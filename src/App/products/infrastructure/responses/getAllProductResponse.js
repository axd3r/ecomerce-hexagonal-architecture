import { PaginatedResponse } from "../../../../common/resource/paginatedResponse.js";

export default function GetAllProductResponse(result) {
    return PaginatedResponse(result, product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        categoryId: product.categoryId,
    }));
}