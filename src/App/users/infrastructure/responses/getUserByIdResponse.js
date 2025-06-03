class GetUserByIdResponse {
    constructor(user) {
        this.id = user.id
        this.name = user.name;
        this.surname = user.surname;
        this.email = user.email;
        this.document = user.document;
        this.phone = user.phone;
        this.roleId = user.roleId;
    }
}

export default GetUserByIdResponse;