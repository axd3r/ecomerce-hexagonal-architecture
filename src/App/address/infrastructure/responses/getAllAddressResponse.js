import { PaginatedResponse } from "../../../../common/resource/paginatedResponse.js";

function GetAllAddressResponse(result) {
    return PaginatedResponse(result, address => ({
        id: address.id,
        userId: address.userId,
        address: address.address,
        department: address.department,
        province: address.province,
        district: address.district,
    }));
}

export default GetAllAddressResponse;