import { PaginatedResponse } from "../../../../common/resource/paginatedResponse.js";

function GetAllUserResponse(result) {
    return PaginatedResponse(result, user => ({
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        document: user.document,
        phone: user.phone,
        roleId: user.roleId,
    }));
}

export default GetAllUserResponse;