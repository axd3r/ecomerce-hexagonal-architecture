class UpdateAddressDTO {
    constructor({ id, userId, address, department, province, district }) {
        this.id = id;
        this.userId = userId;
        this.address = address;
        this.department = department;
        this.province = province;
        this.district = district;

        Object.freeze(this);
    }
}

export default UpdateAddressDTO;