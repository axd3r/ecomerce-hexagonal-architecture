class UpdateUserDTO {
    constructor({userId, name, surname, email, document, phone, roleId}){
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.document = document;
        this.phone = phone;
        this.roleId = roleId;

        Object.freeze(this);
    }
}

export default UpdateUserDTO;