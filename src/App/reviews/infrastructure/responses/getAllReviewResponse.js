import { PaginatedResponse } from "../../../../common/resource/paginatedResponse.js";

function GetAllReviewResponse(result) {
    return PaginatedResponse(result, review => ({
        id: review.id,
        userId: review.userId,
        productId: review.productId,
        calification: review.calification,
        comment: review.comment,
    }));
}

export default GetAllReviewResponse;