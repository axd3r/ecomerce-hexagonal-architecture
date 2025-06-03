class CreateUserDTO {
    constructor({name, surname, email, document, phone, roleId}){
        this.name       = name;
        this.surname    = surname;
        this.email      = email;
        this.document   = document;
        this.phone      = phone;
        this.roleId     = roleId;

        Object.freeze(this);
    }
}

export default CreateUserDTO;