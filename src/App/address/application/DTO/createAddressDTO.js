class CreateAddressDTO {
    constructor({ userId, address, department, province, district }) {
        this.userId = userId;
        this.address = address;
        this.department = department;
        this.province = province;
        this.district = district;

        Object.freeze(this);
    }
}

export default CreateAddressDTO;